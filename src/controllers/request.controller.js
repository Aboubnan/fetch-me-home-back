import { Request, Pet, Association, Picture } from "../models/relations.js"
import { requestCreateSchema, requestUpdateSchema } from "../schemas/request.schema.js";
import { NotFoundError } from "../errors/notfound.error.js";
import { IncorrectIdentifierError } from "../errors/incorrectIdentifier.error.js";
import { UserInputError } from "../errors/userinput.error.js";
import sanitizeInput from "../helpers/sanitizeInput.js";

export const requestController = {
    // récupération de toutes les demandes d'adoption (=requests)
    async getAll(_, res) {
        const requests = await Request.findAndCountAll({
            order: [
                ['id', 'asc']
            ],
        });
        res.json(requests);
    },

    // récupération d'une demande d'adoption (= request)
    async getOne(req, res, next) {
        const { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const request = await Request.findByPk(id, {
            include: [{ association: "user", attributes: ['last_name', 'first_name'] }, { association: "pet", attributes: ["name"] }, { association: "association", attributes: ["name"] }] // on met les 3 jointures depuis request ("user", "pet" et "association")
        });

        if (!request) {
            return next(new NotFoundError('Request not found'));
        }
        res.json(request);
    },

    // création d'une nouvelle demande d'adoption (= request)
    async create(req, res, next) {
        // si le token est vérifié, on arrive bien sur cette route

        const inputData = req.body;
        if (!inputData) { // si body vide, erreur 500 avec message
            next(new UserInputError("Body content is empty"))
        }

        // sanitize des données (objet inputData modifié par ref)
        sanitizeInput(inputData);
        console.log(inputData);

        console.log(req.user); // vérification du contenu mis une fois le token vérifié

        // validation des données via Zod
        await requestCreateSchema.parseAsync({ ...inputData, user_id: req.user.id });

        const request = await Request.create({ ...inputData, user_id: req.user.id });
        if (!request) {
            return next(new NotFoundError('request not found'));
        }
        res.status(201).json(request); // renvoi de la demande d'adoption créée
    },

    // mise à jour d'une demande d'adoption
    async update(req, res, next) {
        const { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const inputData = req.body;
        if (!inputData) { // si body vide, erreur 500 avec message
            next(new UserInputError("Body content is empty"))
        }

        // sanitize des données (objet inputData modifié par ref)
        sanitizeInput(inputData);

        // validation des données via Zod
        await requestUpdateSchema.parseAsync(inputData);
        const request = await Request.findByPk(id);
        if (!request) {
            return next(new NotFoundError('request not found'));
        }

        await request.update(inputData);
        res.json(request);
    },

    async delete(req, res, next) {
        const { id } = req.params;

        if (isNaN(id)) {
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const request = await Request.findByPk(id);
        if (!request) {
            return next(new NotFoundError('request not found'));
        }

        // Vérifie que la demande appartient bien à l'utilisateur connecté
        if (request.user_id !== req.user.id && !req.user.is_admin) {
            return res.status(403).json({ message: "Accès interdit : cette demande ne vous appartient pas." });
        }

        await request.destroy();
        res.status(204).end();
    },

    async getMyRequests(req, res, next) {
        try {
            const userId = req.user.id;
            console.log("🔐 Utilisateur connecté :", req.user);

            const requests = await Request.findAll({
                where: { user_id: req.user.id },
                include: [
                    {
                        model: Pet,
                        as: 'pet',
                        attributes: ['id', 'name', 'species_id'],
                        include: [
                            {
                                model: Picture,
                                as: 'pictures', // 👈 assure-toi que l'alias correspond à celui défini dans relations.js
                                attributes: ['id', 'url'],
                            },
                        ],
                    },
                    {
                        model: Association,
                        as: 'association',
                        attributes: ['id', 'name'],
                    },
                ],
                order: [['starting_date', 'DESC']],
            });

            console.log("📦 Requêtes trouvées :", JSON.stringify(requests, null, 2));



            res.json(requests);
        } catch (err) {
            console.error("❌ Erreur dans getMyRequests :", err);
            next(err);
        }
    }
}
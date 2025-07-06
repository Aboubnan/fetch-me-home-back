import { Request } from "../models/relations.js"
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
    async getOne(req, res,next) {
        const { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const request = await Request.findByPk(id, {
            include: [{association: "user", attributes: ['last_name', 'first_name']}, {association: "pet", attributes: ["name"]}, {association: "association", attributes: ["name"]}] // on met les 3 jointures depuis request ("user", "pet" et "association")
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
        if(!inputData) { // si body vide, erreur 500 avec message
            next(new UserInputError("Body content is empty"))
        }
    
        // sanitize des données (objet inputData modifié par ref)
        sanitizeInput(inputData);
        console.log(inputData);

        console.log(req.user); // vérification du contenu mis une fois le token vérifié
        
        // validation des données via Zod
        await requestCreateSchema.parseAsync({...inputData, user_id: req.user.id});

        const request = await Request.create({...inputData, user_id: req.user.id});
        if (!request) {
            return next(new NotFoundError('request not found'));
        }
        res.status(201).json(request); // renvoi de la demande d'adoption créée
    },
    
    // mise à jour d'une demande d'adoption
    async update(req, res, next) {
        const  { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const inputData = req.body;
        if(!inputData) { // si body vide, erreur 500 avec message
            next(new UserInputError("Body content is empty"))
        }

        // sanitize des données (objet inputData modifié par ref)
        sanitizeInput(inputData);
        
        // validation des données via Zod
        await requestUpdateSchema.parseAsync(inputData);
        const request = await Request.findByPk(id);
        if(!request){
            return next(new NotFoundError('request not found'));
        }
    
        await request.update(inputData);
        res.json(request);
    },
    
    async delete(req, res, next) {
        const { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }
        
        const request = await Request.findByPk(id);
        if(!request){
            return next(new NotFoundError('request not found'));
        }
        
        await request.destroy();
        res.status(204).end();
    }
}
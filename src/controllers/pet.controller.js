import { IncorrectIdentifierError } from "../errors/incorrectIdentifier.error.js";
import { NotFoundError } from "../errors/notfound.error.js";
import { UserInputError } from "../errors/userinput.error.js";
import sanitizeInput from "../helpers/sanitizeInput.js";
import { Pet } from "../models/relations.js";
import { petCreateSchema, petUpdateSchema } from "../schemas/pet.schema.js";

export const petController = {
	// récuperer tous les pets
	async getALL(req, res) {
        const limit = req.query.limit || null; // on récupère la valeur limit s'il y en a une (utilisée pour les 5 derniers animaux pour le slider)
        console.log(limit);                
        const pets = await Pet.findAndCountAll({
            order: [
                ['id', limit ? "DESC" : "ASC"] // Trie les résultats par ID en ordre croissant (si limite, on aura un tri décroissant)
            ],
            include: ['species', 'association', {association: 'pictures', order:[['id', "asc"]], separate: true}], // on récupère les données species, association et picture de chaque animal
            limit: limit,                                                        // separate à true obligatoire pour avoir l'ordre fait sur pictures, indépendamment du tri de animals
            distinct: true // afin d'avoir le bon décompte d'animaux 
        });
        res.json(pets); // envoie la liste des pets en réponse
	},

	// Récupérer un pet spécifique par son ID
	async getOne(req, res, next) {
		const { id } = req.params; // Extraction de l'ID depuis les paramètres de l'URL
		// si id n'est pas un number, on continue via next pour aboutir une 404 (on précise que l'id est incorrect car pas du bon format !)
		if (isNaN(id)) {
			console.log(id);
			return next(new IncorrectIdentifierError("Incorrect identifier"));
		}

		const pet = await Pet.findByPk(id, {
			include: ["species", "association", "pictures", "requests"], // on récupère les données species, association, picture et request de l'animal !
		});
		if (!pet) {
			return next(new NotFoundError("pet not found")); // Retourne une erreur si le pet n'existe pas
		}
		res.json(pet); // renvoie le pet trouvé en réponse
	},

	// Créer un nouveau pet
	async create(req, res, next) {
		const inputData = req.body; //Données d'entrée pour la création de l'pet
		if (!inputData) {
			// erreur si body vide
			return next(new UserInputError("Body content is empty"));
		}

		// test de validation des données via le schéma 'petCreateSchema' de Zod
		await petCreateSchema.parseAsync(inputData);
		const pet = await Pet.create(inputData); // Création du pet en base de données
		if (!pet) {
			return next(new NotFoundError("pet not found")); // Si le pet n'existe pas, on passe une erreur au middleware
		}
		res.status(201).json(pet); // Envoie le pet créée en réponse avec le statut 201 (Créé)
	},
    
    // Mettre a jour un pet existant
    async update(req, res, next) {
        const  { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir à la 404
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }

        const inputData = req.body;
        if(!inputData) {  // erreur si body vide
            return next(new UserInputError("Body content is empty"));
        }

        // sanitize des données (objet inputData modifié par ref)
        sanitizeInput(inputData);
        
        // validation par schéma ZOD
        await petUpdateSchema.parseAsync(inputData);
        
        const pet = await Pet.findByPk(id);
        if(!pet){
            return next(new NotFoundError('Pet not found'));
        }
    
        // On met à jour le pet avec les nouvelles données
        await pet.update(inputData);
        res.json(pet);
    },
    
    async delete(req, res, next) {
        const { id } = req.params;
        // si id n'est pas un number, on continue via next pour aboutir à la 404
        if (isNaN(id)) {
            console.log(id);
            return next(new IncorrectIdentifierError("Incorrect identifier"));
        }
        
        const pet = await Pet.findByPk(id);
        if(!pet){
            return next(new NotFoundError('Pet not found'));
        }
    
        // On supprime le pet de la base de données
        await pet.destroy();
        res.status(204).end();
    }
}


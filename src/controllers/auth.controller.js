import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { NotFoundError } from "../errors/notfound.error.js";
import { Association } from "../models/Association.js";

export const authController = {
    async loginUser(req, res, next) {
        console.log(req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new NotFoundError("Email and password are required"));
        }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return next(new NotFoundError("Bad credentials")); 
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) {
                return next(new NotFoundError("Bad credentials")); //erreur personnalisée 401 : "invalid user or password"
            }

            // Détermination du rôle basé sur is_admin
            const role = user.is_admin ? 'admin' : 'benevole';
            const id = user.id; // ajout id nécessaire pour adption

            const token = jwt.sign(      // payload du token avec l'id, email et le role du user connecté
                { 
                    id: user.id,
                    email: user.email,
                    role: role
                },
                process.env.JWT_SECRET,  // utilisation de la clé pour hâcher le token afin qu'il ne soit lisible que par le serveur
                { expiresIn: "2h"}       // expiration dans 2h
            ); 

            return res.status(200).json({ token, role, id });
    },

    async loginAssociation(req, res, next) {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new NotFoundError("Email and password are required"));
        }

            const association = await Association.findOne({ where: { email } });
            if (!association) {
                return next(new NotFoundError("Bad credentials"));
            }

            const isPasswordValid = await bcrypt.compare(password, association.password)
            if (!isPasswordValid) {
                return next(new NotFoundError("Bad credentials"));
            }

            const token = jwt.sign(         // payload du token avec l'id et email de l'association connecté
                { 

                    id: association.id,
                    email: association.email,
                    role: 'association' 
                },
                process.env.JWT_SECRET,
                { expiresIn: "2h"}
            ); 

            return res.status(200).json({ token, role: 'association' });
    }
}
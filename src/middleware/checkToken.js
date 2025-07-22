import { UnauthorizedError } from "../errors/unauthorized.error.js";
import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    const header = req.headers['authorization']; // récupération de l'entête authorization
    console.log("Authorization header:", req.headers['authorization']);

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];  // on récupère le token seul
        console.log("Clé utilisée pour vérifier :", process.env.JWT_SECRET);
        // on fait la vérification du token via la méthode verify de jwt
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                console.log("❌ Erreur de vérification JWT :", err.message);
                return next(new UnauthorizedError("You are not authorized"));
            } else {
                console.log("✅ Token décodé :", data); // ✅ ici, data contient { id, email, role, ... }
                req.user = data;
                next();
            }
        });
    } else {
        return next(new UnauthorizedError("You are not authorized"));
    }

}


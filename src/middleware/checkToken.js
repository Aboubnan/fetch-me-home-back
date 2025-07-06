import { UnauthorizedError } from "../errors/unauthorized.error.js";
import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    const header = req.headers['authorization']; // récupération de l'entête authorization

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];  // on récupère le token seul

        // on fait la vérification du token via la méthode verify de jwt
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err){
                // si erreur, on lance une 403
                return next(new UnauthorizedError("You are not authorized"));
            } else {
                req.user = data; // on met les données récupérées du token (dans 'data') dans req.user
                next();
            }
        });
    } else {
        return next(new UnauthorizedError("You are not authorized"));
    }
}


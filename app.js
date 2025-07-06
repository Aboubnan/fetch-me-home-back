import cors from 'cors'; // CORS (Cross-Origin Resource Sharing) est un mécanisme de sécurité qui permet de contrôler les ressources partagées entre différentes origines
import express from 'express'; // Express est un framework minimaliste pour créer des applications web en Node.js
import { router } from './src/routers/router.js'; // Importation du routeur contenant toutes les routes de l'application
import path from 'path';
import { fileURLToPath } from 'url';



// Création de l'application Express
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Sert les images depuis le dossier /data/images
app.use('/images', express.static(path.resolve(__dirname, 'src/data/images')));



//  Active CORS pour toutes les routes

app.use(
	cors({
		origin: ["http://localhost:5173", "https://fetch-me-home.netlify.app"
		],

		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

// Middleware pour interpréter les requêtes JSON
app.use(express.json());

// Utilisation du routeur pour gérer les différentes routes de l'application
app.use('/', router);

// Définition du port sur lequel le serveur va écouter
// Si une variable d'environnement PORT est définie, on l'utilise, sinon on prend 3000 par défaut
const port = process.env.PORT || 3000;

// Démarrage du serveur et affichage d'un message dans la console pour confirmer qu'il fonctionne
app.listen(port, () =>
	console.log(`<<Fetch me Home>> API launched on http://localhost:${port}`),
);

// Exportation de l'application pour permettre les tests ou l'intégration avec d'autres modules
export default app;

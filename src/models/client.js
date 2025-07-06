import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const client = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ← important pour Render
    },
  },
  define: {
    timestamps: false,
  },
  logging: false,
});

// Test de connexion
client
  .authenticate()
  .then(() => console.log("✅ Connexion au serveur 'fetchMeHome' réussie"))
  .catch((err) => console.error("❌ Erreur de connexion :", err.message));
import { client } from "../models/client.js";
import { Association, User, Pet, Request, Species, Picture } from "../models/relations.js"

// création d'associations
await Association.bulkCreate([
  {
    email: "spa44@spa.fr",
    name: "SPA 21 NANTES",
    password: "azertyuiop",
    address: "route des Landes Bigot",
    zip_code: "44340",
    city: "Bouguenais",
    phone_number: "0249628102",
    logo: "https://www.la-spa.fr/app/app/uploads/2021/09/MicrosoftTeams-image-63.png",
    description:
      "LA SPA de Nantes-Bouguenais vous accueille les lundis, mercredis, vendredis (13h30-17h00) et samedis et dimanches (10h30-12h30/14h00-17h30) pour trouver votre nouveau compagnon de vie. Le refuge se situe au Sud-ouest de Nantes sur la commune de Bouguenais.",
  },
  {
    email: "cda12@cda12.fr",
    name: "Club de Défense des Animaux Paris 12",
    password: "ItIsASecretToEverybody",
    address: "181 avenue Daumesnil",
    zip_code: "75012",
    city: "Paris",
    phone_number: "0174314705",
    logo: "https://www.cda-paris12.com/wp-content/uploads/2023/08/cropped-LOGO-CERCLE-TXT-NOIR.png",
    description:
      "Le CDA 12 (Club de Défense des Animaux Paris 12) est une association d’assistance aux chats abandonnés, située dans le 12ème arrondissement à Paris. Créée en 1979 et reconnue d’intérêt général, l’association s’appuie sur son réseau de familles d’accueil référencées et bénévoles dans tout Paris et la proche banlieue.",
  },
  {
    email: "spa69@spa.fr",
    name: "SPA Lyon Sud Est",
    password: "MotD3PaSS3",
    address: "25 quai Jean Moulin",
    zip_code: "69002",
    city: "Lyon",
    phone_number: "0478387171",
    logo: "https://www.spa-lyon.org/wp-content/uploads/2020/01/spalyon-2019-rvb-300x256.png",
    description:
      "La S.P.A. de Lyon est une association indépendante, créée en 1853 et reconnue d'utilité publique en 1893. Elle porte secours aux animaux en détresse : perdus, abandonnés et maltraités. Elle gère les refuges de Brignais (Rhône) et de Dompierre-sur-Veyle (Ain).",
  },
  {
    email: "contact@refugebordeaux.fr",
    name: "Refuge Animalier de Bordeaux",
    password: "Refuge33",
    address: "14 rue des Marronniers",
    zip_code: "33000",
    city: "Bordeaux",
    phone_number: "0556123456",
    logo: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/146858/optimized_large_thumb_stage.jpg",
    description:
      "Le Refuge Animalier de Bordeaux accueille chaque année plus de 500 animaux abandonnés. Notre mission : leur offrir une seconde chance dans un foyer aimant.",
  },
  {
    email: "accueil@amisdesbetes.org",
    name: "Les Amis des Bêtes",
    password: "Amis2024",
    address: "7 avenue des Tilleuls",
    zip_code: "75012",
    city: "Paris",
    phone_number: "0145789632",
    logo: "https://cdn4.vectorstock.com/i/1000x1000/62/33/icon-logo-for-an-animal-shelter-dog-and-a-cat-vector-3496233.jpg",
    description:
      "Association parisienne dédiée à la protection des animaux domestiques et à la sensibilisation du public à la cause animale.",
  },
  {
    email: "info@coeurcanin.fr",
    name: "Cœur Canin",
    password: "Chien123",
    address: "3 chemin des Lavandes",
    zip_code: "84000",
    city: "Avignon",
    phone_number: "0490321456",
    logo: "https://img.freepik.com/premium-vector/dog-shelters-logo_1011614-12.jpg?w=2000",
    description:
      "Cœur Canin est un refuge spécialisé dans l’accueil et la rééducation de chiens abandonnés ou maltraités dans le Vaucluse.",
  },
  {
    email: "contact@felinslibres.fr",
    name: "Félins Libres",
    password: "Chaton2024",
    address: "18 rue des Ronces",
    zip_code: "44000",
    city: "Nantes",
    phone_number: "0240123456",
    logo: "https://img.freepik.com/premium-vector/animal-shelter-logo-homesweethome-animal-shelter_666353-1906.jpg?w=2000",
    description:
      "Félins Libres œuvre pour la stérilisation, la protection et l’adoption des chats errants dans la région nantaise.",
  },
  {
    email: "refuge@animauxsud.fr",
    name: "Refuge du Sud",
    password: "SudRefuge",
    address: "10 boulevard des Palmiers",
    zip_code: "13008",
    city: "Marseille",
    phone_number: "0491123456",
    logo: "https://www.zarla.com/images/zarla-adopt-a-paw-1x1-2400x2400-20240108-89d4qtqwvf64vq73gf3r.png?crop=1:1,smart&width=250&dpr=2",
    description:
      "Situé à Marseille, le Refuge du Sud accueille chiens, chats et NAC dans un cadre chaleureux et sécurisé.",
  },
  {
    email: "accueil@petitspas.fr",
    name: "Petits Pas",
    password: "Petits123",
    address: "2 impasse des Lilas",
    zip_code: "67000",
    city: "Strasbourg",
    phone_number: "0388123456",
    logo: "https://img.freepik.com/premium-vector/animal-shelter-logo-homesweethome-animal-shelter_666353-1906.jpg?w=2000",
    description:
      "Petits Pas est une association strasbourgeoise qui place les animaux en famille d’accueil en attendant leur adoption définitive.",
  },
  {
    email: "contact@refugeamiens.fr",
    name: "Refuge d'Amiens",
    password: "Amiens2024",
    address: "5 rue des Peupliers",
    zip_code: "80000",
    city: "Amiens",
    phone_number: "0322123456",
    logo: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/146858/optimized_large_thumb_stage.jpg",
    description:
      "Le Refuge d’Amiens recueille les animaux abandonnés ou trouvés et leur offre une seconde chance grâce à l’adoption.",
  },
  {
    email: "info@animauxlibres.fr",
    name: "Animaux Libres",
    password: "Libre2024",
    address: "9 rue des Érables",
    zip_code: "59000",
    city: "Lille",
    phone_number: "0320123456",
    logo: "https://cdn4.vectorstock.com/i/1000x1000/62/33/icon-logo-for-an-animal-shelter-dog-and-a-cat-vector-3496233.jpg",
    description:
      "Animaux Libres est une association lilloise qui lutte contre la maltraitance animale et favorise l’adoption responsable.",
  },
  {
    email: "accueil@refugegrenoble.fr",
    name: "Refuge de Grenoble",
    password: "Grenoble123",
    address: "11 rue des Alpes",
    zip_code: "38000",
    city: "Grenoble",
    phone_number: "0476123456",
    logo: "https://img.freepik.com/premium-vector/dog-shelters-logo_1011614-12.jpg?w=2000",
    description:
      "Le Refuge de Grenoble accueille chiens et chats abandonnés et leur offre soins, sécurité et amour en attendant une nouvelle famille.",
  },
]);

// création des espèces
await Species.bulkCreate([
  {
    name: "Chien"
  },

  {
    name: "Chat"
  },

  {
    name: "Lapin"
  },

  {
    name: "Furet"
  },

  {
    name: "Hamster"
  },

  {
    name: "Perroquet"
  }
]);

// création d'utilisateurs (1 admin et 2 bénévoles)
await User.bulkCreate([
  {
    email: "lea.dupont@example.com",
    password: "benevole123",
    first_name: "Léa",
    last_name: "Dupont",
    address: "12 rue des Lilas",
    zip_code: "75012",
    city: "Paris",
    phone_number: "0601020304"
  },
  {
    email: "mehdi.benali@example.com",
    password: "benevole123",
    first_name: "Mehdi",
    last_name: "Benali",
    address: "45 avenue Victor Hugo",
    zip_code: "69003",
    city: "Lyon",
    phone_number: "0611223344"
  },
  {
    email: "camille.roche@example.com",
    password: "benevole123",
    first_name: "Camille",
    last_name: "Roche",
    address: "8 rue des Acacias",
    zip_code: "33000",
    city: "Bordeaux",
    phone_number: "0678451296"
  },
  {
    email: "julien.martin@example.com",
    password: "benevole123",
    first_name: "Julien",
    last_name: "Martin",
    address: "3 place Bellecour",
    zip_code: "69002",
    city: "Lyon",
    phone_number: "0623456789"
  },
  {
    email: "sarah.klein@example.com",
    password: "benevole123",
    first_name: "Sarah",
    last_name: "Klein",
    address: "22 rue des Peupliers",
    zip_code: "67000",
    city: "Strasbourg",
    phone_number: "0634567890"
  },
  {
    email: "nicolas.durand@example.com",
    password: "benevole123",
    first_name: "Nicolas",
    last_name: "Durand",
    address: "5 avenue de la République",
    zip_code: "13001",
    city: "Marseille",
    phone_number: "0645678901"
  },
  {
    email: "emma.lefevre@example.com",
    password: "benevole123",
    first_name: "Emma",
    last_name: "Lefèvre",
    address: "17 rue des Écoles",
    zip_code: "31000",
    city: "Toulouse",
    phone_number: "0656789012"
  },
  {
    email: "thomas.moreau@example.com",
    password: "benevole123",
    first_name: "Thomas",
    last_name: "Moreau",
    address: "9 boulevard Haussmann",
    zip_code: "75009",
    city: "Paris",
    phone_number: "0667890123"
  },
  {
    email: "ines.benoit@example.com",
    password: "benevole123",
    first_name: "Inès",
    last_name: "Benoît",
    address: "14 rue des Fleurs",
    zip_code: "44000",
    city: "Nantes",
    phone_number: "0678901234"
  },
  {
    email: "lucas.giraud@example.com",
    password: "benevole123",
    first_name: "Lucas",
    last_name: "Giraud",
    address: "6 chemin des Vignes",
    zip_code: "80000",
    city: "Amiens",
    phone_number: "0689012345"
  }
]);

// création d'animaux à adopter
await Pet.bulkCreate([
  // 🐶 Chiens
  { name: "Rex", birthdate: "2020-01-01", sex: "male", description: "Chien joueur", species_id: 1, association_id: 1 },
  { name: "Max", birthdate: "2021-03-20", sex: "male", description: "Adore courir", species_id: 1, association_id: 2 },
  { name: "Rocky", birthdate: "2018-11-30", sex: "male", description: "Protecteur", species_id: 1, association_id: 3 },

  // 🐱 Chats
  { name: "Zelda", birthdate: "2019-12-12", sex: "female", description: "Très vive", species_id: 2, association_id: 4 },
  { name: "Tom", birthdate: "2021-01-01", sex: "male", description: "Curieux", species_id: 2, association_id: 5 },
  { name: "Luna", birthdate: "2021-07-07", sex: "female", description: "Très calme", species_id: 2, association_id: 6 },

  // 🐰 Lapins
  { name: "Coco", birthdate: "2021-04-01", sex: "male", description: "Lapin curieux", species_id: 3, association_id: 1 },
  { name: "Bunny", birthdate: "2022-06-06", sex: "male", description: "Adore sauter", species_id: 3, association_id: 2 },
  { name: "Thumper", birthdate: "2020-03-03", sex: "male", description: "Toujours actif", species_id: 3, association_id: 3 },

  // 🐾 Furets
  { name: "Daisy", birthdate: "2020-12-12", sex: "female", description: "Très affectueuse", species_id: 4, association_id: 4 },

  // 🐹 Hamsters
  { name: "Lili", birthdate: "2020-04-04", sex: "female", description: "Adore les câlins", species_id: 5, association_id: 6 },
  { name: "Popcorn", birthdate: "2020-12-12", sex: "male", description: "Toujours en mouvement", species_id: 5, association_id: 5 },
  { name: "Peach", birthdate: "2021-03-03", sex: "female", description: "Adore se cacher", species_id: 5, association_id: 6 },

  // 🦜 Perroquets
  { name: "Rio", birthdate: "2021-05-05", sex: "male", description: "Perroquet joueur", species_id: 6, association_id: 1 },
  { name: "Kiwi", birthdate: "2020-08-08", sex: "female", description: "Très curieuse", species_id: 6, association_id: 2 },
  { name: "Coco", birthdate: "2022-01-01", sex: "male", description: "Adore parler", species_id: 6, association_id: 3 }
]);

// création d'une requête d'adoption
await Request.bulkCreate([
  {
    starting_date: "2025-04-30",
    ending_date: "2025-05-15",
    request_text: "Bonjour, Blablablabla...",
    user_id: 2,
    pet_id: 3,
    association_id: 1
  }
])

// création d'images pour animaux
await Picture.bulkCreate([
  // 🐶 Chiens
  { url: "/images/dog/alvan-nee-73jFlBFUk5Y-unsplash.jpg", pet_id: 1 },
  { url: "/images/dog/alvan-nee-ME65VXZBL5M-unsplash.jpg", pet_id: 1 },
  { url: "/images/dog/alvan-nee-Q2J38A2V5y-unsplash.jpg", pet_id: 1 },

  { url: "/images/dog/border-collie.jpg", pet_id: 2 },
  { url: "/images/dog/border-collie2.jpg", pet_id: 2 },
  { url: "/images/dog/border-collie3.jpg", pet_id: 2 },

  { url: "/images/dog/dog3.jpg", pet_id: 3 },
  { url: "/images/dog/dog3-2.jpg", pet_id: 3 },
  { url: "/images/dog/dog3-3.jpg", pet_id: 3 },

  // 🐱 Chats
  { url: "/images/cat/alvan-nee-GoqMTQFiAyY-unsplash.jpg", pet_id: 4 },
  { url: "/images/cat/alvan-nee-kfDLP0sSmU4-unsplash.jpg", pet_id: 4 },
  { url: "/images/cat/alvan-nee-L4xD28wS0QQ-unsplash.jpg", pet_id: 4 },

  { url: "/images/cat/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg", pet_id: 5 },
  { url: "/images/cat/sergey-semin-Y0WXj3xqJz0-unsplash.jpg", pet_id: 5 },
  { url: "/images/cat/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg", pet_id: 5 },

  { url: "/images/cat/amber-kipp-75715CVEJhI-unsplash.jpg", pet_id: 6 },
  { url: "/images/cat/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg", pet_id: 6 },
  { url: "/images/cat/krysten-merriman-7BrhZmwXn08-unsplash.jpg", pet_id: 6 },

  // 🐰 Lapins
  { url: "/images/rabbit/adrian-pereira-H81tkoe-a0-unsplash.jpg", pet_id: 7 },
  { url: "/images/rabbit/gary-bendig-KyHT4tDEQ-unsplash.jpg", pet_id: 7 },
  { url: "/images/rabbit/lucy-m-KNMBRhfSIT8-unsplash.jpg", pet_id: 7 },

  { url: "/images/rabbit/sandy-millar-kKAaCe6fswY-unsplash.jpg", pet_id: 8 },
  { url: "/images/rabbit/eric-jan-leusink-SDXAVHbA-unsplash.jpg", pet_id: 8 },
  { url: "/images/rabbit/janan-302ofliG0FE-unsplash.jpg", pet_id: 8 },

  { url: "/images/rabbit/stefan-fluck-usojCs--nEk-unsplash.jpg", pet_id: 9 },
  { url: "/images/rabbit/satyabratasm-uKMVN-BWyU-unsplash.jpg", pet_id: 9 },
  { url: "/images/rabbit/guillermo-casales-LQCoell5v2M-unsplash.jpg", pet_id: 9 },

  // 🐾 Furets
  { url: "/images/furret/furret4.jpg", pet_id: 10 },
  { url: "/images/furret/furret4-2.jpg", pet_id: 10 },
  { url: "/images/furret/furret4-3.jpg", pet_id: 10 },

  // 🐹 Hamsters
  { url: "/images/hamster/alvan-nee-4aU3p3Y6Zz8-unsplash.jpg", pet_id: 11 },
  { url: "/images/hamster/alvan-nee-8g0D2ZfA2i8-unsplash.jpg", pet_id: 11 },
  { url: "/images/hamster/alvan-nee-9Z1KRIfpBTM-unsplash.jpg", pet_id: 11 },

  { url: "/images/hamster/alvan-nee-AX9qD2z5n3I-unsplash.jpg", pet_id: 12 },
  { url: "/images/hamster/alvan-nee-BY7xK3qJz9M-unsplash.jpg", pet_id: 12 },
  { url: "/images/hamster/alvan-nee-CZ8rL4sKp1N-unsplash.jpg", pet_id: 12 },

  { url: "/images/hamster/alvan-nee-DW9sM5tLp2O-unsplash.jpg", pet_id: 13 },
  { url: "/images/hamster/alvan-nee-EA0tN6uMq3P-unsplash.jpg", pet_id: 13 },
  { url: "/images/hamster/alvan-nee-FB1uO7vNr4Q-unsplash.jpg", pet_id: 13 },

  // 🦜 Perroquets
  { url: "/images/perroquet/david-clode-1XnBGOdIdjI-unsplash.jpg", pet_id: 14 },
  { url: "/images/perroquet/david-clode-4gLzJY3GzQg-unsplash.jpg", pet_id: 14 },
  { url: "/images/perroquet/david-clode-5D9z4oZz1xk-unsplash.jpg", pet_id: 14 },

  { url: "/images/perroquet/david-clode-6aLk5QZz2yY-unsplash.jpg", pet_id: 15 },
  { url: "/images/perroquet/david-clode-7bM8rRZz3zZ-unsplash.jpg", pet_id: 15 },
  { url: "/images/perroquet/david-clode-8cN9sSZz4wW-unsplash.jpg", pet_id: 15 },

  { url: "/images/perroquet/david-clode-9dO0tTZz5vV-unsplash.jpg", pet_id: 16 },
  { url: "/images/perroquet/david-clode-aeP8ZUZz6uU-unsplash.jpg", pet_id: 16 },
  { url: "/images/perroquet/david-clode-bfQ9aVZz7tT-unsplash.jpg", pet_id: 16 },
]);

console.log("Seeding des données terminé !!!");
await client.close();

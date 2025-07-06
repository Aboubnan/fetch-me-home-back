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
        description: "LA SPA de Nantes-Bouguenais vous accueille les lundis, mercredis, vendredis (13h30-17h00) et samedis et dimanches (10h30-12h30/14h00-17h30) pour trouver votre nouveau compagnon de vie. Le refuge se situe au Sud-ouest de Nantes sur la commune de Bouguenais."
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
        description: "Le CDA 12 (Club de Défense des Animaux Paris 12) est une association d’assistance aux chats abandonnés, située dans le 12ème arrondissement à Paris. Créée en 1979 et reconnue d’intérêt général, l’association s’appuie sur son réseau de familles d’accueil référencées et bénévoles dans tout Paris et la proche banlieue."
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
    description: "La S.P.A. de Lyon est une association indépendante, créée en 1853 et reconnue d'utilité publique en 1893. Elle porte secours aux animaux en détresse : perdus, abandonnés et maltraités. Elle gère les refuges de Brignais (Rhône) et de Dompierre-sur-Veyle (Ain)."
  },
  {
    email: "contact@refugebordeaux.fr",
    name: "Refuge Animalier de Bordeaux",
    password: "Refuge33",
    address: "14 rue des Marronniers",
    zip_code: "33000",
    city: "Bordeaux",
    phone_number: "0556123456",
    logo: "https://via.placeholder.com/150?text=Refuge+Bordeaux",
    description: "Le Refuge Animalier de Bordeaux accueille chaque année plus de 500 animaux abandonnés. Notre mission : leur offrir une seconde chance dans un foyer aimant."
  },
  {
    email: "accueil@amisdesbetes.org",
    name: "Les Amis des Bêtes",
    password: "Amis2024",
    address: "7 avenue des Tilleuls",
    zip_code: "75012",
    city: "Paris",
    phone_number: "0145789632",
    logo: "https://via.placeholder.com/150?text=Amis+des+Bêtes",
    description: "Association parisienne dédiée à la protection des animaux domestiques et à la sensibilisation du public à la cause animale."
  },
  {
    email: "info@coeurcanin.fr",
    name: "Cœur Canin",
    password: "Chien123",
    address: "3 chemin des Lavandes",
    zip_code: "84000",
    city: "Avignon",
    phone_number: "0490321456",
    logo: "https://via.placeholder.com/150?text=Cœur+Canin",
    description: "Cœur Canin est un refuge spécialisé dans l’accueil et la rééducation de chiens abandonnés ou maltraités dans le Vaucluse."
  },
  {
    email: "contact@felinslibres.fr",
    name: "Félins Libres",
    password: "Chaton2024",
    address: "18 rue des Ronces",
    zip_code: "44000",
    city: "Nantes",
    phone_number: "0240123456",
    logo: "https://via.placeholder.com/150?text=Félins+Libres",
    description: "Félins Libres œuvre pour la stérilisation, la protection et l’adoption des chats errants dans la région nantaise."
  },
  {
    email: "refuge@animauxsud.fr",
    name: "Refuge du Sud",
    password: "SudRefuge",
    address: "10 boulevard des Palmiers",
    zip_code: "13008",
    city: "Marseille",
    phone_number: "0491123456",
    logo: "https://via.placeholder.com/150?text=Refuge+Sud",
    description: "Situé à Marseille, le Refuge du Sud accueille chiens, chats et NAC dans un cadre chaleureux et sécurisé."
  },
  {
    email: "accueil@petitspas.fr",
    name: "Petits Pas",
    password: "Petits123",
    address: "2 impasse des Lilas",
    zip_code: "67000",
    city: "Strasbourg",
    phone_number: "0388123456",
    logo: "https://via.placeholder.com/150?text=Petits+Pas",
    description: "Petits Pas est une association strasbourgeoise qui place les animaux en famille d’accueil en attendant leur adoption définitive."
  },
  {
    email: "contact@refugeamiens.fr",
    name: "Refuge d'Amiens",
    password: "Amiens2024",
    address: "5 rue des Peupliers",
    zip_code: "80000",
    city: "Amiens",
    phone_number: "0322123456",
    logo: "https://via.placeholder.com/150?text=Refuge+Amiens",
    description: "Le Refuge d’Amiens recueille les animaux abandonnés ou trouvés et leur offre une seconde chance grâce à l’adoption."
  },
  {
    email: "info@animauxlibres.fr",
    name: "Animaux Libres",
    password: "Libre2024",
    address: "9 rue des Érables",
    zip_code: "59000",
    city: "Lille",
    phone_number: "0320123456",
    logo: "https://via.placeholder.com/150?text=Animaux+Libres",
    description: "Animaux Libres est une association lilloise qui lutte contre la maltraitance animale et favorise l’adoption responsable."
  },
  {
    email: "accueil@refugegrenoble.fr",
    name: "Refuge de Grenoble",
    password: "Grenoble123",
    address: "11 rue des Alpes",
    zip_code: "38000",
    city: "Grenoble",
    phone_number: "0476123456",
    logo: "https://via.placeholder.com/150?text=Refuge+Grenoble",
    description: "Le Refuge de Grenoble accueille chiens et chats abandonnés et leur offre soins, sécurité et amour en attendant une nouvelle famille."
  }
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
  // 🐶 Chiens (1–12)
  { name: "Rex", birthdate: "2020-01-01", sex: "male", description: "Chien joueur", species_id: 1, association_id: 1 },
  { name: "Bella", birthdate: "2019-05-12", sex: "female", description: "Très affectueuse", species_id: 1, association_id: 1 },
  { name: "Max", birthdate: "2021-03-20", sex: "male", description: "Adore courir", species_id: 1, association_id: 2 },
  { name: "Luna", birthdate: "2022-07-15", sex: "female", description: "Chienne calme", species_id: 1, association_id: 2 },
  { name: "Rocky", birthdate: "2018-11-30", sex: "male", description: "Protecteur", species_id: 1, association_id: 3 },
  { name: "Maya", birthdate: "2020-09-10", sex: "female", description: "Très douce", species_id: 1, association_id: 3 },
  { name: "Toby", birthdate: "2021-06-01", sex: "male", description: "Toujours curieux", species_id: 1, association_id: 4 },
  { name: "Nala", birthdate: "2019-02-14", sex: "female", description: "Très sociable", species_id: 1, association_id: 4 },
  { name: "Oscar", birthdate: "2020-12-25", sex: "male", description: "Petit gabarit", species_id: 1, association_id: 5 },
  { name: "Chanel", birthdate: "2021-08-08", sex: "female", description: "Très élégante", species_id: 1, association_id: 5 },
  { name: "Simba", birthdate: "2022-01-10", sex: "male", description: "Toujours joyeux", species_id: 1, association_id: 6 },
  { name: "Daisy", birthdate: "2020-04-04", sex: "female", description: "Adore les enfants", species_id: 1, association_id: 6 },

  // 🐱 Chats (13–24)
  { name: "Milo", birthdate: "2021-02-02", sex: "male", description: "Chat câlin", species_id: 2, association_id: 1 },
  { name: "Lily", birthdate: "2020-06-06", sex: "female", description: "Très calme", species_id: 2, association_id: 1 },
  { name: "Charlie", birthdate: "2019-09-09", sex: "male", description: "Indépendant", species_id: 2, association_id: 2 },
  { name: "Cleo", birthdate: "2022-03-03", sex: "female", description: "Très joueuse", species_id: 2, association_id: 2 },
  { name: "Felix", birthdate: "2020-10-10", sex: "male", description: "Gros dormeur", species_id: 2, association_id: 3 },
  { name: "Mimi", birthdate: "2021-11-11", sex: "female", description: "Très douce", species_id: 2, association_id: 3 },
  { name: "Shadow", birthdate: "2018-08-08", sex: "male", description: "Discret", species_id: 2, association_id: 4 },
  { name: "Zelda", birthdate: "2019-12-12", sex: "female", description: "Très vive", species_id: 2, association_id: 4 },
  { name: "Tom", birthdate: "2021-01-01", sex: "male", description: "Curieux", species_id: 2, association_id: 5 },
  { name: "Nina", birthdate: "2020-05-05", sex: "female", description: "Très affectueuse", species_id: 2, association_id: 5 },
  { name: "Gus", birthdate: "2022-02-02", sex: "male", description: "Petit explorateur", species_id: 2, association_id: 6 },
  { name: "Luna", birthdate: "2021-07-07", sex: "female", description: "Très calme", species_id: 2, association_id: 6 },

  // 🐰 Lapins (25–36)
  { name: "Coco", birthdate: "2021-04-01", sex: "male", description: "Lapin curieux", species_id: 3, association_id: 1 },
  { name: "Snow", birthdate: "2020-12-12", sex: "female", description: "Très douce", species_id: 3, association_id: 1 },
  { name: "Bunny", birthdate: "2022-06-06", sex: "male", description: "Adore sauter", species_id: 3, association_id: 2 },
  { name: "Fluffy", birthdate: "2021-09-09", sex: "female", description: "Très câline", species_id: 3, association_id: 2 },
  { name: "Thumper", birthdate: "2020-03-03", sex: "male", description: "Toujours actif", species_id: 3, association_id: 3 },
  { name: "Lola", birthdate: "2021-10-10", sex: "female", description: "Très calme", species_id: 3, association_id: 3 },
  { name: "Choco", birthdate: "2019-11-11", sex: "male", description: "Petit gourmand", species_id: 3, association_id: 4 },
  { name: "Mochi", birthdate: "2020-08-08", sex: "female", description: "Très douce", species_id: 3, association_id: 4 },
  { name: "Jazz", birthdate: "2021-05-05", sex: "male", description: "Lapin joueur", species_id: 3, association_id: 5 },
  { name: "Cookie", birthdate: "2022-01-01", sex: "female", description: "Très sociable", species_id: 3, association_id: 5 },
  { name: "Biscuit", birthdate: "2020-07-07", sex: "male", description: "Très calme", species_id: 3, association_id: 6 },
  { name: "Poppy", birthdate: "2021-03-03", sex: "female", description: "Adore les câlins", species_id: 3, association_id: 6 },

  // 🐾 Furets (37–50)
  { name: "Ziggy", birthdate: "2021-02-02", sex: "male", description: "Furet curieux", species_id: 4, association_id: 1 },
  { name: "Luna", birthdate: "2020-06-06", sex: "female", description: "Très vive", species_id: 4, association_id: 1 },
  { name: "Rocket", birthdate: "2022-04-04", sex: "male", description: "Toujours en mouvement", species_id: 4, association_id: 2 },
  { name: "Pixie", birthdate: "2021-09-09", sex: "female", description: "Très douce", species_id: 4, association_id: 2 },
  { name: "Bandit", birthdate: "2020-10-10", sex: "male", description: "Furet malin", species_id: 4, association_id: 3 },
  { name: "Nina", birthdate: "2021-11-11", sex: "female", description: "Très joueuse", species_id: 4, association_id: 3 },
  { name: "Flash", birthdate: "2019-08-08", sex: "male", description: "Rapide et curieux", species_id: 4, association_id: 4 },
  { name: "Daisy", birthdate: "2020-12-12", sex: "female", description: "Très affectueuse", species_id: 4, association_id: 4 },
  { name: "Storm", birthdate: "2021-01-01", sex: "male", description: "Furet joueur", species_id: 4, association_id: 5 },
  { name: "Lily", birthdate: "2020-05-05", sex: "female", description: "Très calme", species_id: 4, association_id: 5 },
  { name: "Neo", birthdate: "2022-02-02", sex: "male", description: "Toujours curieux", species_id: 4, association_id: 6 },
  { name: "Zara", birthdate: "2021-07-07", sex: "female", description: "Très douce", species_id: 4, association_id: 6 },
  { name: "Echo", birthdate: "2020-09-09", sex: "male", description: "Furet discret", species_id: 4, association_id: 1 },
  { name: "Nova", birthdate: "2021-12-12", sex: "female", description: "Très vive", species_id: 4, association_id: 2 },

  // 🐹 Hamsters (51–60) — ou une autre espèce si tu préfères
  { name: "Pico", birthdate: "2022-03-03", sex: "male", description: "Petit et rapide", species_id: 5, association_id: 3 },
  { name: "Luna", birthdate: "2021-06-06", sex: "female", description: "Très douce", species_id: 5, association_id: 3 },
  { name: "Taco", birthdate: "2020-11-11", sex: "male", description: "Adore grignoter", species_id: 5, association_id: 4 },
  { name: "Mimi", birthdate: "2021-08-08", sex: "female", description: "Très calme", species_id: 5, association_id: 4 },
  { name: "Bibi", birthdate: "2022-01-01", sex: "male", description: "Très curieux", species_id: 5, association_id: 5 },
  { name: "Lili", birthdate: "2020-04-04", sex: "female", description: "Adore les câlins", species_id: 5, association_id: 6 },
  { name: "Nugget", birthdate: "2022-05-05", sex: "male", description: "Petit mais costaud", species_id: 5, association_id: 1 },
  { name: "Hazel", birthdate: "2021-10-10", sex: "female", description: "Très douce et calme", species_id: 5, association_id: 2 },
  { name: "Popcorn", birthdate: "2020-12-12", sex: "male", description: "Toujours en mouvement", species_id: 5, association_id: 5 },
  { name: "Peach", birthdate: "2021-03-03", sex: "female", description: "Adore se cacher", species_id: 5, association_id: 6 }
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
  // 🐶 Chiens (pet_id: 1 à 6)
  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 1 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 1 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 1 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 2 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 2 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 2 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 3 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 3 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 3 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 4 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 4 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 4 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 5 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 5 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 5 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 6 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 6 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 6 },

  // 🐱 Chats (pet_id: 7 à 12)
  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 7 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 7 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 7 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 8 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 8 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 8 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 9 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 9 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 9 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 10 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 10 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 10 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 11 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 11 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 11 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 12 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 12 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 12 },

  // 🐰 Lapins (pet_id: 13 à 18)
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 13 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 13 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 13 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 14 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 14 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 14 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 15 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 15 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 15 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 16 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 16 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 16 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 17 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 17 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 17 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 18 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 18 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 18 },

  // 🐾 Furets (pet_id: 19 à 24)
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 19 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 19 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 19 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 20 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 20 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 20 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 21 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 21 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 21 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 22 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 22 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 22 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 23 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 23 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 23 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 24 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 24 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 24 },

  // 🐹 Hamsters (pet_id: 25 à 30)
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 25 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 25 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 25 },

  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 26 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 26 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 26 },

  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 27 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 27 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 27 },

  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 28 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 28 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 28 },

  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 29 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 29 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 29 },

  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 30 },
  { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 30 },
  { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 30 },

     // 🐶 Chiens (pet_id: 31 à 36)
  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 31 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 31 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 31 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 32 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 32 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 32 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 33 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 33 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 33 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 34 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 34 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 34 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 35 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 35 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 35 },

  { url: "https://pixabay.com/photos/animals-dog-cat-puppy-young-2198994/", pet_id: 36 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-labrador-retriever-1108099/", pet_id: 36 },
  { url: "https://pixabay.com/photos/dog-puppy-pet-cute-animal-3071334/", pet_id: 36 },

  // 🐱 Chats (pet_id: 37 à 42)
  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 37 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 37 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 37 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 38 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 38 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 38 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 39 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 39 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 39 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 40 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 40 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 40 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 41 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 41 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 41 },

  { url: "https://pixabay.com/photos/cat-animal-cat-portrait-1046544/", pet_id: 42 },
  { url: "https://www.pexels.com/photo/gray-cat-lying-on-white-textile-lying-on-bed-617278/", pet_id: 42 },
  { url: "https://pixabay.com/photos/cat-kitten-pet-animals-cute-551554/", pet_id: 42 },

  // 🐰 Lapins (pet_id: 43 à 48)
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 43 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 43 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 43 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 44 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 44 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 44 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 45 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 45 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 45 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 46 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 46 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 46 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 47 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 47 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 47 },

  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903016/", pet_id: 48 },
  { url: "https://www.pexels.com/photo/white-rabbit-on-green-grass-326012/", pet_id: 48 },
  { url: "https://pixabay.com/photos/rabbit-bunny-pet-animals-cute-1903017/", pet_id: 48 },

  // 🐾 Furets (pet_id: 49 à 54)
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 49 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 49 },
  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 49 },

  { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 50 },
  { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 50 },
    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 50 },

    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 51 },
    { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 51 },
    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 51 },

    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 52 },
    { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 52 },
    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 52 },

    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 53 },
    { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 53 },
    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 53 },

    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577329/", pet_id: 54 },
    { url: "https://www.pexels.com/photo/close-up-photo-of-ferret-325490/", pet_id: 54 },
    { url: "https://pixabay.com/photos/ferret-animal-cute-pet-domestic-577328/", pet_id: 54 },

    // 🐹 Hamsters (pet_id: 55 à 60)
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 55 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 55 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 55 },

    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 56 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 56 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 56 },

    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 57 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 57 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 57 },

    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 58 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 58 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 58 },

    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 59 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 59 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 59 },

    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552303/", pet_id: 60 },
    { url: "https://www.pexels.com/photo/hamster-on-human-hand-458799/", pet_id: 60 },
    { url: "https://pixabay.com/photos/hamster-animal-cute-pet-rodent-552304/", pet_id: 60 }
]);

console.log("Seeding des données terminé !!!");
await client.close();

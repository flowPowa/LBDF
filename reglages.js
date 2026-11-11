/*
  =====================================================================
  RÉGLAGES DE LA BOUTIQUE DE FLOW
  ---------------------------------------------------------------------
  C'est le SEUL fichier à modifier pour mettre le site à jour.
  Sur GitHub : ouvrez ce fichier, cliquez sur le crayon (Edit),
  modifiez, puis « Commit changes ».

  Règles d'écriture :
  - le texte va entre guillemets "comme ceci"
  - chaque élément d'une liste se termine par une virgule
  - ne supprimez pas les accolades { } ni les crochets [ ]
  =====================================================================
*/

const REGLAGES = {

  // ---------- Liens ----------
  instagram: "https://www.instagram.com/laboutiquedeflow/",
  etsy: "",   // laissez vide tant que la boutique Etsy n'existe pas : le bouton reste caché

  // ---------- Formulaire de contact ----------
  // Adresse fournie par Formspree après inscription, du type "https://formspree.io/f/abcdwxyz"
  formspree: "",

  // ---------- Mentions légales (À COMPLÉTER — valeurs fictives) ----------
  editeur: "[Prénom NOM]",
  siret: "[000 000 000 00000]",
  adresse: "[Ville (44)]",

  // ---------- Photos du portfolio ----------
  // Déposez les photos dans le dossier images/ puis ajoutez une ligne par photo.
  // categorie : serigraphies, stickers, magnets, matchbox, skates ou transferts
  photos: [
    // Les 3 premières photos apparaissent aussi sur l'accueil.
    { fichier: "skate-1.jpg",       categorie: "skates",       titre: "Skate sérigraphié" },
    { fichier: "serigraphie-1.jpg", categorie: "serigraphies", titre: "Sérigraphies noir et blanc" },
    { fichier: "transfert-1.jpg",   categorie: "transferts",   titre: "Transferts sur bois" },
    { fichier: "magnet-1.jpg",      categorie: "magnets",      titre: "Magnets en bois" },
    { fichier: "skate-2.jpg",       categorie: "skates",       titre: "Skate customisé" },
    { fichier: "sticker-1.jpg",     categorie: "stickers",     titre: "Stickers" },
    { fichier: "sticker-2.jpg",     categorie: "stickers",     titre: "Sticker Queen of all dogs" },
    { fichier: "sticker-3.jpg",     categorie: "stickers",     titre: "Sticker" },
    { fichier: "sticker-4.jpg",     categorie: "stickers",     titre: "Sticker chien couronné" },
  ],

  // ---------- Marchés ----------
  // Une ligne par marché. Les marchés dont la date est passée
  // passent automatiquement dans « Déjà fait ».
  // date : au format AAAA-MM-JJ (année-mois-jour)
  // lat / lng : coordonnées GPS pour la carte (facultatif).
  //   Pour les trouver : clic droit sur le lieu dans Google Maps, le premier
  //   chiffre est lat, le second lng.
  marches: [
    // {
    //   date: "2026-12-06",
    //   horaires: "10 h – 18 h",
    //   nom: "Marché de Noël des créateurs",
    //   ville: "Nantes",
    //   adresse: "Place Royale, 44000 Nantes",
    //   description: "Une trentaine de créateurs locaux.",
    //   stand: "Allée B, stand 12",
    //   lat: 47.2134, lng: -1.5592
    // },
  ]
};

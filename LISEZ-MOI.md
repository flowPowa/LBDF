# La Boutique de Flow — site web

Site statique hébergé sur GitHub Pages, à l'adresse laboutiquedeflow.com (domaine chez OVH).

## Les fichiers

| Fichier | Rôle | À modifier ? |
|---|---|---|
| `reglages.js` | Liens, photos, marchés, formulaire, mentions légales | **Oui, c'est le seul** |
| `images/` | Les photos du portfolio | Oui, pour ajouter des photos |
| `index.html` | La page du site | Non (sauf le texte « À propos ») |
| `404.html` | Page affichée si une adresse n'existe pas | Non |
| `CNAME` | Indique le domaine laboutiquedeflow.com à GitHub | Non, ne pas supprimer |
| `favicon.svg` | Petite icône de l'onglet | Non |

## Ajouter une photo

1. Dans le dépôt GitHub, ouvrez le dossier `images`, puis « Add file » → « Upload files ». Déposez la photo (format carré conseillé, moins de 300 Ko).
2. Ouvrez `reglages.js`, cliquez sur le crayon, et ajoutez une ligne dans `photos` :
   `{ fichier: "skate-1.jpg", categorie: "skates", titre: "Skate sérigraphié" },`
3. Cliquez sur « Commit changes ». Le site se met à jour en une à deux minutes.

Les catégories possibles : `serigraphies`, `stickers`, `magnets`, `matchbox`, `skates`, `transferts`.
Les trois premières photos de la liste apparaissent aussi sur l'accueil.

## Ajouter un marché

Dans `reglages.js`, copiez l'exemple de la partie `marches`, retirez les `//` en début de ligne et remplissez. Une fois la date passée, le marché passe tout seul dans « Déjà fait ».

## Lien direct vers une catégorie

Pour partager une catégorie (par exemple sur Instagram) : `laboutiquedeflow.com/#skates`, `#stickers`, `#matchbox`, etc.

## Le texte « À propos »

Dans `index.html`, cherchez « TEXTE PROVISOIRE » et remplacez les deux paragraphes « Lorem ipsum ».

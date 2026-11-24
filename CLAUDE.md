# Menus de la semaine

Page statique publiée sur GitHub Pages : https://gsonney.github.io/menus-semaine/

## Mise à jour hebdomadaire

L'opérateur envoie une photo du tableau de la semaine (colonnes 2a…6a, S, D = lundi…dimanche).

1. Modifier **uniquement `semaine.js`** : `debut` = date du lundi, 7 jours.
   - Ligne du haut du tableau → `programme` (invités, sorties, événements).
   - Ligne du bas → `soir` (ou `midi` + `soir` si deux repas sont indiqués).
   - Astuces de recette / rappels → `notes`.
   - Chaque élément en `{ fr: "…", pt: "…" }` (portugais du Portugal) ; les prénoms et mots intraduisibles en simple chaîne.
2. Signaler à l'opérateur les passages de la photo dont la lecture est incertaine.
3. Vérifier le rendu (Playwright, FR et PT, ordinateur et mobile).

## Publication

Les API GitHub qui créent des commits signés (GraphQL `createCommitOnBranch`, REST
« contents ») sont bloquées depuis les sessions cloud. Pour un commit « Verified » :
pousser une branche, ouvrir une PR, l'opérateur fusionne en « Squash and merge ».
(Choix définitif PR ou push direct sur `main` : en attente de l'opérateur.)

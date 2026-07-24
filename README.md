# FizzBuzz & Tables de multiplication

Projet Semaine 7 — Akieni Academy — Phase 2 (JavaScript fondamentaux, niveau intermédiaire)

# Démonstration en ligne

voir le site en ligne :

https://dzeko003.github.io/fizzbuzz-table-multiplication/

## À quoi sert ce projet

Une page à deux sections navigables par ancre :

- **FizzBuzz** : les nombres de 1 à 100 affichés dans une grille CSS Grid,
  avec « Fizz » pour les multiples de 3, « Buzz » pour les multiples de 5,
  « FizzBuzz » pour les deux — chaque cas ayant sa propre couleur.
- **Tables de multiplication** : les tables de 1 à 9 (chacune de 1 à 10),
  générées dynamiquement et présentées en cartes alignées avec Flexbox.

Compétences travaillées : boucles `for` et `while`, opérateur modulo (`%`),
conditions imbriquées, fonctions réutilisables, chaînes de gabarits
(template literals).

## Structure du projet

```
├── index.html    <- structure sémantique, nav interne, 2 sections
├── style.css     <- Grid (FizzBuzz), Flexbox (tables), variables CSS
├── fizzbuzz.js   <- génère la grille FizzBuzz (boucle for)
├── tables.js     <- génère les tables de multiplication (boucle while + for)
└── README.md     <- ce fichier
```

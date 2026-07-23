const grilleFizzBuzz = document.querySelector("#grille-fizzbuzz");

function afficherFizzBuzz(html) {
  grilleFizzBuzz.innerHTML += html;
}

/**
 * Détermine le texte et la classe CSS à afficher pour un nombre donné.
 * Utilise l'opérateur modulo (%) et des conditions imbriquées.
 * @param {number} nombre
 * @returns {{ texte: string, classe: string }}
 */
function evaluerFizzBuzz(nombre) {
  const estMultipleDe3 = nombre % 3 === 0;
  const estMultipleDe5 = nombre % 5 === 0;

  if (estMultipleDe3 && estMultipleDe5) {
    return { texte: "FizzBuzz", classe: "fizzbuzz" };
  } else if (estMultipleDe3) {
    return { texte: "Fizz", classe: "fizz" };
  } else if (estMultipleDe5) {
    return { texte: "Buzz", classe: "buzz" };
  } else {
    return { texte: String(nombre), classe: "" };
  }
}

/**
 * Génère la grille FizzBuzz de 1 à `limite` et l'affiche dans la page.
 * Utilise une boucle for et des gabarits littéraux pour construire
 * chaque case de la grille.
 * @param {number} limite - le dernier nombre à générer (100 par défaut)
 */
function genererFizzBuzz(limite = 100) {
  for (let nombre = 1; nombre <= limite; nombre++) {
    const { texte, classe } = evaluerFizzBuzz(nombre);

    console.log(`${nombre} -> ${texte}`);

    afficherFizzBuzz(`<div class="case ${classe}">${texte}</div>`);
  }
}

genererFizzBuzz(100);

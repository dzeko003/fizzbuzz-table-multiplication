const conteneurTables = document.querySelector("#conteneur-tables");

function afficherTable(html) {
  conteneurTables.innerHTML += html;
}

/**
 * Génère le HTML de la table de multiplication d'un nombre donné,
 * de 1 à 10
 * @param {number} nombre -  le nombre dont on veut la table (1 à 10)
 * @returns {string} le HTML de la carte contenant la table
 */
function genererTable(nombre) {
  let lignes = "";
  let multiplicateur = 1;

  while (multiplicateur <= 10) {
    const resultat = nombre * multiplicateur;
    lignes += `<li> ${nombre} x ${multiplicateur} = <strong>${resultat}</strong> </li>`;
    multiplicateur++;
  }

  return `
   <article class="carte-table">
      <h3>Table de ${nombre}</h3>
      <ul>${lignes}</ul>
    </article>
  `;
}

/**
 * Génère et affiche les tables de multiplication de 1 à 9.
 * Utilise une boucle for pour parcourir les nombres.
 */
function genererToutesLesTables() {
  for (let nombre = 1; nombre <= 9; nombre++) {
    afficherTable(genererTable(nombre));
  }
}

genererToutesLesTables();

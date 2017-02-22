// Fonction, regrouper des instructions
// qu'on pourra exécuter plus tard (1 ou plusieurs fois)

// Déclaration d'une fonction
// ici les variables nb1 et nb2 permet de recevoir
// les valeurs au moment de l'appel
// on appelle ces variables des paramètres d'entrées
// ou des arguments
function addition(nb1, nb2) {
  return nb1 + nb2;
}

// L'appel d'une fonction (son exécution)
console.log(addition(2, 3)); // 5
console.log(addition(4, 5)); // 9

function genererEntierAleatoire(min, max) {
  // var min = 20;
  // var min = 0;
  return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(genererEntierAleatoire(20, 50)); // 37 par exemple
console.log(genererEntierAleatoire(0, 100)); // 68 par exemple
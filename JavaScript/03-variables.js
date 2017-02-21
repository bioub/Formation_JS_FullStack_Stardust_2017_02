// Variable
// Permet de sauvegarder en mémoire
// une étape intermédiaire

// Déclaration (création) : Obligatoire
var prenom;

// Initialiser (donner une valeur initiale)
prenom = 'Romain';

// Les 2 en même temps
var nom = 'Bohdanowicz';

// Modifier sa valeur
nom = 'Dupont';

// Lire sa valeur (ne pas utiliser =)
console.log(nom); // Dupont

// Peut contenir n'importe quel type
var age = 31; // 31
var estPair = age % 2 === 0; // false

// Si on décompose la dernière ligne
// lit la variable age
// 31 % 2 (se lit de gauche à droite)
// 1 === 0 (se lit indifférement de gauche à droite ou l'inverse)
// estPair = false (se lit de droite à gauche)

// Attention aux priorités (on peut les changer)
console.log(3 * 2 + 2); // 8
console.log(3 * (2 + 2)); // 12

var nomComplet = prenom + ' ' + nom;

// Structure conditionnelles
// Permettent d'exécuter ou non du code
// ou d'exécuter du code plusieurs fois à la suite

if (true) {
  console.log("Cette ligne s'affiche");
}

if (false) {
  console.log("Cette ligne ne s'affiche pas");
}

// Exemple (age aléatoire entre 0 et 100)
var age = Math.floor(Math.random() * 101);
console.log("Age " + age);

if (age % 2 === 0) {
  console.log("L'age est pair");
}

// { } ici : bloc d'instructions, ensemble d'instructions

if (age % 10 === 0) {
  console.log("L'age est un multiple de 10");
  console.log('Autre instruction');
}
else {
  console.log("L'age n'est pas un multiple de 10");
}

// On peut imbriquer les if .. else
if (age % 10 === 0) {
  console.log("L'age est un multiple de 10");
}
else if (age % 10 === 3) {
  console.log("L'age est un multiple de 3");
}
else {
  console.log("L'age n'est pas un multiple de 10 ou de 3");
}

// Boucles (un bloc qu'on répète plusieurs fois de suite)
// Tant que la condition est vraie
while (age > 0) {
  age = Math.floor(age / 2);
  console.log(age);
}

// Boucle comptée (si on sait à l'avance le nombre de passage)
var i = 0;
while (i < 3) {
  console.log('Hello');
  i++; // i = i + 1;
}
// Afficher (3 fois Hello)
// Hello
// Hello
// Hello

// for simplifie les boucles comptées
for (var i = 0; i < 3; i++) {
  console.log('Bonjour');
}
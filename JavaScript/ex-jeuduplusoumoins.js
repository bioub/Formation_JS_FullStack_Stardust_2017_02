// Importe l'API readline qui permet de poser la question
var readline = require('readline');

// Configure readline pour la question s'affiche dans la console (process.stdout)
// et que la réponse soit lue sur le clavier (process.stdin)
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Génère l'entier aléatoire entre 0 et 100
var entierAlea = Math.floor(Math.random() * 101);

// Créé le tableau pour stocker les essais
var essais = [];

// La fonction jouer permet de poser la question et obtenir
// la réponse, rappeler jouer permet de rejouer.
var jouer = function() {
  // Si le tableau n'est pas vide (0 converti en booléen === false, vrai sinon)  
  // on affiche les précédents essais
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(', '));
  }

  // On pose la question et lorsqu'on appuiera sur ENTREE
  // le callback sera appelé avec la réponse en paramètre d'entrée
  rl.question('Saisir un nombre : ', function answerCallback(answer) {

    // answer est de type string, donc pour la comparer
    // à entierSaisi de type number il faut convertir
    var entierSaisi = parseInt(answer);

    // Si la conversion est impossible (saisie 'ABC')
    // on affiche une erreur et on rejoue
    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre !');
      return jouer();
    }

    // On stocke le nombre à fin du tableau essais 
    essais.push(entierSaisi);

    // On rejoue si le nombre est trop petit
    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    // On rejoue si le nombre est trop grand
    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    // On termine le programme s'il a trouvé
    console.log('Gagné');
    rl.close();
  });

};

// Il faut appeler jouer au moins une fois ici pour poser la première
// question
jouer();
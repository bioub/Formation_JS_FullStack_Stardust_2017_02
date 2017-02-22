// Privilégier en JS cette syntaxe (function expression)
var addition = function(nb1, nb2) {
  return nb1 + nb2;
};

console.log(addition(1, 2)); // 3
console.log(addition(1, '2')); // "12"
console.log(addition(1, 2, 10)); // 3
console.log(addition(1)); // NaN

// Valider les params
var addition = function(nb1, nb2) {
  if (typeof nb1 !== 'number' || typeof nb2 !== 'number') {
    // Erreur
    throw new Error('Les params doivent être de type number');
  }

  return nb1 + nb2;
};

// console.log(addition(1, '2')); // Error: Les params doivent être de type number

// Convertir
// en number avec Number() ou * 1
// en string avec String() ou + ''
// en booléen avec Boolean() ou !!
var addition = function(nb1, nb2) {
  return Number(nb1) + Number(nb2);
};

console.log(addition(1, '2')); // 3

// Récupérer les params supplémentaires
var addition = function() {
  var result = 0;

  for (var i=0; i<arguments.length; i++) {
    result = result + arguments[i];
  }

  return result;
};

console.log(addition(1, 2, 3, 4)); // 10

// Valeur par défaut
var addition = function(nb1, nb2) {
  if (nb2 === undefined) {
    nb2 = 0;
  }

  return nb1 + nb2;
};

// Ou en plus court avec un OU Logique
// Si le premier est faux (ici undefined), on affecte le 2e
var addition = function(nb1, nb2) {
  nb2 = nb2 || 0;
  return nb1 + nb2;
};

console.log(addition(1)); // 1

console.log(typeof nb1); // undefined

var outer = function() {
  var inner = function() {
    console.log(typeof inner); // function
    console.log(typeof outer); // function
    console.log(typeof addition); // function
  };
  inner();
};

outer();
console.log(typeof inner); // undefined

// Callback : En JavaScript une fonction qu'on appelle pas directement
// mais qu'on demande à appeler plus tard s'appelle un callback
var appelleMoiDans1seconde = function() {
  console.log('1 seconde écoulée');
};

setTimeout(appelleMoiDans1seconde, 1000);

// Callback avec une function expression anonyme 
setTimeout(function() {
  console.log('1 seconde écoulée');
}, 1000);

// Callback avec une function expression nommée (meilleure pratique) 
setTimeout(function rappelleMoi() {
  console.log('1 seconde écoulée');
}, 1000);

console.log(typeof rappelleMoi); // undefined
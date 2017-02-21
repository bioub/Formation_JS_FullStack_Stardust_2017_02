// Type String (chaine de caractères : texte)
console.log(typeof 'Hello'); // string
console.log(typeof "Hello"); // string

// Concaténation
console.log('Romain' + ' ' + 'Bohdanowicz');

// API String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('Romain'.toUpperCase()); // ROMAIN
console.log('Romain'.charAt(0)); // R
console.log('Romain'.charAt(5)); // n

// Type Number
console.log(typeof 10); // number
console.log(typeof -10); // number
console.log(typeof 10.10); // number
console.log(typeof 1e3); // number (1 x 10^3 === 1000)
console.log(typeof 0xff); // number (f x 16^1 + f x 16^0 === 15 x 16^1 + 15 x 16^0 === 255)

// Opérations arithmétiques (addition, soustraction...)
console.log(2 + 3); // 5
console.log(2 - 3); // -1
console.log(2 / 3); // 0.6666666666666666
console.log(2 * 3); // 6

// Modulo (reste de la division entière)
console.log(5 % 2); // 1 (5 / 2 === 2 (reste 1))

// Attention au + qui donne priorité à la concaténation
console.log(1 + 1 + '1'); // '21' (2 + '1')

// Type Booléen (résultat d'un test)
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// Opérateurs dont le résultat est booléen
console.log(0 < 1); // true
console.log(0 <= 1); // true
console.log(0 > 1); // false
console.log(0 >= 1); // false

console.log(0 == 1); // false
console.log('1' == 1); // true (après conversion)

console.log(0 === 1); // false
console.log('1' === 1); // false (pas de conversion)

console.log(0 != 1); // true
console.log(0 !== 1); // true

// Ex : Tester si un nombre est pair
console.log(5 % 2 === 0); // false

// Ex de méthode (fonction) dont le résultat est booléen
console.log('Hello'.startsWith('He')); // true

// Opérateurs logiques
// On ne peut pas écrire :
console.log(0 < 10 < 5); // true
// Parce que :
console.log(true < 5); // true en number === 1

// A la place (ET Logique)
// Les 2 tests doivent être vrai pour que l'ensemble soit vrai
console.log(0 < 10 && 10 < 5); // false

// Ou logique
// Il suffit qu'un test soit vrai pour que l'ensemble soit vrai
console.log(5 === 1 || 5 === 5 || 5 === 9); // true

// Not (inverse le résultat)
console.log(!true); // false
console.log(!'Hello'.startsWith('He')); // false


// Objet (en JS)
// Comme les tableaux, un objet est un type complexe
// qui permet de stocker plusieurs valeurs
// La différence, pour retrouver une valeur dans un tableau
// il faut connaitre la position/l'indice (number)
// Dans un objet il faut connaitre la clé (string)

// Exemple, ensemble de capitales
// qu'on retrouve à partir du nom du pays

var capitales = {
  france: 'Paris',
  espagne: 'Madrid',
  allemagne: 'Berlin'
};

// Pour accéder à une valeur on peut utiliser les []
// comme pour les tableaux
console.log(capitales['france']);

// ou en général avec le .
console.log(capitales.france);

// En JS, la plupart du temps on ne fait que manipuler
// des objets existant, exemples :
console.log(typeof console); // object
console.log(typeof Math); // object

// Parfois il faut créer un objet d'un certain type
var maintenant = new Date();
console.log(typeof maintenant); // object

// L'objet maintenant contient la méthode getHours
// (une méthode est une fonction dans un objet)
// (une propriété est quelque chose dans un objet
// qui n'est pas une fonction)
console.log(maintenant.getHours()); // 14

var str = JSON.stringify(capitales);
console.log(typeof str); // string
console.log(str); // string

// ... réseau ....

var obj = JSON.parse(str);
console.log(obj.france);

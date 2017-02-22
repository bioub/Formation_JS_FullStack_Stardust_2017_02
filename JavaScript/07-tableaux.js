// Tableau (en anglais array)
// Un type complexe qui permet de contenir plusieurs valeur

var prenoms = ['Romain', 'Brian', 'Alexis'];

console.log(prenoms[0]); // Romain
console.log(prenoms[3]); // undefined

console.log(prenoms[prenoms.length - 1]); // Alexis

prenoms.push('Khaled');
var pos = prenoms.indexOf('Brian');
console.log(pos); // 1
console.log(prenoms[pos]); // Brian

// Pour supprimer du tableau
prenoms.splice(pos, 1);

for (var i=0; i<prenoms.length; i++) {
  console.log(prenoms[i]);
}

prenoms.forEach(function appelleMoiSurChaqueElementDuTableau(prenom, i) {
  console.log(prenom);
});



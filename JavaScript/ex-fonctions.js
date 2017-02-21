// 1 - Créer la fonction hello qui affiche Hello dans la console

function hello() {
  console.log('Hello');
}

hello(); // Hello

// 2 - Créer la fonction afficher qui afficher la valeur passée en entrée 
// dans la console

function afficher(msg) {
  console.log(msg);
}

afficher('Coucou'); // Coucou
afficher('Hello'); // Hello

// 3 - Créer la fonction saluer qui recoit un prénom en entrée et qui retourne
// Hello le prénom passée en entrée

function saluer(prenom) {
  return 'Hello ' + prenom;
}

console.log(saluer('Romain')); // Hello Romain
console.log(saluer('Eric')); // Hello Eric

// 4 - Créer la fonction nomComplet qui retourne le nom complet à partir
// du prénom et du nom

function nomComplet(prenom, nom) {
  return prenom + ' ' + nom;
}

console.log(nomComplet('Jean', 'Dupont')); // Jean Dupont

// 5 - Créer la fonction estPair qui retourne true ou false

function estPair(entier) {
  if (entier % 2 === 0) {
    return true;
  }
  
  return false;
}

console.log(estPair(10)); // true
console.log(estPair(17)); // false

// facultatif : Créer la fonction repeat qui retourne n fois la chaine de
// caractères passée en entrée

function repeat(msgEntree, nb) {
  var msgRetour = '';

  for (var i=0; i<nb; i++) {
    msgRetour = msgRetour + msgEntree;
  }

  return msgRetour;
}

console.log(repeat('Hello', 3)); // HelloHelloHello
console.log('Hello'.repeat(3)); // HelloHelloHello

// facultatif : Créer la fonction padStart qui retourne la chaine de caractères
// passée en entrée sur n caractères complet par un caractère passée en entrée
function padStart(str, char, nb) {
  var msgRetour = '';

  for (var i=0; i<nb-str.length; i++) {
    msgRetour = msgRetour + char;
  }

  return msgRetour + str;
}

console.log(padStart('ab', '0', 5)); // 000ab
console.log(padStart('toto', '-', 9)); // -----toto
// console.log('toto'.padStart('-', 9)); // -----toto


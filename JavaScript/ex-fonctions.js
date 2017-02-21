// 1 - Créer la fonction hello qui affiche Hello dans la console

hello(); // Hello

// 2 - Créer la fonction afficher qui afficher la valeur passée en entrée 
// dans la console

afficher('Coucou'); // Coucou
afficher('Hello'); // Hello

// 3 - Créer la fonction saluer qui recoit un prénom en entrée et qui retourne
// Hello le prénom passée en entrée

console.log(saluer('Romain')); // Hello Romain
console.log(saluer('Eric')); // Hello Eric

// 4 - Créer la fonction nomComplet qui retourne le nom complet à partir
// du prénom et du nom

console.log(nomComplet('Jean', 'Dupont')); // Jean Dupont

// 5 - Créer la fonction estPair qui retourne true ou false

console.log(estPair(10)); // true
console.log(estPair(17)); // false

// facultatif : Créer la fonction repeat qui retourne n fois la chaine de
// caractères passée en entrée

console.log(repeat('Hello', 3)); // HelloHelloHello

// facultatif : Créer la fonction padStart qui retourne la chaine de caractères
// passée en entrée sur n caractères complet par un caractère passée en entrée

console.log(padStart('ab', '0', 5)); // 000ab

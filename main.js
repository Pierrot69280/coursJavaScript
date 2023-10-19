// Cours recap javaScript :

// Les variables :
// let & const - Conteneur qui permet de stocker des informations.

// --------------------------------------------- //

// console.log :
// nous permet d'afficher dans la console.

// --------------------------------------------- //

// Concaténation :
let prenom = "Pierre"
let nom = "Nogaro"
let mot = "Bonjour"

let phrase = mot + " " + prenom + " " + nom
console.log(phrase)

// --------------------------------------------- //

// propriété length - la longueur d'un string :
// syntax : string.length

let longueur = phrase.length
console.log(longueur)
console.log("dans ma phrase il y'à " + longueur + " mots")

// --------------------------------------------- //

// replace - remplace une valeur par une autre :
// syntax : string.replace(searchValue, newValue)
// parameter : searchValue : valeur à chercher / newValue : nouvelle valeur

let nouvellePhrase = phrase.replace("Pierre", "Jean")
console.log(nouvellePhrase)


// --------------------------------------------- //

// slice - sert à extraire une partie d'un array ou d'un string.
// syntax : string.slice(start, end)
// parameter : start :  position de départ à partir de l'index 0 / end : position finale

let maPhraseSlice = phrase.slice(0,7)
console.log(maPhraseSlice)

// --------------------------------------------- //

// les tableaux :

// --------------------------------------------- //

// split - méthode pour séparer une chaine de charactere en un tableau de sous-chaînes :
// syntax : string.split(separator, limit)

let maPhrase = "Salut, j'adore les pizzas et c'est mon plât préféré."
let mots = maPhrase.split(" ")
console.log(mots)

// --------------------------------------------- //







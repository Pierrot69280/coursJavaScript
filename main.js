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
console.log("dans ma phrase il y'à " + longueur + " mots") // 21

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

// join - élément qui s'ajoute entre chaque élément de notre tableau
// syntax : array.join(separator)

let join = ["Salut", "je", "m'appelle", "Pierre", "Nogaro"]
let text = join.join(" and ")
console.log(text)

// --------------------------------------------- //

// accéder à un élément du DOM avec document.querySelector() :

const maDivCoucou = document.querySelector(".coucou")

// --------------------------------------------- //

// Exercice :
// Trouver un moyen de vérifier si l'utilisateur n'a pas utilisé le mot quiche
// Si c'est le cas, je n'accepte pas sa phrase et je la remplace par :
// Un message d'erreur.

// Je récupère mes éléments :
const maBoiteAChoucroute = document.querySelector('.boiteChoucroute')
const monChampText = document.querySelector('.message')
const monBouton = document.querySelector('.monBouton')



monBouton.addEventListener("click", () =>{

    let laPhraseQueJAffiche = monChampText.value
    // value : obtenir ou définir la valeur d'un élément de formulaire HTML

    let lesMots = laPhraseQueJAffiche.split (" ")
    let laPhraseErreur = "désolé, la quiche est un plât interdit !"

    if (lesMots.includes("quiche")) {laPhraseQueJAffiche = laPhraseErreur}

    maBoiteAChoucroute.innerHTML += ("<p>"+laPhraseQueJAffiche+"</p>")
})



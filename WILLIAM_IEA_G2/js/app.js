console.log("Hello WOrld");

// VARIBALES

let first_name = "thélo";
console.log(first_name);
console.log(4+4);

const schoolName = "IIM";
// school_name = "toto"; erreur

let age = 21;
let hobbies = ["peche", "course à pied", "vélo"]; // tableau

let monTableau = ["string", 24, true, ["val1", "val2"], {name: "toto"}];

// CONDITIONS

let age_thelo = 25;

if(age_thelo >= 18) {
    console.log("Bienvenue dans notre casino");
} else {
    console.log("Désolé, vous êtes trop jeune. Je vous redirige ailleurs");
}

if("2" == 2) {
    console.log("Vrai pour la première condition");
}

if("2" === 2) {
    console.log("Vrai");
} else {
    console.log("les deux valeurs sont identiques mais pas les types");
}

let age_quentin = 18;

if(age_quentin != 18) {
    console.log("Quentin n'a pas 18 ans !");
}
// true
// false

let price = 33.99; // float

let temperature = 22;

if(temperature < 0) {
    console.log("Il fait froid");
} else if (temperature >= 0 && temperature <= 10) {
    console.log("IL fait un peu froid");
} else if (temperature > 10 && temperature < 20) {
    console.log("Il fait bon");
} else {
    console.log("Il fait chaud !");
}

// true && true => true
// true && false => false
// false && false => false
// false && true => false

// operateur or : ||

let nationality = "Russian";

switch (nationality) {
    case "Russian":
        console.log("Priviet !");
        break;
    case "Espagnol":
        console.log("Hola !");
        break;
    case "Morrocan":
        console.log("Salam !");
        break;
    default:
        console.log("Bonjour");
        break;
}


// exercice pratique

let number1 = 20;
let number2 = 5;

if(number2 != 0) {
    console.log(number1 / number2);
} else {
    console.log("Division impossible");
}

/// FONCTIONS

let x = 20;
let y = 30;

function squareNumber(number) {
    return number * number;
}

let res1 = squareNumber(x); // 400
let res2 = squareNumber(y); // 900

console.log(res1, res2);

let listNumbers = [10, 33, 44, 22, 27];

listNumbers.forEach(function(number) {
    console.log(squareNumber(number));
});

squareNumber(listNumbers[2]);

/// BOUCLES

// départ
// condition
// incrémentation

// for

for (let i = 0; i < 5; i++) {
    console.log("Bonjour !");
}

// while
let i = 0;
while(i < 5) {
    console.log("Aurevoir !");
    i++;
}

// Mise en pratique

let name_user = "Samih";
let money_user = 100;

let stock_product = 10;
let price_product = 12;
let name_product = "Kebab";

function acheterProduit(name, money, stock, price, name_product) {

    let quantity = 0;

    while(stock > 0 && money > price) {

        stock--;
        money -= price;
        quantity++;

    }

    console.log(name + " a acheté " + quantity + " " + name_product + ", et il lui reste " + money + "€");

}

acheterProduit(name_user, money_user, stock_product, price_product, name_product);

/// TABLEAUX

let fruits = ["banane", "kiwi", "orange"];
console.log(fruits[1]); // kiwi
console.log(fruits[2]); // orange

fruits.forEach(function(fruit) {
    console.log(fruit);
});


///// OBJET 

let thelo = {

    name : "Thelo",
    passion : "Basket",
    school : "IIM",
    age : 25,
    talent : ["trop fort", "drageur", "beau goss"],
    is_pgm : true,
    hello : function() {
        console.log("Salut !");
    }

};

console.log(thelo.name);
console.log(thelo.age);
console.log(thelo.talent);
console.log(thelo.talent[2]);
thelo.hello();


/// CLASSES

class Guerrier {

    constructor(attack, defense) {
        this.attack =  attack;
        this.defense =  defense;
    }

    getAttack() {
        console.log("J'attaque de " + this.attack + " points !");
    }


}

let guerrier = new Guerrier(10, 5); // on a créé un objet à partir de l'instance de la classe Guerrier
console.log(guerrier.attack);
console.log(guerrier.defense);
guerrier.getAttack();

let guerrier2 = new Guerrier(22, 9);
console.log(guerrier2.defense);
console.log(guerrier2.attack);
guerrier2.getAttack();

//// MANIPULATION DU DOM

// récupérer mon H1 par sond id
let h1 = document.getElementById("titre-principal");
console.log(h1);
h1.style.color = "red"; // modifier le style

// récupérer mes p par leur clase
let listP = document.getElementsByClassName("pgh");
console.log(listP);

for (let i = 0; i < listP.length; i++) {
    const element = listP[i];
    element.style.color = "green";
}

// récupérer les balises par leur type
let listDiv = document.querySelectorAll("div"); // liste de div

for (let i = 0; i < listDiv.length; i++) {
    const element = listDiv[i];
    element.style.fontSize = "40px";
}


// CAPTER LES ÉVÉNEMENTS
h1.addEventListener("click", function() {
    // alert("Vous avez cliqué !");
    this.style.fontSize =  "50px";
});

// toggle de classe red sur mon h2
document.getElementById("h2").addEventListener("click", function() {
    this.classList.toggle("red"); // toggle
    // this.classList.add("red"); // ajouter
    // this.classList.remove("red"); // supprimer
});


/// vérifier si un élément html contient une classe
let classesH2 = document.getElementById("h2").classList;

if(classesH2.contains("toto")) {
    console.log("Mon h2 à la classe toto");
}

// capter l'évenement click sur tous les li
let listLi = document.querySelectorAll("li");

listLi.forEach(function(li) {
    li.addEventListener("click", function() {
        console.log("Le texte du li :" + this.innerHTML);
    });
});


// CONTROLLER LES CHAMPS DU FORMULAIRE
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    let errorList = document.getElementById("errorList"); // je récupère la liste qui affiche les erreurs
    errorList.innerHTML = "";

    let email = document.getElementById("email");

    if(email.value == "") {
        console.log("email invalide");
        email.classList.add("error");
    } else {
        console.log("email valide");
        email.classList.remove("error");

    }

    // tester le mot de passe

    let password = document.getElementById("password");

    let check = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$");

    if(check.test(password.value) == false) {
        // console.log("Veuillez rentrer un mot de passe avec une majuscule, un chiffre un caractère spécial, entre 8 et 16 caractères");

        let liError = document.createElement("li"); // je créé mon li
        liError.innerText = "Veuillez rentrer un mot de passe avec une majuscule, un chiffre un caractère spécial, entre 8 et 16 caractères";
        errorList.appendChild(liError); // j'ajoute mon li à la liste

        password.classList.add("error");
    } else {
        password.classList.remove("error");
    }

    console.log("Formulaire soumis !");
})






///////////////// GESTION DES TABS

/// JE RÉCUPÈRE TOUS LES ÉLÉMENTS QUI ONT LA CLASSE .TAB

let listTab = document.getElementsByClassName("tab");

// je capte l'événement click sur toutes mes tabs
for (let i = 0; i < listTab.length; i++) {
    const tab = listTab[i];
    tab.addEventListener("click", function() {

        // j'enlève la classe active sur les autres menus
        for (let i = 0; i < listTab.length; i++) {
            const tab = listTab[i];
            tab.classList.remove("active");
        }

        // j'ajoute la classe active sur le menu sur lequel j'ai cliqué 
        this.classList.add("active");

        // je récupère toutes les classes du menu
        let classTab = this.classList;

        // je fais disparaitre tous mes contenus
        let listContent = document.getElementsByClassName("content");
        for (let i = 0; i < listContent.length; i++) {
            const content = listContent[i];
            content.classList.remove("visible");
        }

        // afficher le contenu du menu
        if(classTab.contains("content1")) {
            document.querySelector("#content .content1").classList.add("visible");
        } else if(classTab.contains("content2")) {
            document.querySelector("#content .content2").classList.add("visible");
        } else {
            document.querySelector("#content .content3").classList.add("visible");
        }

    });
    
}

const darkModeButton = document.getElementById("darkMode");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeButton.textContent = "MODE SOMBRE";
  } else {
    body.classList.add("dark-mode");
    darkModeButton.textContent = "MODE CLAIR";
  }
});

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let errorList = document.getElementById("errorList");
    errorList.innerHTML = "";

    let email = document.getElementById("email");

    if(email.value == "") {
        console.log("Email invalide");
        email.classList.add("error");
    } else {
        console.log("Email valide");
        email.classList.remove("error");

    }

    let password = document.getElementById("password");

    let check = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$");

    if(check.test(password.value) == false) {
       console.log("Veuillez rentrer un mot de passe avec une majuscule, un chiffre un caractère spécial, entre 8 et 16 caractères");

        let liError = document.createElement("li");
        liError.innerText = "Veuillez rentrer un mot de passe avec une majuscule, un chiffre, un caractère spécial, entre 8 et 16 caractères";
        errorList.appendChild(liError);

        password.classList.add("error");
        console.log("Mot de passe incorrect, erreur ajoutée");
    } else {
        password.classList.remove("error");
        console.log("Mot de passe correct, erreur retirée");
    }

    console.log("Formulaire envoyé !");
});
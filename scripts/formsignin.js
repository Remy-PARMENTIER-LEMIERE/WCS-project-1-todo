



const inputUsername = document.querySelector("#username");
const inputEmail = document.querySelector("#e-mail");
const inputCreatePassword = document.querySelector("#password");
const inputConfirmationPassword = document.querySelector("#confirmationPassword");
const button = document.querySelector(".connecter");

button.addEventListener("click", (e) => {
    e.preventDefault();


    inputCreatePassword.style.border = "1px solid black";
    inputConfirmationPassword.style.border = "1px solid black";
    inputEmail.style.border = "1px solid black";
    inputUsername.style.border = "1px solid black";


    // Vérification des champs vides
    if (!inputCreatePassword.value.trim() || !inputConfirmationPassword.value.trim() || !inputUsername.value.trim() || !inputEmail.value.trim()) {
        if (!inputCreatePassword.value.trim()) {
            inputCreatePassword.style.border = "2px solid red";
        }
        if (!inputConfirmationPassword.value.trim()) {
            inputConfirmationPassword.style.border = "2px solid red";
        }
        if (!inputUsername.value.trim()) {
            inputUsername.style.border = "2px solid red";
        }
        if (!inputEmail.value.trim()) {
            inputEmail.style.border = "2px solid red";
        }
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
    } else if (inputCreatePassword.value !== inputConfirmationPassword.value) {

        inputCreatePassword.style.border = "2px solid red";
        inputConfirmationPassword.style.border = "2px solid red";
        alert("Les mots de passe ne correspondent pas !");
        return;
    } else {
        // Si tout est valide
        inputCreatePassword.style.border = "2px solid green";
        inputConfirmationPassword.style.border = "2px solid green";
        inputUsername.style.border = "2px solid green";
        inputEmail.style.border = "2px solid green";
        alert("Compte créé avec succès !");
        return;
    }
});





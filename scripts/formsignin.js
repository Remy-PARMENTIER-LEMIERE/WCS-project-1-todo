// function validate() {
//     const passwordInput = document.querySelector("#password"); // Champ de confirmation du mot de passe
//     const messageDisplay = document.createElement("div"); // Élément pour afficher les messages dynamiques
//     passwordInput.parentElement.appendChild(messageDisplay); // Ajouter le message sous le champ

//     // Ajouter un écouteur d'événement sur la saisie dans le champ mot de passe
//     passwordInput.addEventListener("input", () => {
//         const passwordValue = passwordInput.value; // Récupérer la valeur du mot de passe

//         // Vérifier les critères du mot de passe
//         const hasNumber = /[0-9]/.test(passwordValue); // Au moins 1 chiffre
//         const hasUppercase = /[A-Z]/.test(passwordValue); // Au moins 1 majuscule
//         const hasLowercase = /[a-z]/.test(passwordValue); // Au moins 1 minuscule
//         const hasSpecialChar = /[^a-zA-Z\d]/.test(passwordValue); // Au moins 1 caractère spécial
//         const hasMinLength = passwordValue.length >= 10; // Longueur minimale de 10 caractères

//         // Afficher le message selon la validité du mot de passe
//         if (hasNumber && hasUppercase && hasLowercase && hasSpecialChar && hasMinLength) {
//             messageDisplay.innerHTML = "<p style='color:green'>Mot de passe fort.</p>";
//         } else {
//             messageDisplay.innerHTML = "<p style='color:red'>Mot de passe faible.</p>";
//         }
//     });
// }
const inputPassword = document.querySelector("#password");
const confirmationPassword = document.querySelector("#confirmationPassword");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (inputPassword.value === confirmationPassword.value) {
        alert("Valid Password");
    } else {
        alert("Invalid Password");
    }
})


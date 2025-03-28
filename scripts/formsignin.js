


// Sélection des champs afin de manipuler leurs propriétés générales pour intéractions avec les utilisateurs
const inputUsername = document.querySelector("#username");
const inputEmail = document.querySelector("#e-mail");
const inputCreatePassword = document.querySelector("#password");
const inputConfirmationPassword = document.querySelector("#confirmationPassword");
const button = document.querySelector(".connecter");

// création d'une fonction pour valider le protocole de l'adresse e-mail
function validateEmail(email) {
    // Expression régulière pour valider le format d'une adresse e-mail (string + @ + domaine .fr ou . gmail par exemple)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); // vérification du bon format de l'email et le return renvoie le résultat selon true ou false
}
// on appelle l'évenement au click sur le boutton "créer mon compte"
button.addEventListener("click", (e) => {
    e.preventDefault();

    // réinitialisation des bordures noires si champs ok, et permet de ne garder, si il y a, que les erreurs en bordure rouge ( condition après)
    inputCreatePassword.style.border = "1px solid black";
    inputConfirmationPassword.style.border = "1px solid black";
    inputEmail.style.border = "1px solid black";
    inputUsername.style.border = "1px solid black";
    // 1ere condition : vérification du champ email si le protocole standard est bien respecté, si ko, bordure en rouge
    if (!validateEmail(inputEmail.value.trim())) {
        inputEmail.style.border = "2px solid red";
        alert("Adresse e-mail non valide ! Veuillez entrer une adresse conforme (exemple@domaine.com).");
        return; // Stoppe l'exécution si le format n'est pas valide
    }


    // Vérification des champs vides et application d'une bordure rouge pour signaler l'erreur
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
        // J'informe l'utilisateur de son erreur et grace au return, je stoppe l'excécution si un ou plusieurs champs 
        // sont vides
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
    } // en parralèle je crée une condition afin de vérifier la corelation entre l'input création du mot de passe et 
    // confirmation du mot de passe. 
    // Si ko, bordure rouge et alerte de l'erreur auprès de l'utilisateur
    else if (inputCreatePassword.value !== inputConfirmationPassword.value) {

        inputCreatePassword.style.border = "2px solid red";
        inputConfirmationPassword.style.border = "2px solid red";
        alert("Les mots de passe ne correspondent pas !");
        return; // toujours le return pour stopper l'exécution si les mdp ne correspondent pas
    } else {
        // Si tout est valide ( email, champs remplis et mdp qui correspondent), 
        // alors j'applique une bordure verte pour signaler la réussite et en cliquant sur creer mon compte, 
        // tous les champs passent au vert, une alerte est crée indiquant : "Compte crée avec succès !"
        inputCreatePassword.style.border = "2px solid green";
        inputConfirmationPassword.style.border = "2px solid green";
        inputUsername.style.border = "2px solid green";
        inputEmail.style.border = "2px solid green";
        alert("Compte créé avec succès !");
        window.location.href = "./login.html"; // apres avoir cliqué sur le OK de l'alerte succès, l'utilisateur est alors 
        // redirigé vers la page login pour se connecter.
        return;
    }
});




// const myList = document.querySelector("#my-list");
// const newLi = document.createElement("li");


// const newInput = document.createElement("input");
// newInput.type = "text";
// newInput.placeholder = "Ajouter une tâche";

// newLi.appendChild(newInput);
// myList.appendChild(newLi);

const shareButton = document.getElementById("share-list");

shareButton.addEventListener("click", share)

function share() {
    alert("Veuillez vous connecter avant de pouvoir partager");
}



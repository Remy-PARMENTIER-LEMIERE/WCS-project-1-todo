// const myList = document.querySelector("#my-list");
// const newLi = document.createElement("li");

// const newInput = document.createElement("input");
// newInput.type = "text";
// newInput.placeholder = "Ajouter une tâche";

// newLi.appendChild(newInput);
// myList.appendChild(newLi);

const main = document.querySelector("main");

main.addEventListener("click", (event) => {
  if (event.target.className.includes("share-list")) {
    alert("Veuillez vous connecter avant de pouvoir partager");
  }
});

const originalCard = document.querySelector("#original-card");
const buttonsCreateCard = document.querySelectorAll(".create-button");
const cardsContainer = document.querySelector("main");
let numberOfCards = 0;

buttonsCreateCard.forEach((button) => {
  button.addEventListener("click", () => {
    const focusedCard = document.querySelector(".focused-card");
    const centeredButton = document.querySelector("main>button");

    centeredButton.style.display = "none";
    numberOfCards++;
    const newCard = originalCard.cloneNode(true);

    if (focusedCard !== null) {
      focusedCard.classList.toggle("focused-card");
    }

    newCard.classList.add("focused-card");
    newCard.id = `card-${numberOfCards}`;
    cardsContainer.appendChild(newCard);
    menu.classList.remove("open-menu");
  });
});

const menuCardsContainer = document.querySelector(".carroussel");

cardsContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector(".focused-card input");
  const todos = document.querySelector(".focused-card ul");

  const title = document.querySelector(".focused-card h3");
  if (title.textContent === "Titre de la ToDo") {
    title.textContent = input.value;

    const newMenuCard = document.createElement("div");
    newMenuCard.classList.add(`menu-card-${numberOfCards}`);
    newMenuCard.classList.add("todo-list");
    newMenuCard.innerHTML = `<h4>${input.value}</h4>`;
    menuCardsContainer.appendChild(newMenuCard);
    const newMenuCardTitle = document.querySelector(
      `.menu-card-${numberOfCards} h4`
    );
    newMenuCardTitle.classList.add(`menu-card-${numberOfCards}`);

    input.value = "";
    input.placeholder = "Nouvelle tâche...";
  } else {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${input.value}<span>
                            <img class="check-todo"
                                src="../assets/img/check.png"
                                alt="Valider la todo">
                            <img class="checked-todo"
                                src="../assets/img/checked.png"
                                alt="La todo est validée">
                            <img class="delete-todo"
                                src="../assets/img/white-cross.png"
                                alt="Supprimer la ToDo">
                        </span>`;
    todos.appendChild(newLi);
    input.value = "";
  }
});

cardsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("check-todo")) {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "inline-block";
  } else if (e.target.classList.contains("checked-todo")) {
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "inline-block";
  }
});

menuCardsContainer.addEventListener("click", (e) => {
  const targetClasses = e.target.classList;
  const classNameStart = "menu-card-";

  const classListContains = () => {
    for (let i = 0; i < targetClasses.length; i++) {
      if (targetClasses[i].startsWith(classNameStart)) {
        return true;
      }
    }
  };

  if (classListContains()) {
    const classArray = e.target.className.split(" ");
    const cardNumber = classArray[0].slice(10);
    const cardToPrint = "card-" + cardNumber;

    const actualFocus = document.querySelector(".focused-card");
    const focusToDo = document.getElementById(cardToPrint);

    actualFocus.classList.remove("focused-card");
    focusToDo.classList.add("focused-card");
    menu.classList.remove("open-menu");
  }
});

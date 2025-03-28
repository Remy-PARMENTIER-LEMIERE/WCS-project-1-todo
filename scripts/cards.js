//VARIABLES

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

// NEW TITLE, NEW TODOS & NEW MENU-CARD ON TITLE CREATION

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

// STYLE ADJUSTMENT ON CARROUSSEL RELATIVE TO SCREEN WIDTH

const menuCardsQuantity = Array.from(
  document.querySelector(".carroussel").children
).length;

if (window.innerWidth < 992) {
  if (menuCardsQuantity <= 2) {
    menuCardsContainer.style.justifyContent = "center";
    menuCardsContainer.style.gap = "2rem";
  }
} else {
  if (menuCardsQuantity <= 4) {
    menuCardsContainer.style.justifyContent = "center";
    menuCardsContainer.style.gap = "2rem";
  }
}

// DELETE, CHECK & UNCHECK EACH TODO
// ALSO DELETE CARD AND MENU CARD ON CARD CROSS CLICK
const centeredButton = document.querySelector("main > button");

cardsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("check-todo")) {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "inline-block";
  } else if (e.target.classList.contains("checked-todo")) {
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "inline-block";
  } else if (e.target.classList.contains("delete-full-list")) {
    const cardBellonging = e.target.parentNode;
    const linkedMenuCardClassName = ".menu-card-" + cardBellonging.id.slice(5);
    const linkedMenuCard = document.querySelector(linkedMenuCardClassName);

    cardBellonging.classList.remove("focused-card");

    if (cardBellonging.previousElementSibling.id !== "original-card") {
      cardBellonging.previousElementSibling.classList.add("focused-card");
    } else if (cardBellonging.nextElementSibling !== null) {
      cardBellonging.nextElementSibling.classList.add("focused-card");
    } else {
      centeredButton.style.display = "inline-block";
    }

    cardBellonging.remove();
    linkedMenuCard.remove();
  }
});

// CHANGE THE FOCUSED CARD AND FOCUSED MENU CARD

menuCardsContainer.addEventListener("click", (e) => {
  const targetClasses = e.target.className;
  const targetParentClasses = e.target.parentNode.className;
  const classNameStartWith = "menu-card-";
  const actualFocusedMenuCard = document.querySelector(".focused-menu-card");
  // console.log(targetClasses);

  if (
    targetClasses.includes("focused-menu-card") ||
    targetParentClasses.includes("focused-menu-card")
  ) {
    const classArray = e.target.className.split(" ");
    const cardNumber = classArray[0].slice(10);
    const idCardToPrint = "card-" + cardNumber;

    const actualFocus = document.querySelector(".focused-card");
    const focusToDo = document.getElementById(idCardToPrint);

    actualFocus.classList.remove("focused-card");
    focusToDo.classList.add("focused-card");
    menu.classList.remove("open-menu");
  } else if (
    targetClasses.startsWith(classNameStartWith) &&
    targetClasses.includes("todo-list")
  ) {
    if (actualFocusedMenuCard !== null) {
      actualFocusedMenuCard.classList.remove("focused-menu-card");
    }
    e.target.classList.add("focused-menu-card");
  } else if (targetClasses.startsWith(classNameStartWith)) {
    if (actualFocusedMenuCard !== null) {
      actualFocusedMenuCard.classList.remove("focused-menu-card");
    }
    e.target.parentNode.classList.add("focused-menu-card");
  }
});

// DELETE CARD AND MENU CARD WITH MENU BUTTON

const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", () => {
  const focusedMenuCard = document.querySelector(".focused-menu-card");
  if (focusedMenuCard !== null) {
    const classArray = focusedMenuCard.className.split(" ");
    const cardNumber = classArray[0].slice(10);
    const idCardToDelete = "card-" + cardNumber;
    const cardToDelete = document.getElementById(idCardToDelete);
    const actualFocusedCard = document.querySelector(".focused-card");

    if (actualFocusedCard === cardToDelete) {
      if (cardToDelete.previousElementSibling.id !== "original-card") {
        cardToDelete.previousElementSibling.classList.add("focused-card");
      } else if (cardToDelete.nextElementSibling !== null) {
        cardToDelete.nextElementSibling.classList.add("focused-card");
      } else {
        centeredButton.style.display = "inline-block";
      }
    }

    cardToDelete.remove();
    focusedMenuCard.remove();
  }
});

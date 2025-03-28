const burgerMenu = document.querySelector(".burger-menu");
const toDosManagement = document.querySelector("header li:last-of-type");
const menu = document.querySelector(".menu-container");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});
toDosManagement.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

const changePage = document.getElementById("create-button-not-application");

changePage.addEventListener("click", () => {
  window.location.href = "main-application.html";
});

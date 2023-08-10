"use strict";

const modal = document.getElementById("menu-modal");
const btnOpenModal = document.getElementById("mobile-nav-btn");
const btnCloseModal = document.getElementById("mobile-nav-btn-close");

console.log(btnOpenModal);

btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

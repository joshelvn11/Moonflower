"use strict";

const modal = document.getElementById("menu-modal");
const btnOpenModal = document.getElementById("mobile-nav-btn");
const btnCloseModal = document.getElementById("mobile-nav-btn-close");
const modalOverlay = document.getElementById("modal-overlay");

console.log(btnOpenModal);

btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

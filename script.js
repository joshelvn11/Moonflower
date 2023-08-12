"use strict";

/* ----- Mobile Menu Modal ---- */

const modal = document.getElementById("menu-modal");
const btnOpenModal = document.getElementById("mobile-nav-btn");
const btnCloseModal = document.getElementById("mobile-nav-btn-close");
const modalOverlay = document.getElementById("modal-overlay");

console.log(btnOpenModal);

btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

/* ----- Entry Options Modal ---- */

const body = document.getElementById("body");
const entryModal = document.getElementById("entry-modal");
const backgroundAudio = document.getElementById("background-audio");
const enableAudio = document.getElementById("enable-audio");
const enableParticles = document.getElementById("enable-particles");
const enableHightContrast = document.getElementById("enable-hight-contrast");
const enterSiteBtn = document.getElementById("enter-site-button");
const particles = document.getElementById("particles-js");

enterSiteBtn.addEventListener("click", () => {
  if (enableAudio.checked) {
    backgroundAudio.play();
  }

  if (!enableParticles.checked) {
    particles.classList.add("hidden");
  }

  document.body.classList.remove("overflow-hidden");
  entryModal.classList.add("hidden");
});

"use strict";

/* ----- Preloader ---- */
let preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hidden");
});

/* ----- Mobile Menu Modal ---- */

const modal = document.getElementById("menu-modal");
const btnOpenModal = document.getElementById("mobile-nav-btn");
const btnCloseModal = document.getElementById("mobile-nav-btn-close");
const modalOverlay = document.getElementById("modal-overlay");
const mobileNavLinks = document.getElementsByClassName("mobile-nav-link");

console.log(mobileNavLinks);

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

for (let i = 0; i < mobileNavLinks.length; i++) {
  let mobileNavLink = mobileNavLinks[i];
  console.log(mobileNavLink);
  mobileNavLink.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  });
}

/* ----- Accessibility Controls ---- */

const audioCtrlBtns = document.getElementsByClassName("audio-control");
const particleCtrlBtns = document.getElementsByClassName("particle-control");

for (let i = 0; i < audioCtrlBtns.length; i++) {
  let audioCtrlBtn = audioCtrlBtns[i];

  audioCtrlBtn.addEventListener("click", () => {
    if (!audioCtrlBtn.checked) {
      audioCtrlBtn.checked = false;
      backgroundAudio.pause();
      console.log("Pausing Audio");
    } else {
      audioCtrlBtn.checked = true;
      backgroundAudio.play();
      console.log("Playing Audio");
    }
  });
}

for (let i = 0; i < particleCtrlBtns.length; i++) {
  let particleCtrlBtn = particleCtrlBtns[i];

  particleCtrlBtn.addEventListener("click", () => {
    if (!particleCtrlBtn.checked) {
      particleCtrlBtn.checked = false;
      particles.classList.add("hidden");
    } else {
      particleCtrlBtn.checked = true;
      particles.classList.remove("hidden");
    }
  });
}

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
    for (let i = 0; i < audioCtrlBtns.length; i++) {
      let audioCtrlBtn = audioCtrlBtns[i];
      audioCtrlBtn.checked = true;
    }
  } else {
    for (let i = 0; i < audioCtrlBtns.length; i++) {
      let audioCtrlBtn = audioCtrlBtns[i];
      audioCtrlBtn.checked = false;
    }
  }

  if (!enableParticles.checked) {
    particles.classList.add("hidden");
    for (let i = 0; i < particleCtrlBtns.length; i++) {
      let particleCtrlBtn = particleCtrlBtns[i];
      particleCtrlBtn.checked = false;
    }
  } else {
    for (let i = 0; i < particleCtrlBtns.length; i++) {
      let particleCtrlBtn = particleCtrlBtns[i];
      particleCtrlBtn.checked = true;
    }
  }

  document.body.classList.remove("overflow-hidden");
  entryModal.classList.add("hidden");
});

/* ----- Accordian ---- */

let accordianBtns = document.getElementsByClassName("accordian-button");

for (let i = 0; i < accordianBtns.length; i++) {
  accordianBtns[i].addEventListener("click", () => {
    accordianBtns[i].nextElementSibling.classList.toggle("hidden");
    accordianBtns[i].firstElementChild.classList.toggle("fa-plus");
    accordianBtns[i].firstElementChild.classList.toggle("fa-minus");
  });
}

var flkty = new Flickity(".gallery", {
  // options
  cellAlign: "left",
  contain: true,
});

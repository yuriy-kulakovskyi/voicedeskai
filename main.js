const burgerBtn = document.getElementById("burgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.classList.add("nav-mobile--open");
  burgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.remove("nav-mobile--open");
  burgerBtn.setAttribute("aria-expanded", "false");
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const videoToggle = document.getElementById("videoToggle");
const video = document.getElementById("video");

videoToggle.addEventListener("click", () => {
  const isPaused = videoToggle.classList.toggle("is-paused");
  videoToggle.setAttribute("aria-pressed", String(!isPaused));
  videoToggle.setAttribute("aria-label", isPaused ? "Play video" : "Pause video");
  isPaused ? video.pause() : video.play();
});

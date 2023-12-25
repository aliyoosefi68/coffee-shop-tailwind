const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBTN = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const navCloseIcon = document.querySelector(".close-nav");
const overlay = document.querySelector(".overlay");

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

submenuOpenBTN.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu-open");
});

navOpenIcon.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  nav.classList.add("right-0");
  nav.classList.remove("-right-64");
});

navCloseIcon.addEventListener("click", () => {
  overlay.classList.add("hidden");
  nav.classList.add("-right-64");
  nav.classList.remove("right-0");
});

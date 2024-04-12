let body = document.getElementById("body");
let navs = document.getElementById("navs");
let u = document.getElementById("u");
let logo = document.getElementById("logo");

let night = document.getElementById("night");
let light = document.getElementById("light");

let mode = localStorage.getItem("mode");
if (mode) {
  body.classList.add("nightBody");
  navs.classList.add("navNight");
  night.classList.toggle("hideIcon");
  light.classList.toggle("hideIcon");
  u.classList.add("nightU");
  logo.classList.add("nightLogo");
}

function toggleFunc() {
  night.classList.toggle("hideIcon");
  light.classList.toggle("hideIcon");
  body.classList.toggle("nightBody");
  navs.classList.toggle("navNight");
  u.classList.toggle("nightU");
  logo.classList.toggle("nightLogo");
}

night.addEventListener("click", () => {
  toggleFunc();
  localStorage.setItem("mode", "nightBody");
});

light.addEventListener("click", () => {
  toggleFunc();
  localStorage.setItem("mode", "");
});

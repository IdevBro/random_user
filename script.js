let cards = document.getElementById("cards");
let reload = document.getElementById("reload");
let clear = document.getElementById("clear");
let deleteItem = document.getElementById("deleteItem");
let input = document.getElementById("input");
let form = document.getElementById("form");

// search
form["input"].addEventListener("input", () => {
  let inputValue = form["input"].value.toLowerCase();
  console.log(inputValue);

  let userName = document.querySelectorAll(".user__name");
  userName.forEach((element) => {
    if (
      element.lastElementChild.textContent.toLowerCase().includes(inputValue)
    ) {
      element.parentElement.parentElement.classList.remove("hidden");
    } else {
      element.parentElement.parentElement.classList.add("hidden");
    }
  });
});
// refresh
reload.addEventListener("click", (e) => {
  e.preventDefault();
  reLoadData();
  clear.classList.remove("hidden");
});
// clear
clear.addEventListener("click", (e) => {
  e.preventDefault();
  cards.innerHTML = "";
  clear.classList.add("hidden");
});
// add ui
const addUI = (data) => {
  cards.innerHTML = "";
  data.results.forEach((item) => {
    const { name, picture, location, dob, gender } = item;
    cards.innerHTML += `
    <div class="itemCard">
    <div class="deleteItem" id="deleteItem">
    <i class="fa-solid fa-trash"></i>
    </div>
    <div class="img">
      <img src=${picture.large} alt="avatar" />
    </div>
    <div class="data">
      <div class="user__name">
        <i class="fa-solid fa-address-card"></i>
        <span class="name">${name.title}, ${name.first}, ${name.last} </span>
      </div>
      <div>
        <i class="fa-solid fa-calendar"></i>
        <span class="age">${dob.age}</span>
      </div>
      <div>
        <i class="fa-solid fa-location-dot"></i>
        <span class="location">${location.country}</span>
      </div>
      <div>
        <i class="fa-solid fa-user"></i>
        <span class="gender">${gender}</span>
      </div>
    </div>
  </div>
    `;
  });
};

// delete itemCard
document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "fa-solid") {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
});

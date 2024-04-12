// const { error } = require("console");

let loader = document.getElementById("loader");

const API = "https://randomuser.me/api/?results=9";

const toggleLoader = (check) => {
  if (check) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

// request promise
// const getData = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState < 4) {
//         toggleLoader(true);
//       } else if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data.results);
//         toggleLoader(false);
//       } else if (request.readyState == 4) {
//         reject("Error");
//         toggleLoader(false);
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// const reLoadData = () => {
//   getData(API)
//     .then((data) => {
//       addUI(data);
//     })
//     .catch((err) => {
//       addUI(err);
//     });
// };

const reLoadData = () => {
  toggleLoader(true);
  fetch(API)
    .then((responce) => {
      if (responce.ok && responce.status == 200) {
        return responce.json();
      } else if (responce.ok) {
        console.log("Statusda xatolik");
      } else {
        console.log("Muommoyu");
      }
    })
    .then((data) => {
      addUI(data);
      toggleLoader(false);
    });
};

document.addEventListener("DOMContentLoaded", reLoadData());

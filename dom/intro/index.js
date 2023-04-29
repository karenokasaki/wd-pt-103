console.log("Estou no meu javascript");

//console.log(document);

//querySelector -> seleciona o PRIMEIRO elemento
const name = document.querySelector("#name");
//querySelectorAll -> seleciona TODOS os elementos
const parags = document.querySelectorAll(".parag");

const h1Fabi = document.querySelector(".hero h1");

const popup = document.querySelector("#popup");

//getElementById

//getElementsByClassName

//getElementsByTagName

setTimeout(() => {
  name.innerText = "CAROLINA BRAGA";
  h1Fabi.style.color = "grey";

  popup.classList.remove("hide");
}, 5000);

setTimeout(() => {
  popup.classList.add("hide");
}, 7000);

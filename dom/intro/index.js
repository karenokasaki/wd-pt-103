console.log("Estou no meu javascript");

//console.log(document);

//querySelector -> seleciona o PRIMEIRO elemento
const name = document.querySelector("#name"); // id
const h1Fabi = document.querySelector(".hero h1"); //class
const popup = document.querySelector("#popup"); //id
//querySelectorAll -> seleciona TODOS os elementos
const parags = document.querySelectorAll(".parag");

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

console.log(parags);

parags.forEach((paragrafo) => {
  paragrafo.innerText = "Iron Hack 2023";
  paragrafo.classList.add("bold");
});

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

//CAPTURAR
const listRent = document.querySelector("#list-rent");

places.forEach((place) => {
  const p = document.createElement("p"); // -> <p></p>
  p.innerText = `Lugar: ${place.title}. Preço: R$${place.price}. Tipo: ${place.type}`; // <p>"frase"</p>
  listRent.appendChild(p); //adicionar o <p></p> na div
});

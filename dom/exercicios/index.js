const students = ["giu", "gabriel", "alexandre", "carol", "fabi", "victor"];

//capturar o botão
const button = document.querySelector("#button");
const button2 = document.querySelector("#button2");
const title = document.querySelector("#title");
const list = document.querySelector("#list");
console.log(button);

//eu quero saber toda vez que alguém clicar no botão
//1º parametro: é o tipo de evento -> "click"
//2º parametro: é uma callback -> a função que vai ser executada TODA VEZ que o botão for clicado
button.addEventListener("click", () => {
  console.log("cliquei no botão");
  list.classList.add("hide");
});
button2.addEventListener("click", () => {
  console.log("cliquei no botão");
  list.classList.remove("hide");
});

/* title.addEventListener("click", () => {
  console.log("Cliquei no title");
});
 */

//CAPTURAR OS ELEMENTOS DO HTML
const counter = document.querySelector("#counter");
const buttonInc = document.querySelector("#button-inc");
const buttonDec = document.querySelector("#button-dec");

buttonInc.addEventListener("click", () => {
  //console.log("+");
  //console.log(typeof counter.innerText);

  if (Number(counter.innerText) === 5) {
    return;
  }

  counter.innerText = Number(counter.innerText) + 1;
});

buttonDec.addEventListener("click", () => {
  console.log("-");

  if (Number(counter.innerText) === 0) {
    return;
  }

  counter.innerHTML = Number(counter.innerText) - 1;
});

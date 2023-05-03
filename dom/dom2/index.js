const startBtn = document.querySelector("#startBtn");

const inputName = document.querySelector("#inputName");
const spanName = document.querySelector("#spanName");

const divHome = document.querySelector("#divHome");
const divBoard = document.querySelector("#divBoard");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const op = document.querySelector("#op");
const resultButton = document.querySelector("#resultButton");
const result = document.querySelector("#result");

//adicionar um eventListener no botão começar.
startBtn.addEventListener("click", () => {
  //quando o jogador clicar no botão começar
  // esconder a home
  divHome.classList.add("hide");

  // mostrar o board
  divBoard.classList.remove("hide");

  //capturar o nome do jogador
  spanName.innerText = inputName.value;
});

//quando o usuário clicar no RESULTBUTTON
//fazer a conta ou seja -> num1 num2 e operação matemática

resultButton.addEventListener("click", () => {
  console.log("Resultado");
  console.log(op.value);

  if (op.value === "+") {
    result.innerText = Number(num1.value) + Number(num2.value);
  }

  console.log(num1.value);
  console.log(num2.value);
});

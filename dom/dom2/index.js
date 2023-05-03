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

const divHistory = document.querySelector("#divHistory");

const clearButton = document.querySelector("#clearButton");

const dogButton = document.querySelector("#dogButton");

const totalGeral = document.querySelector("#totalGeral");

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
  //checando qual a operação matematica
  if (op.value === "+") {
    result.innerText = Number(num1.value) + Number(num2.value);
  }
  if (op.value === "-") {
    result.innerText = Number(num1.value) - Number(num2.value);
  }
  if (op.value === "/") {
    result.innerText = Number(num1.value) / Number(num2.value);
  }
  if (op.value === "*") {
    result.innerText = Number(num1.value) * Number(num2.value);
  }

  //adicionar a conta ao histórico
  const p = document.createElement("p"); //<p></p>
  p.innerHTML = `${num1.value} ${op.value} ${num2.value} = <span class="subtotal">${result.innerText}</span>`;

  //pai. appendChild -> (filho)
  divHistory.appendChild(p);

  num1.value = "";
  num2.value = "";

  setTimeout(() => {
    result.innerText = "";
  }, 2000);

  const subtotals = document.querySelectorAll(".subtotal");
  let sum = 0;
  subtotals.forEach((subtotal) => {
    sum += Number(subtotal.innerText);
  });

  totalGeral.innerText = sum;
});

clearButton.addEventListener("click", () => {
  divHistory.innerText = ""; //<div>""</div>
});

const img = document.querySelector("#img");

dogButton.addEventListener("click", () => {
  img.setAttribute("src", "./dog.jpg"); // <img src="./dog.jpg" />

  img.setAttribute("name", "cachorro");
});

const startBtn = document.querySelector("#startBtn");
const divHome = document.querySelector("#divHome");
const divBoard = document.querySelector("#divBoard");
const inputName = document.querySelector("#inputName")
// 

//adicionar um eventListener no botão começar.
startBtn.addEventListener("click", () => {
  //quando o jogador clicar no botão começar
  // esconder a home
  divHome.classList.add("hide");

  // mostrar o board
  divBoard.classList.remove("hide");
});



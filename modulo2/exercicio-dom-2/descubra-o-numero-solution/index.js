//capturando
const luckyNumber = document.querySelector("#luckyNumber");
const inputNumber = document.querySelector("#inputNumber");
const result = document.querySelector("#result");
const guessButton = document.querySelector("#guessButton");
const choiceComp = document.querySelector("#choiceComp");

guessButton.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  
  if (Number(inputNumber.value) === randomNumber) {
    result.innerText = "Você acertou!!";
  } else {
    result.innerText = `Voocê errou!`;
  }

  choiceComp.innerText = `${randomNumber}`;
});

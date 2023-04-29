// assincronas

console.log("começo do arquivo");

//setTimeOut -> determinar QUANDO o código será executado
let run = false;
// o código não vai ficar PARADO nessa linha esperando os 5 segundos
const timeOut = setTimeout(() => {
  console.log("meio do arquivo");
}, 10000);

if (run === false) {
  clearTimeout(timeOut);
}

console.log("final do arquivo");

let counter = 0;
//setIntervalo -> define o INTERVALO de tempo entre uma execução e outra
//SEMPRE precisa de uma condição de PARADA -> DENTRO DO setInterval
const timer = setInterval(() => {
  counter++;

  console.log(counter);

  if (counter === 5) {
    console.log("seu tempo está acagando");
  }

  //condição de parada
  if (counter === 10) {
    clearInterval(timer);
  }
}, 1000);

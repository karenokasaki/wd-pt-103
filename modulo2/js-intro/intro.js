// console.log()
// run-time
// comentário
let number = 10;
console.log(number);
console.log("Iron hack"); //comentário
/* 
posso fazer
um
comentário
com varias 
linhas
*/

let name = "karen";
console.log(name);

name = "Carol";
console.log(name);

/* 
declaração de variável 
let = variável pode ser modificada!! 
const = a variável não pode ser alterada 
*/

//age = 31;

/* 
tipos 
- primitivo -> string , number , boolean, null, undefined
- não-primitivo -> array, objeto, função
*/
// "" ->> string
const aluno = "Lucas"; //string
let age = 50; // number
const presente = true; // boleano
let media = null;
let year;
const month = 12;

//template strings
const frase = `Eu sou o ${aluno} e tenho ${age} anos. E estou ${presente} na aula `;
const frase2 =
  "Eu sou o " +
  aluno +
  " e tenho " +
  age +
  " anos. E estou " +
  presente +
  " na aula";
const frase3 = "odhasdoiashdhas";

console.log(frase2);

// métodos para numbers
console.log(Math.random() + 1);
console.log(Math.random() + 1);
console.log(Math.random() + 1);
console.log(Math.random() + 1);
console.log(Math.random() + 1);

// condicionais
/* 
if (condição lógica / hipótese) {

}
*/

if (true) {
  // tudo o que estiver aqui dentro vai ser executado
}

if (false) {
  //nada aqui dentor vai ser executado
}

const pessoa = {
  name: "Fabi",
  pagamentosFeitos: ["10/04"],
  pagEmDia: false,
};

if (pessoa.pagEmDia) {
  //só vai cair nesse if SE pagEmDia === true
  console.log("Ele está em dia");
} else {
  console.log("ele está atrasado");
}

if (!pessoa.pagEmDia) {
  //só vai cair nesse if SE pagEmDia === false
}

if (pessoa.pagamentosFeitos.length === 0) {
  // tudo o que estiver aqui dentro vai ser executado
  console.log("TIRA ELA DA PLATAFORMA");
}

if (pessoa.pagamentosFeitos.length > 0) {
  //nada aqui dentor vai ser executado
  console.log("DEIXA ENTRAR");
}

// funções
//sintax
// nome de função => verbo
//CRIANDO UMA FUNÇÃO => DECLARANDO
function checkIfGreaterThan100(number) {
  console.log("To dentro da função");

  if (number > 100) {
    return true;
  }

  if (number < 100) {
    return false;
  }
}

//função precisa ser INVOCADA -> ()
// passar meus argumentos -> tudo que está dentro dos ()
const resultado = checkIfGreaterThan100(200);
console.log(resultado);

console.log(checkIfGreaterThan100(200));

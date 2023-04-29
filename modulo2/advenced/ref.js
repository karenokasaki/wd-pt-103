//hoisting -> js vai pegar TODAS as suas funções e levar pro começo do seu arquivo
sayHello();
function sayHello() {
  console.log("Hello");
}

//escopo GERAL -> TODO MUNDO PODE ACESSAR ESSA VARIÁVEL -> dentro das minhas funções
const array = [];

function lengthArray() {
  // {  escopo  }
  console.log(array);

  //escopo DA FUNÇÃO
  let name = "Fabi";
}
// console.log(name) não posso acessar name pois não está dentro do meu escopo

//shadowing
let a = 1;
let b = 2;

function teste1() {
  let a = 10;
  let b = 4;
}

teste1();
console.log(a);



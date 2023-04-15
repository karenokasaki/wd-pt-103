const array = ["webdev", "ux/ui", "data", "cyber"];

//pegar a primeira letra de todos os meus elementos

let firstLetters = [];
for (let i = 0; i < array.length; i++) {
  // array[i] -> elemento
  console.log(array[i]);
  //adicionar algo dentro da array
  firstLetters.push(array[i][0]);
}

console.log(firstLetters);

const cities = ["sp", "bh", "campo grande"];
//pop() RETIRA o ULTIMO de dentro da array um elemento
//cities.pop();
//console.log(cities);

//includes() => saber se o elemento existe dentro da array
console.log(cities.includes("sp"))

//indexOf => retorna o INDEX do elemento se ele existir dentro da array
// retorna -1 quando o elemento não existe
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf("ironhack"))
// retirar um elemento que está NO MEIO da minha array =>
//1º achar o index desse elemento
//2º retirar o elemento com o splice()
let camelIndex = beasts.indexOf("camel")

//splice() altera a minha array original
//beasts.splice(camelIndex, 2)


//não alterar a array original
// spread -> [...] -> sempre tem que ser feito DENTRO DE ALGUMA COISA [...] ; {...}
const cloneBeasts = [...beasts]
cloneBeasts.splice(camelIndex, 1)
console.log(cloneBeasts)


//array = []
const names = ["karen", "fabi", "ale", "gabriel"];
const idades = [30, 31, 43, 37];

const mix = ["ribas", "ms", 2023, "pequena", 58874, true, false, ["fabi", 31]];

//index
//elementos -> tudo que existe dentro de uma array é um ELEMENTO
//como acessar algo DENTRO de uma array => array[index]
const ale = names[2];

//console.log(names[4]);
//console.log(names.length); // É O TAMANHO !== DO INDEX

//método .push() -> adiciona um item no final da array
names.push("Victor");
//console.log(names);
// [] => object      {} => object

//método .pop() -> retira o ULTIMO elemento da array
names.pop();
names.pop();

//.unshift -> adiciona no começo da array
names.unshift("Carol");
//console.log(names);

// .shift() -> retira o PRIMEIRO elemento da array
names.shift();
//console.log(names);

//splice adiciona ou retira elemestos de dentro de uma array
//1º index desejado
//2º quantos vc quer deletar
//3º elemento que você quer adicionar
names.splice(3, 0, "victor");
//console.log(names);

const nestedArray = [
  ["fabi", 31],
  ["karen", 30],
  ["ale", 43],
];

const aleAge = nestedArray[2][1];
console.log(aleAge);

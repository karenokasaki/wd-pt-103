// array -> []
//como acessar itens dentro de arrays
//arrays -> indexadas -> elas começam pelo index 0
// elementos -> tudo que está dentro de uma array é um elemento
// array[index]

//objeto => chaves {}
const professora = {
  name: "karen",
  age: 20,
  hobbies: ["gamer", "carpintaria", "programação nos sábados"],
  address: {
    street: "Avenida nelson lirio, 1765",
    city: "ribas do rio pardo",
    state: "Mato grosso do Sul",
  },
};
//dot notation -> .
//console.log(professora.address.city)

/* 
faça uma função que recebe uma array
 e devolve a mesma array só que 
 com todos os nomes em caps lock.
*/

//1º fazer a função
//2º parametrizar a minha função -> receber uma array
// existe um método chamado toUpperCase()
//nomes.toUpperCase() -> não pode ser aplicado em cima de uma array
//console.log(nomes[0].toUpperCase())
//parametro -> placeholder

//console.log(nomes[3]); // alexandre
//console.log(nomes[4]); // lucas
//console.log(nomes[5]); // victor
// i = 0 ; i = 1 ; i = 2

const nomes = [
  "gabriel",
  "giu",
  "fabi",
  "alexandre",
  "lucas",
  "victor",
  "carol",
];

const prof = ["karen", "alexandre", "nilton"];

//outra forma de se escrever uma função
const func = () => {
  //expressão
  console.log("lucas");
};
//func();

//função só vai RODAR quando ela for INVOCADA ()
function arrayToUpperCase(array) {
  //console.log(array);
  let newArray = [];
  //for para iterar por todas as strings da array
  for (let i = 0; i < array.length; i++) {
    //começo do loop
    const nameUpper = array[i].toUpperCase(); // GABRIEL
    newArray.push(nameUpper);
    //final do loop
  }
  return newArray;
}

const namesCapsLock = arrayToUpperCase(nomes);
//console.log(namesCapsLock);

const name1 = "alexadre";
const name2 = "karen";

function first(name1, name2) {
  // -1 => ref vem ANTES da minha comparação
  // 1 => ref vem DEPOOIS da minha comparação
  // 0 => as duas strings não IGUAIS
  if (name1.localeCompare(name2) > 0) {
    return `${name1} vem DEPOIS do que ${name2}`;
  }
  if (name1.localeCompare(name2) < 0) {
    return `${name1} vem ANTES do que ${name2}`;
  }

  if (name1.localeCompare(name2) === 0) {
    return `Os dois nomes são iguais`;
  }
}
//console.log(first("fabi", "fabi"));

const numbers = [12, 23, 24, 58, 74, 14, 3, 7];

function evenNumbers(array) {
  //1º percorrer todos os numeros da array
  // pra definir se ele é divisível por 2 ou não.

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    // se for divisível por 2 => numero é par
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
//console.log(evenNumbers(numbers));

const numbers2 = [10, 20, 30, 25, 23, 75, 45, 95];
//retornem -> [20, 40, 60]
// função que recebe uma array de numeros
// e retorne uma array com os numeros multiplicados por 2

function multiplyBy2(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const numberMultiply = array[i] * 2;
    newArray.push(numberMultiply);
  }

  return newArray;
}
//console.log(multiplyBy2(numbers2));

function backwards(string) {
  /*   for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  } */

  for (let i = string.length; i >= 0; i--) {
    console.log(string[i]);
  }
}
//backwards("ironhack");

let hacker1 = "karen";
//console.log(`The driver's name is ${hacker1}`);

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus maximus justo. Cras consectetur interdum risus vitae interdum. Integer vitae facilisis turpis. Sed sit amet cursus risus, ac tincidunt tellus. Nunc consequat mi nulla, et laoreet nisi mollis eu. Aenean commodo est non nunc tincidunt rutrum. Mauris dapibus a ante ac bibendum.

Curabitur faucibus, tellus vel ultrices dapibus, arcu neque tempus magna, a fermentum tellus mi sit amet felis. Quisque tincidunt nisi purus, tristique elementum ante aliquam nec. Maecenas pharetra dignissim justo, vel iaculis nibh finibus at. Donec vel eleifend nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer felis leo, interdum nec condimentum non, ultrices a turpis. Vivamus aliquet non augue id faucibus.

Etiam posuere posuere quam, viverra commodo lectus commodo quis. Integer ex ipsum, tincidunt quis lacinia non, vulputate eget neque. Aliquam sit amet convallis elit. Proin dictum nibh ac molestie sollicitudin. Suspendisse in vestibulum massa, blandit pellentesque nisi. Etiam congue tincidunt est, in sagittis libero tristique vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

//                 parametro
function countWords(text) {
  const arrayOfWords = text.split(" ");

  return arrayOfWords.length;
}

console.log(countWords(longText));

function countEt(text) {
  const arrayOfWords = text.split(" "); // ["lorem", "ipsum", "et", .....]

  let counter = 0;

  for (let i = 0; i < arrayOfWords.length; i++) {
    //SE o elemento for "et", eu quero que conte + 1 na variável counter
    if (arrayOfWords[i] === "et") {
      console.log(arrayOfWords[i]);
      counter++;
    }
  }

  return counter;
}

console.log(countEt(longText));

// racecar
// racecar

function checkPalindrome(phrase) {
  //verificar se a frase é a mesma de trás pra frente.

  //let arrayWords = phrase.split(" ") // ["race", "car"]

  let newPhrase = "";

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      continue;
    }

    newPhrase = newPhrase + phrase[i];
  }

  let backwords = "";

  for (let i = newPhrase.length - 1; i >= 0; i--) {
    backwords = backwords + newPhrase[i];
  }

  console.log(newPhrase, backwords);
  if (newPhrase === backwords) {
    console.log("Isso é um palindrome");
  } else {
    console.log("Isso não é um palindrome");
  }
}

let string = "A man, a plan, a canal, Panama!";
console.log(checkPalindrome(string));

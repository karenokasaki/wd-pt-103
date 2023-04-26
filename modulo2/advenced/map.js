//MÉTODOS AVANÇADOS DE ARRAYS

const names = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// forEach
// NÃO ALTERA A ARRAY ORIGINAL
// NÃO RETORNA NADA -> undefined
let namesWithNumbers = [];

names.forEach((name, index, arrayOriginal) => {
  namesWithNumbers.push(`${index + 1} - ${name}`);
});

console.log(namesWithNumbers);
console.log(names);

//map()
// sempre vai devolver uma array do mesmo TAMANHO
// o map RETORNA uma nova array
// não altera a array original
// o retorno do map é o que vai ENTRAR na minha nova array

const mapArray = names.map((name, index) => {
  return `${index + 1} ${name}`;
});

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//retornem uma nova array. multiplicando cada elemento por * 10
let multiple10 = [];
numeros.forEach((number) => {
  multiple10.push(number * 10);
});
console.log(multiple10);

console.log(mapArray);

const mul10 = numeros.map((number) => {
  return number * 10;
});

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];
//uma nova array só com o nome e o exame final

let studentsNameAndFinal = [];
students.forEach((student) => {
  studentsNameAndFinal.push({
    name: student.name,
    finalExam: student.finalExam,
  });
});
console.log(studentsNameAndFinal);
//LEMBREM: sempre adicionar o RETURN no map!!!
const arrayNames = students.map((student, index) => {
  return {
    name: student.name,
    finalExam: student.finalExam,
  };
});
console.log(arrayNames);

const products = [
  {
    name: "Coca-Cola",
    price: 5,
    quantity: 2,
  },
  {
    name: "Fanta",
    price: 7,
    quantity: 3,
  },
  {
    name: "Sprite",
    price: 3,
    quantity: 5,
  },
];
//retorne uma nova array com objetos -> {name: "Coca-Cola", totalPrice: 10}

const total = products.map((product) => {
  return {
    name: product.name,
    total: product.quantity * product.price,
  };
});

//FILTER
// retorna uma nova array
// espera depois do return -> CONDIÇÃO LÓGICA
// TRUE -> entra pra nova array
// FALSE -> não entra
// quando pensar em RETIRAR algo -> filter
// colocariam dentro do if

const inStock = products.filter((product) => {
  return product.quantity > 2 || product.price < 5;
});
console.log(inStock);

//nova array só com os alunos que tem notas (first, second, finalExam) maiores que 70

const studentsMore70 = students.filter((student) => {
  return (
    student.finalExam > 70 &&
    student.firstProject > 70 &&
    student.secondProject > 70
  );
});
console.log(studentsMore70);
// {name: "Tony Parker", mediaFinal: 81,6 }

//REDUCE
// for + contador embutido
// number ou string
// NÃO TE DEVOLVE UMA ARRAY -> number OU string
// NÃO altera a arrau original
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
numeros1.forEach((numero) => {
  sum += numero;
});
console.log(sum);

const totalNumbers = numeros1.reduce((acumulador, numero) => {
  console.log(`Acumulador -> ${acumulador} | numero -> ${numero}`);
  return acumulador + numero;
}, 0);

console.log(totalNumbers);

const products2 = [
  {
    name: "Coca-Cola",
    price: 5,
    quantity: 2,
  },
  {
    name: "Fanta",
    price: 7,
    quantity: 3,
  },
  {
    name: "Sprite",
    price: 3,
    quantity: 5,
  },
];

//colocar os parametros corretamente -> acumulador, elementoAtual
//adicionar o valor inicial depois do bloco de execução -> ,0

const totalInStock = products2.reduce((acumulador, product) => {
  return acumulador + product.quantity;
}, 0);
console.log(totalInStock);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

//FILTER
// FILTRAR a minha array -> retirar coisas de dentro dela levando em conta a minha condiçao lógica
//nova array com apenas as casas que tem piscina => pool === true
const withPool = places.filter((place) => {
  return place.pool === true;
});

console.log(withPool);

//MAP
//nova array com o objeto completo -> mudem o price * 2
const doublePrice = withPool.map((place) => {
  return {
    title: place.title,
    price: place.price * 2,
    type: place.type,
    pool: place.pool,
    garage: place.garage,
  };
});

console.log(doublePrice);

//REDUCE
// o total de todos os prices dos apartamentos
const totalPrices = doublePrice.reduce((acc, place) => {
  return acc + place.price;
}, 0);

console.log(totalPrices);
//média de preço
const media = totalPrices / doublePrice.length;
console.log(media);

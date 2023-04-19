

const school = {
  name: "Fake School 1",
  classRooms: [
    {
      teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
      students: [
        { firstName: "Aliyah", lastName: "Schulist", age: 18 },
        { firstName: "Cleveland", lastName: "Towne", age: 28 },
        { firstName: "Jan", lastName: "Quitzon", age: 18 },
        { firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
        { firstName: "Gerhard", lastName: "Bergstrom", age: 23 },
      ],
    },
    {
      teacher: { firstName: "Edwardo", lastName: "Schowalter", age: 28 },
      students: [
        { firstName: "Manley", lastName: "Doyle", age: 18 },
        { firstName: "Maximilian", lastName: "Gleichner", age: 19 },
        { firstName: "Sid", lastName: "Rohan", age: 30 },
        { firstName: "Catalina", lastName: "Hilpert", age: 27 },
        { firstName: "Gerald", lastName: "O'Keefe", age: 26 },
      ],
    },
  ],
};



//dentro de arrays existem ELEMENTOS
const array = ["fabi", "gabriel", "bruno"];

/* isso é uma função 
function sum() {

} 
*/

const numbers = [10, 20, 30, 40, 50];
//for na mão -> for indexado

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  sumFor += numbers[i];
}

let sum = 0;

function greaterThan(arr) {
  let newArray = [];
  arr.forEach((number) => {
    if (number >= 30) {
      newArray.push(number);
    }
  });
  //return não significa que vai aparecer no meu console
  return newArray;
}

const result = greaterThan(numbers);

console.log(result);

const nomes = [
  "fabiane cortez",
  "gabriel rabel",
  "bruno arruda",
  "lucas henrique",
  "alexandre rocha",
  "victor nathan",
  "carolina braga",
  "giullia profilo",
];

// FUNÇÃO QUE RECEBE COMO ARGUMENTO A ARRAY DE NOMES E RETORNA UMA NOVA ARRAY COM OS NOMES EM CAPSLOCK

function capsLock(array) {
  let newArray = [];

  array.forEach((nome) => {
    newArray.push(nome.toUpperCase());
  });

  return newArray;
}

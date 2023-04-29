//TIPOS PRIMITIVOS DO JS -> A COPIA É FEITO POR VALOR
// primitivos -> string, number, boolean, null, undefined
let name1 = "karen";

let name2 = name1;

console.log(name1 === name2);

console.log("name1", name1);
console.log("name2", name2);

//ARRAY - OBJETOS -> SÃO PASSADOS POR REFERENCIA
const array1 = ["carol", "victor"];
//spread -> ... -> shallow
const array2 = [...array1];

array1.push("giu");

console.log("array1", array1);
console.log("array2", array2);

const student1 = {
  name: "Ale",
  age: 25,
};

const student2 = { ...student1 };

student1.name = "Carol";

console.log(student1);
console.log(student2);

//shallow copy - copia rasa
const student3 = {
  name: "Gabriel",
  address: {
    street: "Rua das flores",
    city: "Navegantes",
  },
};

const copyGabriel = { ...student3 };

student3.address.city = "Ribas do Rio Pardo";
student3.name = "Giu";

console.log(student3);
console.log(copyGabriel);

//deep copy
const student4 = JSON.parse(JSON.stringify(student3));

student3.address.street = "AVENIDA";

console.log(student4);
console.log(student3);

//stringify -> transforma json para string
const string = JSON.stringify(student1);

//parse -> transforma string em json
const obj = JSON.parse(string);

console.log(obj.name);

//fazer deepclony com a uma função nativa do JS
const student5 = {
  name: "Gabriel",
  address: {
    street: "Rua das flores",
    city: "Navegantes",
  },
};

const student6 = structuredClone(student5);

student5.address.city = "Rio de Janeiro";
console.table(student6);

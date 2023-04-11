console.log("hello world");

//ES5
var es5 = 0;

/* 
comenetários 
multi linha
*/

//let e const
//let deixa você atualizar o valor da sua variável
//const -> CONSTANTE -> não permite alterações
let name = "Karen";
name = "Karen Okasaki";
console.log("name->", name);

//variáveis -> tipo nome = valor

const cidade = "Ribas do Rio Pardo";
// variáveis são caixinhas

let NomeDoBruno = "Bruno Arruda"

//string -> str
const strings = "uma string";

const string2 = "também é uma string";
//template strings
let idade = 30;
// const hello = "Ola, meu nome é " + name + " e eu moro na cidade " + cidade;
const hello = `Ola, meu nome é ${name}, minha idade é ${idade} e eu moro na cidade ${cidade}`;
//.length -> propriedade NÃO INVOCA () - .length()

// propriedade é ACESSADA -> .length
console.log(name.length);

//typeof -> saber o tipo da variável -> CUIDADO COM O MINUSCULO
console.log("typeof the name:", typeof name);
console.log("typeof the idade:", typeof idade);

//métodos
// invocar -> ...
// método === função === funcao()

//métodos de STRINGS
const nameUpperCase = name.toUpperCase();
console.log("nameUpperCase->", nameUpperCase);
const nameLowerCase = nameUpperCase.toLowerCase();
console.log("nameLowerCase->", nameLowerCase);
//busca dentro da string o valor passado dentro de includes
console.log(name.includes("saki"));
//retorna o index da busca feita
console.log(name.indexOf("doidosiha"));

//camelCase
let myAge = 30;
console.log(String(myAge));
let ano = 2023;

let price = 5;
console.log("price->", price);
let newPrice = price.toFixed(2); // newPrice: 5.00
console.log(Number(newPrice));
let newPriceNumber = Number.parseFloat("5.00");
console.log("newPriceNumber->", newPriceNumber);



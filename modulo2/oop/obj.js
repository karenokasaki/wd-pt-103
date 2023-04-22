const person1 = {
  nickname: "Giu",
  age: 20,
  city: "Rio de Janeiro",
  money: 10,
};

const person2 = {
  nickname: "Gabriel",
  age: 22,
  city: "São Paulo",
  money: 10,
};

//DRY -> DONT REPEAT YOURSELF
//KISS -> KEEP IT SIMPLES STUPID

//giu comprou algo que custou 5 reais
person1.money -= 5;
person2.money -= 9;

console.log(person1);
console.log(person2);

const person3 = {
  nickname: "Fabi",
  age: 24,
  city: "Ilha bela",
  money: 10,
};


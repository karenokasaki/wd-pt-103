const students = ["fabi", "gabriel", "ale", "ale", "carol", "victor", "giu"];
//iterar -> passar por todos os elementos de uma array
/* console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]); */

//condicionais

//quero contar quantos ale's tem na turma intera
/* for (let index = 0; index < students.length; index++) {
  //começo do for
  // fim do for -> retorna
} */

const phare =
  "Hi I am Ann Reardon, :) How to Cook That is my youtube channel it is  filled with crazy sweet creations made just for you. This week we taste ,:) test and discover why craft chocolate tastes so much better than mass produced :) chocolate.";

//contar quantas carinhas :) tem dentro dessa string

const arrayOfWords = phare.split(" ");
console.log("arrayOfWords->", arrayOfWords);

let counter = 0;
for (let i = 0; i < arrayOfWords.length; i++) {
  if (arrayOfWords[i].includes(":)")) {
    //SÓ QUANDO A PALAVRA FOR IGUAL A :)
    //ADICIONA UM NUMERO NO COUNTER
    counter++;
  }
}

console.log(counter);

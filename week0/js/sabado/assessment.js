let array = [
  [
    { product: "MacBook", price: 1019, category: "tech" },
    { product: "iPad", price: 520, category: "tech" },
    { product: "Cheerios", price: 5, category: "food" },
    { product: "Ruffles", price: 5, category: "food" },
  ],

  [
    { product: "Snickers", price: 1.5, category: "food" },
    { product: "Air Pods", price: 129, category: "tech" },
  ],
];
/* console.log(array[0][0].product);
console.log(array[0][1].product);
console.log(array[1][0].product);
console.log(array[1][1].product);
console.log(array[i][j].product); */

//retorne um novo objeto {tech: [], food: []}

function sortCategory(matrix) {
  let newMatrix = {
    tech: [],
    food: [],
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //console.log(`index i ${i} index j ${j} ->`, matrix[i][j]);

      if (matrix[i][j].category === "tech") {
        newMatrix.tech.push({
          product: matrix[i][j].product,
          price: matrix[i][j].price,
        });
      }

      if (matrix[i][j].category === "food") {
        newMatrix.food.push({
          product: matrix[i][j].product,
          price: matrix[i][j].price,
        });
      }
    }
  }
  return newMatrix;
}

const result = sortCategory(array);
//console.log(result);
// qnd vc ta criando a sua funnção -> parametros
function NomeDaFuncao(parametro1, parametro2) {
  if (parametro2 <= 18) {
    return "Você não pode estar aqui";
  }

  return `Meu nome é ${parametro1} e eu tenho ${parametro2} anos`;
}

let name = "karen";
let age = 20;

//invocando a sua função -> vc está passando ARGUMENTOS
const result2 = NomeDaFuncao("Carol", 30);
console.log(NomeDaFuncao("Carol", 12));

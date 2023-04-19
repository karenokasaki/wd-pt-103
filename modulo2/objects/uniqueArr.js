
const words = [
    "crab",
    "poison",
    "contagious",
    "simple",
    "bring",
    "sharp",
    "playground",
    "poison",
    "communion",
    "simple",
    "bring",
  ];
  
  //fazer uma função que vai retornar apenas palavras unicas!
  function unique(arr) {
    let newArr = ["simple"];
  
    for (let i = 0; i < arr.length; i++) {
      //se dentro da minha nova array não existir o meu elemento atual
      if (newArr.includes(arr[i]) === false) {
        newArr.push(arr[i]);
      }
    }
  
    return newArr;
  }
  console.log(unique(words));
matrix = [
  [
    { product: "MacBook", price: 1019, category: "tech" },
    { product: "Cheerios", price: 5, category: "food" },
  ],

  [
    { product: "Snickers", price: 1.5, category: "food" },
    { product: "Air Pods", price: 129, category: "tech" },
  ],
];

let newMatrix = {
  tech: [],
  food: [],
};

for (let i = 0; i < matrix.length; i++) {
  //console.log("->", matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("-->", matrix[i][j]);

    if (matrix[i][j].category === "tech") {
      newMatrix.tech.push(matrix[i][j]);
    }
    if (matrix[i][j].category === "food") {
      newMatrix.food.push(matrix[i][j]);
    }
  }
}

products = [
  [
    { product: "hoodie", price: 101, size: "M" },
    { product: "t-shirt", price: 45, size: "XL" },
  ],

  [
    { product: "jeans", price: 70, size: "S" },
    { product: "shirt", price: 49, size: "L" },
  ],
];

let newProduct = {
  sizesSM: [],
  sizesLXL: [],
};

for (let i = 0; i < products.length; i++) {
  //console.log("->", products[i]);
  for (let j = 0; j < products[i].length; j++) {
    if (products[i][j].size === "S" || products[i][j].size === "M") {
      newProduct.sizesSM.push(products[i][j]);
    }

    if (products[i][j].size === "L" || products[i][j].size === "XL") {
      newProduct.sizesLXL.push(products[i][j]);
    }
  }
}

console.log(newProduct);

const form = {
   title: "Apartamento aconchegante no centro",
   rent: "2.000,00",
   isAvalible: true,
   image: "https://loremflickr.com/320/240/apartment",
   description:
      "Apartamento completamente mobiliado, com ótima localização no centro da cidade.",
   city: "São Paulo",
   pool: true,
};

const newForm = {
   ...form,
   title: "oq a pessoa esta  digitando",
};

console.log(newForm);

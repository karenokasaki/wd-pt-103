//sintax

class Person {
  //se a informação vai vir DE FORA -> ela tem que passar pelo construtor
  //construtor de que? -> construtor de objeto
  constructor(name, age, city, money, nacionalidade, cnpj) {
    this.nickname = name;
    this.age = age;
    this.city = city;
    this.money = money;
    this.nacionalidade = nacionalidade;
    this.isAlive = true;
    this.cnpj = cnpj;
    this.address = null;
    this.bag = [];
    //se é uma informação que é PADRÃO PRA TODOS AS PESSOAS
    //colocar ela arbitrariamente
  }

  //métodos -> função
  addAddress(endereco) {
    this.address = endereco;
  }

  isDead() {
    this.isAlive = false;
  }
}
class Address {
  constructor(street, number) {
    this.street = street;
    this.number = number;
  }
}

//nova INSTANCIA DA CLASSE PERSON
const person1 = new Person("Karen", 30, "Ribas", 5, "Brasileira", true);
const person2 = new Person(
  "Victor",
  26,
  "Jacksonville",
  10,
  "Brasileiro",
  false
);

const person3 = new Person("Fabi", 20, "Ilha bela", 50, "Brasileira", false);

const address1 = new Address("Rua das flores", 1765);

person3.addAddress(address1);
console.log(person3);



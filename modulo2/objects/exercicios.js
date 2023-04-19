const filmes = [
  {
    titulo: "Matrix",
    diretor: "Lana Wachowski",
    ano: 1999,
    ratings: [4, 5, 4, 5, 3],
  },
  {
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    ano: 2014,
    ratings: [5, 5, 4, 5, 5],
  },
  {
    titulo: "A Origem",
    diretor: "Christopher Nolan",
    ano: 2010,
    ratings: [4, 4, 4, 5, 3],
  },
  {
    titulo: "Batman Begins",
    diretor: "Christopher Nolan",
    ano: 2005,
    ratings: [4, 4, 4, 4, 3],
  },
  {
    titulo: "O Cavaleiro das Trevas",
    diretor: "Christopher Nolan",
    ano: 2008,
    ratings: [5, 5, 5, 5, 5],
  },
  {
    titulo: "Clube da Luta",
    diretor: "David Fincher",
    ano: 1999,
    ratings: [5, 4, 5, 5, 3],
  },
  {
    titulo: "Seven: Os Sete Crimes Capitais",
    diretor: "David Fincher",
    ano: 1995,
    ratings: [4, 5, 4, 4, 4],
  },
  {
    titulo: "Pulp Fiction: Tempo de Violência",
    diretor: "Quentin Tarantino",
    ano: 1994,
    ratings: [5, 4, 5, 4, 5],
  },
  {
    titulo: "Bastardos Inglórios",
    diretor: "Quentin Tarantino",
    ano: 2009,
    ratings: [4, 5, 4, 5, 4],
  },
  {
    titulo: "Kill Bill: Volume 1",
    diretor: "Quentin Tarantino",
    ano: 2003,
    ratings: [4, 4, 4, 5, 3],
  },
  {
    titulo: "Kill Bill: Volume 2",
    diretor: "Quentin Tarantino",
    ano: 2004,
    ratings: [4, 4, 4, 5, 3],
  },
];
/* easy mode
Com base na array de objetos "filmes", faça uma função que receberá essa array como argumento
e retorne uma nova array com os nomes dos filmes que foram lançados no ano de 2010 até o ano 2020
exemplo: [ "Interestelar", "A Origem", "Batman Begins", "O Cavaleiro das Trevas" ]
*/
function filmesDepoisDe2020(array) {
  //escreva o código aqui
}

/* hard mode
com base na mesma array de objetos filmes, faça uma função que receberá essa array como argumento
e retorne uma nova array com a média de ratings de cada filme + seu nome
exemplo: [ {titulo: "Matrix", media: 4.2}, {titulo: "Interestelar", media: 4.8} ] 
*/
function mediaRatings(array) {
  //escreva o código aqui
}

////////////////////////////////////////////////////////////////

const usuarios = [
  {
    nome: "João",
    email: "joao@example.com",
    interesses: ["esportes", "tecnologia"],
    endereco: { rua: "Rua A", numero: 123, cidade: "São Paulo" },
  },
  {
    nome: "Maria",
    email: "maria@example.com",
    interesses: ["moda", "cinema"],
    endereco: { rua: "Rua B", numero: 456, cidade: "Rio de Janeiro" },
  },
  {
    nome: "Pedro",
    email: "pedro@example.com",
    interesses: ["música", "tecnologia"],
    endereco: { rua: "Rua C", numero: 789, cidade: "Belo Horizonte" },
  },
  {
    nome: "Lucas",
    email: "lucas@example.com",
    interesses: ["esportes", "cinema"],
    endereco: { rua: "Rua D", numero: 1011, cidade: "Porto Alegre" },
  },
  {
    nome: "Fernanda",
    email: "fernanda@example.com",
    interesses: ["moda", "cinema"],
    endereco: { rua: "Rua E", numero: 1213, cidade: "São Paulo" },
  },
  {
    nome: "Gabriel",
    email: "gabriel@example.com",
    interesses: ["música", "tecnologia"],
    endereco: { rua: "Rua F", numero: 1415, cidade: "Rio de Janeiro" },
  },
  {
    nome: "Mariana",
    email: "mariana@example.com",
    interesses: ["esportes", "cinema"],
    endereco: { rua: "Rua G", numero: 1617, cidade: "Belo Horizonte" },
  },
  {
    nome: "Felipe",
    email: "felipe@example.com",
    interesses: ["esportes", "tecnologia"],
    endereco: { rua: "Rua H", numero: 1819, cidade: "Porto Alegre" },
  },
  {
    nome: "Beatriz",
    email: "beatriz@example.com",
    interesses: ["moda", "cinema"],
    endereco: { rua: "Rua I", numero: 2021, cidade: "São Paulo" },
  },
  {
    nome: "Rafael",
    email: "rafael@example.com",
    interesses: ["música", "tecnologia"],
    endereco: { rua: "Rua J", numero: 2223, cidade: "Rio de Janeiro" },
  },
];

/* easy mode
com base na array de objetos "usuarios", faça uma função que receberá essa array como argumento
e retorne uma nova array com os nomes dos usuários que moram em São Paulo
exemplo: ["João", "Fernanda", "Beatriz"]
*/
function usuariosDeSaoPaulo(array) {
  //escreva o código aqui
}

/* hard mode
com base na mesma array de objetos usuarios, faça uma função que receberá essa array como argumento
e retorne uma nova array com os nomes dos usuários que possuem interesse em moda
exemplo: ["Maria", "Fernanda", "Beatriz"]
*/
function usuariosDeModa(array) {
  //escreva o código aqui
}

/* hard mode
com base na mesma array de objetos usuarios, faça uma função que receberá essa array como argumento
e retorne uma nova array com os nomes dos usuários que possuem interesse em cinema e moram em Belo Horizonte
exemplo: ["Pedro", "Mariana"]
*/
function usuariosDeCinemaEdeBeloHorizonte(array) {
  //escreva o código aqui
}

////////////////////////////////////////////////////////////////
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

/* easy mode
com base na constante school, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes dos professores
exemplo: ["Marcelino Padberg", "Edwardo Schowalter"]
*/
function nomesDosProfessores(obj) {
  //escreva o código aqui
}

/* hard mode
com base na mesma constante school, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes dos alunos
exemplo: ["Aliyah Schulist", "Cleveland Towne", "Jan Quitzon", "Alaina Runolfsdottir", "Gerhard Bergstrom", "Manley Doyle", "Maximilian Gleichner", "Sid Rohan", "Catalina Hilpert", "Gerald O'Keefe"]
*/
function nomesDosAlunos(obj) {
  //escreva o código aqui
}

/* hard mode
com base na mesma constante school, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes dos alunos maiores de idade (18 anos)
exemplo: ["Cleveland Towne", "Gerhard Bergstrom", "Sid Rohan", "Catalina Hilpert", "Gerald O'Keefe"]
*/

function nomesDosAlunosMaioresDeIdade(obj) {
  //escreva o código aqui
}

////////////////////////////////////////////////////////////////
const schoolSystem = {
  schools: [
    {
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
    },
    {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: "Lucas", lastName: "Schroeder", age: 29 },
          students: [
            { firstName: "Giuseppe", lastName: "Hegmann", age: 24 },
            { firstName: "Jennyfer", lastName: "Hane", age: 19 },
            { firstName: "Mikayla", lastName: "Braun", age: 23 },
            { firstName: "Rickie", lastName: "White", age: 22 },
            { firstName: "Rose", lastName: "Collins", age: 30 },
          ],
        },
        {
          teacher: { firstName: "Green", lastName: "Sauer", age: 25 },
          students: [
            { firstName: "Melany", lastName: "Welch", age: 25 },
            { firstName: "Paxton", lastName: "Corkery", age: 22 },
            { firstName: "Nellie", lastName: "Hauck", age: 26 },
            { firstName: "Eunice", lastName: "Hirthe", age: 26 },
            { firstName: "Aylin", lastName: "Barrows", age: 26 },
          ],
        },
      ],
    },
    {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: "Nikko", lastName: "Crist", age: 42 },
          students: [
            { firstName: "Christop", lastName: "Hahn", age: 26 },
            { firstName: "Newell", lastName: "Kemmer", age: 27 },
            { firstName: "Katheryn", lastName: "Heller", age: 26 },
            { firstName: "Saul", lastName: "Heathcote", age: 20 },
            { firstName: "Maudie", lastName: "Haley", age: 30 },
          ],
        },
        {
          teacher: { firstName: "Nathanael", lastName: "Hansson", age: 50 },
          students: [
            { firstName: "Jensen", lastName: "Reichel", age: 21 },
            { firstName: "Lois", lastName: "Kulas", age: 28 },
            { firstName: "Caterina", lastName: "Wolff", age: 28 },
            { firstName: "Dahlia", lastName: "Collier", age: 24 },
            { firstName: "Linwood", lastName: "Langosh", age: 26 },
          ],
        },
      ],
    },
  ],
};

/* easy mode
com base na constante schoolSystem, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes das escolas
exemplo: ["Fake School 1", "Fake School 2", "Fake School 3"]
*/
function nomesDasEscolas(obj) {
  //escreva o código aqui
}

/* hard mode
com base na mesma constante schoolSystem, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes dos professores
exemplo: ["Marcelino Padberg", "Edwardo Schowalter", "Lucas Schroeder", "Green Sauer", "Nikko Crist", "Nathanael Hansson"]
*/

function nomesDosProfessores(obj) {
  //escreva o código aqui
}

/* hard mode
com base na mesma constante schoolSystem, faça uma função que receberá essa constante como argumento
e retorne uma nova array com as informações dos alunos
exemplo: [
    { firstName: "Aliyah", lastName: "Schulist", age: 18 },
    { firstName: "Cleveland", lastName: "Towne", age: 28 },
    { firstName: "Jan", lastName: "Quitzon", age: 18 },
    ....
    ]
*/
function nomesDosAlunos(obj) {
  //escreva o código aqui
}

/* hard mode
com base na mesma constante schoolSystem, faça uma função que receberá essa constante como argumento
e retorne uma nova array com os nomes dos alunos maiores de idade (18 anos)
exemplo: ["Cleveland Towne", "Gerhard Bergstrom", "Sid Rohan", "Catalina Hilpert", "Gerald O'Keefe"]
*/

function nomesDosAlunosMaioresDeIdade(obj) {
  //escreva o código aqui
}

////////////////////////////////////////////////////////////////
const hospitalSystem = {
  hospitals: [
    {
      name: "St. Mary's Hospital",
      departments: [
        {
          name: "Emergency Room",
          doctors: [
            { name: "Dr. Smith", specialty: "Emergency Medicine" },
            { name: "Dr. Johnson", specialty: "Emergency Medicine" },
          ],
          nurses: [
            { name: "Nurse Brown", shift: "Day" },
            { name: "Nurse Davis", shift: "Night" },
          ],
        },
        {
          name: "Cardiology",
          doctors: [
            { name: "Dr. Lee", specialty: "Cardiology" },
            { name: "Dr. Patel", specialty: "Cardiology" },
          ],
          nurses: [
            { name: "Nurse Kim", shift: "Day" },
            { name: "Nurse Gonzalez", shift: "Night" },
          ],
        },
      ],
    },
    {
      name: "General Hospital",
      departments: [
        {
          name: "Pediatrics",
          doctors: [
            { name: "Dr. Johnson", specialty: "Pediatrics" },
            { name: "Dr. Kim", specialty: "Pediatrics" },
          ],
          nurses: [
            { name: "Nurse Davis", shift: "Day" },
            { name: "Nurse Brown", shift: "Night" },
          ],
        },
        {
          name: "Surgery",
          doctors: [
            { name: "Dr. Patel", specialty: "Surgery" },
            { name: "Dr. Lee", specialty: "Surgery" },
          ],
          nurses: [
            { name: "Nurse Gonzalez", shift: "Day" },
            { name: "Nurse Kim", shift: "Night" },
          ],
        },
      ],
    },
  ],
};

/* easy mode
    com base na constante hospitalSystem, faça uma função que receberá essa constante como argumento
    e retorne uma nova array com as informações das enfermeiras que trabalham no turno da noite
    exemplo: [
        { name: "Nurse Davis", shift: "Night" },
        { name: "Nurse Brown", shift: "Night" },
        ....    
    ]
    */
function enfermeirasQueTrabalhamNoTurnoDaNoite(obj) {
  //escreva o código aqui
}

/* hard mode
    com base na mesma constante hospitalSystem, faça uma função que receberá essa constante como argumento
    e retorne uma nova array com as informações das enfermeiras que trabalham na sala de emergência
    exemplo: [
        { name: "Nurse Brown", shift: "Day" },
        { name: "Nurse Davis", shift: "Night" },
        ....
    ]
    */
function enfermeirasQueTrabalhamNaSalaDeEmergencia(obj) {
  //escreva o código aqui
}

const musicLibrary = {
  albums: [
    {
      title: "Thriller",
      artist: "Michael Jackson",
      tracks: [
        {
          title: "Wanna Be Startin' Somethin'",
          length: "6:03",
        },
        {
          title: "Beat It",
          length: "4:18",
        },
        {
          title: "Billie Jean",
          length: "4:54",
        },
      ],
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      tracks: [
        {
          title: "Smells Like Teen Spirit",
          length: "5:01",
        },
        {
          title: "Come As You Are",
          length: "3:39",
        },
        {
          title: "Lithium",
          length: "4:16",
        },
      ],
    },
  ],
};

/* easy mode
    com base na constante musicLibrary, faça uma função que receberá essa constante como argumento
    e retorne uma nova array com os nomes dos artistas
    exemplo: ["Michael Jackson", "Nirvana"]
    */

function nomesDosArtistas(obj) {
  //escreva o código aqui
}

/* hard mode
    com base na mesma constante musicLibrary, faça uma função que receberá essa constante como argumento
    e retorne uma nova array com os nomes das músicas
    exemplo: ["Wanna Be Startin' Somethin'", "Beat It", "Billie Jean", "Smells Like Teen Spirit", "Come As You Are", "Lithium"]
    */
function nomesDasMusicas(obj) {
  //escreva o código aqui
}

/* hard mode

    com base na mesma constante musicLibrary, faça uma função que receberá essa constante como argumento
    e retorne uma nova array com os nomes das músicas e o nome do artista
    exemplo: ["Wanna Be Startin' Somethin' - Michael Jackson", "Beat It - Michael Jackson", "Billie Jean - Michael Jackson", "Smells Like Teen Spirit - Nirvana", "Come As You Are - Nirvana", "Lithium - Nirvana"]
    */
function nomesDasMusicasEArtistas(obj) {
  //escreva o código aqui
}

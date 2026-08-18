let nome1 = "Ana";
let nome2 = "Beatriz";
let nomeCompleto = nome1 + " " + nome2;
console.log(nomeCompleto); // Concatenação de strings

let oi = "Olá, ";
oi += "Thiago!";
console.log(oi); // Concatenação usando o operador +=

let str1 = "Hello";
let str2 = "World!";
let resultado = str1.concat(" ", str2);
console.log(resultado); // Concatenação usando o método concat()

// Código do bot de saudação do FreeCodeCamp
console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!")
//Fim do código do FreeCodeCamp

console.log(typeof bot); // Verifica o tipo da variável bot

let exemplo = null;
console.log(typeof exemplo); // Verifica o tipo da variável exemplo: object (null é considerado um objeto em JavaScript, por causa de um bug)

let age = 25;
console.log(typeof age)

let cachorro = {
    nome: "Belinha",
    idade: 6,
    raca: "vira-lata"
}

console.log(typeof cachorro); // Objeto
console.log(cachorro.nome); // Acessando a propriedade nome do objeto cachorro
console.log(cachorro.idade); // Acessando a propriedade idade do objeto cachorro
console.log(cachorro.raca); // Acessando a propriedade raca do objeto cachorro

const vari1 = Symbol("variavel");
const vari2 = Symbol("variavel");
console.log(vari1 === vari2); // false, pois cada Symbol é único como um id, mesmo que tenham a mesma descrição.

const bemGrande = 983293829382983293892839283923829382938n; // BigInt, quando um número é muito grande para ser representado como um Number
console.log(typeof bemGrande); // BigInt


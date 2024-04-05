// const comida = "Pizza";
// const agua = new String("Agua ");

// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));

const frase = "A melhor linguagem é ";
const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, " !!")

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.endsWith('nas'));
console.log(fruta)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3))

console.log(fruta.indexOf('a'))
console.log(fruta.lastIndexOf('a'))

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '-'));
})
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

const frase2 = "Ta";

frase2.repeat(5); // TaTaTaTaTa

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ', '); // add virgula entre palavras
listaItens = listaItens.replace("Camisas","Shirts")

const arrayLista = listaItens.split("s, ")
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml)
const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toUpperCase() === "FEMININO");
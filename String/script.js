// // const comida = "Pizza";
// // const agua = new String("Agua ");

// // console.log(agua.length);

// // const frase = 'A melhor comida';

// // console.log(frase[frase.length - 1]);
// // console.log(frase.charAt(frase.length - 1));

// const frase = "A melhor linguagem é ";
// const linguagem = "Javascript";

// const fraseFinal = frase.concat(linguagem, " !!")

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta, 14));

// console.log(fruta.endsWith('nas'));
// console.log(fruta)

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0,3))

// console.log(fruta.indexOf('a'))
// console.log(fruta.lastIndexOf('a'))

// const preco = 'R$ 99,00';

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((item) => {
//     console.log(item.padStart(10, '-'));
// })

// const frase2 = "Ta";

// frase2.repeat(5); // TaTaTaTaTa

// let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// listaItens = listaItens.replace(/[ ]+/g, ', '); // add virgula entre palavras
// listaItens = listaItens.replace("Camisas","Shirts")

// const arrayLista = listaItens.split("s, ")
// console.log(arrayLista)

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const novoHtml = htmlArray.join('section');

// console.log(htmlText);
// console.log(htmlArray);
// console.log(novoHtml)
// const frutasArray = ['Banana', 'Melancia', 'Laranja'];

// const sexo1 = "Feminino";
// const sexo2 = "feminino";
// const sexo3 = "FEMININO";

// console.log(sexo1.toUpperCase() === "FEMININO");


// ========== EXERCICIOS ==========

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.slice(0,4) === 'Rece') {
    recebimentoTotal += numeroLimpo;
  }
})

console.log(taxaTotal)
console.log(recebimentoTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Onibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes)

// Substituia todos os span's por a's
let html = `  <ul>
                    <li><span>Sobre</span></li>
                    <li><span>Produtos</span></li>
                    <li><span>Contatos</span></li>
                </ul>`;
html = html.split('span').join('a')
console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhorr do ano!';
console.log(frase[frase.length -1])
// podemos usar o slice() tbm

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', 'TAXA DO PÃO', 'taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0,4);

    if (item === 'taxa') 
        taxasTotal++
    

})
console.log(taxaTotal);

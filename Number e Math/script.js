// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN('hard'));
// console.log(Number.isNaN(5));

// console.log(Number.isInteger(1));
// console.log(Number.isInteger("Hard"));
// console.log(Number.isInteger(NaN));

// console.log(parseFloat('32434.343'));
// console.log(parseFloat("100.27 reais"));
// console.log(parseInt("100.27 reais"));
// console.log(parseInt(500.27, 10));

// const preco = 10.43434;
// console.log(+preco.toFixed() );

// let valor = 48.49;
// valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
// console.log(valor)

// console.log(Math.PI)

// console.log(Math.abs(-5.5)); // retorna o valor absoluto, ou seja transforma negativo em positivo
// console.log(Math.ceil(4.555)); // arredonda para cima, retornando sempre uma integral
// console.log(Math.floor(4.555)); // arredonda para baixo, 
// console.log(Math.round(4.555)) // arredonda para o número integral mais próximo.

// console.log(Math.max(2,4,50)) // retorna sempre o numero maximo. maior
// console.log(Math.min(2,4,50)) // retorna sempre o numero minimo. menor

// const aleatorio = Math.floor(Math.random() * 11);
// console.log(aleatorio);

// const numAleatorio = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
// console.log(numAleatorio)


// ========== EXERCICIOS ==========

// Retorne um número aleatório
// entre 1050 e 2000
const random = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(random)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const array = numeros.split(', ')
const numMin = Math.min(...array)
console.log(numMin)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = [
                        'R$ 59,99', 'R$ 100,222',
                        'R$ 230',   'R$ 200'
                    ];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[1]);


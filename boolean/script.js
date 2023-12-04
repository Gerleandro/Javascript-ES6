// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'é maior', 'é igual' ou 'é menor'\
var minhaIdade = 23;
var IdadePrimo = 25;

if(minhaIdade > IdadePrimo){
    console.log('É Maior');
} else if(minhaIdade === IdadePrimo){
    console.log('É Igual');
} else {
    console.log('É Menor')
}


// Qual valor é retornado na segunte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao)

// verifique se as seguintes variaveis sao Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
    !!nome, 
    !!idade, 
    !!possuiDoutorado, 
    !!empregoFuturo, 
    !!dinheiroNaConta
    );

// compare o total de habitantes do Brasil com Chino (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Cão' && 'Gato');
} else {
    console.log('Falso');
}
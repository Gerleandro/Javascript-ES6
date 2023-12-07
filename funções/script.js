function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

let total =  5 * pi(); // 15.7

console.log(pi());


function imc(peso, altura) {
    let imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(80, 1.8))


function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if(cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu nao gosto de cores';
    }
}


function mostraConsole() {
    console.log("Oi")
}
addEventListener('click', mostraConsole);



addEventListener('click', function(){
    console.log('Oi')
})

// =============   FUNÇOES 2    =============

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
    return `
    seu peso: ${peso}kg 
    sua altura: ${altura}cm
    `;
}

imc2(20, 1.8);  // undefined

console.log(imc2(80, 1.80)); // retorna o imc e undefined


function terceiraIdade(idade) {
    if (idade >= 60) {
        console.log('É idoso');
    }
    console.log(idade)
}
terceiraIdade(60)

function terceiraIdade(idade) {
    if (typeof idade !== 'number' ) {
        return 'Porfavor preencha um número!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(60))



var totalPaises = 193;

function faltaVisitar(piasesVisitados) {
    return `faltam visita ${totalPaises - piasesVisitados} paises`;
}

console.log(totalPaises);


var profissao = "Developer"

function dados() {
    var nome = "Hard";
    var idade = 25;
    function outrosDados() {
        var endereco = 'Aquiraz-CE';
        var idade = 23;
        return  `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}
console.log(dados()); // Retorna 'Hard, 23, Aquiraz-CE, Developer'
// outrosDados(); // retorna um erro


// EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
    return !!dado;
}
console.log(isTruthy('23'))

// function bool(dado) {
//     if (dado !== true) {
//         return `Type False`;
//     } else {
//         return `Type True`;
//     }
// }
// console.log(bool(true))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Hard','GS'))

// Crie uma função que verifica se um número é par

function isEven(num) {
    var modul = num % 2;
    if (modul === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(20))

// Crie uma função que retorne o tipo de dado
// do argumento passado nea (typeof)

function tipoDeDado(dado) {
    return typeof dado;
}

console.log(tipoDeDado(3))


// addEventListener é uma função nativa d Javascript
// o primeiro parâmetro é o evento que ocorre e o segundo Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
    console.log('Hard')
})

// Corrija o erro abaixo
// function precisoVisitar(piasesVisitados) {
//     var totalPaises = 193;
//     return `Ainda faltam ${totalPaises - piasesVisitados} paise para visitar`;
// }
// function jaVisitei(piasesVisitados) {
//     return `Já visitei ${piasesVisitados} do total de ${totalPaises} paises`;
// }
// precisoVisitar(29);
// jaVisitei(20);

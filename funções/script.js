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




function faltaVisitar(piasesVisitados) {
    var totalPaises = 193;
    return `faltam visita ${totalPaises - piasesVisitados} paises`;
}


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
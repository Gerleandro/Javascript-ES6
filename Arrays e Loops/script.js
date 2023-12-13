
// // var ultimoItem = videoGames.pop();

// for (var numero = 0; numero <= 10; numero++) {
//     console.log(numero);
// }

// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// for(var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     if (videoGames[item] === 'PS4') {
//         break;
//     }
// }

// var frutas = ['Banana','Pera','Maçã','Abacaxi','Uva'];

// frutas.forEach(function(fruta, index) {
//     frutas.pop();
//     console.log(fruta, index, frutas);
// })

// var numero = 0;
// var maximo = 50;
// for(;numero < maximo;){
//     console.log(numero);
//     numero++;
// }

// ============ EXERCICIO =============

// Crie um array com os anos que o Brasil ganhou a copa 
// "1959", "1962", "1970", "1994", "2002"
var brasilCamp = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop,  para mostrar no console
// a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'
for (let i = 0; i < brasilCamp.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCamp[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]); 
    if (frutas[fruta] === 'Pera') {
        break;
    }
}


// Coloque a última fruta do array acima em uma variável, 
// sem remover a mesma do array.

// var ultimaFruta = frutas.pop(); // removendo ultima fruta do array
var penultimaFruta = frutas[frutas.length -2]; // sem remover fruta do array
var ultimaFruta = frutas[frutas.length -1];

console.log(`${penultimaFruta} \n ${ultimaFruta}`);

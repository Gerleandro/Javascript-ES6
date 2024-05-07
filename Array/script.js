// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos  = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) {console.log(nome);}];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'kia';
// carros[20] = 'Tesla'

// console.log(carros);


// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li);

// const obj = {
//     0:'Andre',
//     1:'Rafael',
//     2:'Teste',
//     length: 3,
// }

// const objArray = Array.from(obj);

// console.log(li)
// console.log(arrayLi)
// console.log(objArray)

// const frutas = ['Banana','Pera',['uva Roxa','Uva Verde']];
// console.log(frutas[2].length)

// const instrumentos = ['Guitarra','Baixo','Violão'];
// instrumentos.sort()

// console.log(instrumentos)


// const idades = [31,21,33,43,1,12,8];
// console.log(idades)
// console.log(idades.sort())


const carros = ['Ford', 'Fiat', 'VMW'];
carros.unshift('kia', 'Fearrari')

const novaArray = carros.push('Parati', 'Gol');

// console.log(carros)
// console.log(novaArray)
// console.log(carros.pop())
// console.log(carros.shift())
// console.log(carros)
// console.log(carros.reverse())

console.log(carros)
console.log(carros.splice(2,0, 'Fusca'))
console.log(carros)
console.log(carros.copyWithin(3,2))





// ============ ANOTAÇÕES =============

// [].unshift() adiciona elementos ao inicio da array e retorna o length da mesma.
// [].push() adiciona elementos ao final da array e retorna o length da mesma.
// [].shift() remove o primeiro elemento da array e retorna o mesmo.
// [].pop() remove o último elemento da array e retorna o mesmo.
// [].reverse() inverte os itens da array e retorna a nova array.

// [].splice(index, remover, iteml, item2, ...) adiciona valores na array a partir do index.
// Remover a quantidade de itens que for passada no segund parâmetro (retorna esses itens).

// [].copyWithin(alvo, inicio, final) a partir do algo, ele irá copiar a array começando do inicio ate o final e vai preencher a mesma com essa cópia. 
// Caso omita os valores do inicio e final el irá utilizar como incio o 0 e final o valor total do array.
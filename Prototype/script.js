// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou';
    }
}

var obj = {
    nome: 'Nadre',
    idade: 33,
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);


const pais = 'Brasil';
const cidade = new String('Rio');

const listAnimals = ['Cachorro', 'Gato', 'Cavalor'];

const list = document.querySelectorAll('li');

// Transforma em uma array
const listArray = Array.prototype.slice.call(list);
const listArray2 = Array.from(list);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

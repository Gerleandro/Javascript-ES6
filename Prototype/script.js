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

const listAnimals = ['Cachorro', 'Gato', 'Cavalo'];

const list = document.querySelectorAll('li');

// Transforma em uma array
const listArray = Array.prototype.slice.call(list);
const listArray2 = Array.from(list);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return 'Oi';
    }
}



    // ==========  EXERCICIOS  ===========

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const identidade = new Pessoa('joao', 'pedro', '25')

// Lister os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document 

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os Construtores dos dados abaixo
const li = document.querySelector("li");

li;// HTMLLIElement
li.click;// Function
li.innerText;// String
li.value;// Number
li.hidden;// Boolean
li.offsetLeft;// Number
li.click();// undefined

// Qual o construtor do dado abaixo;
li.hidden.constructor.name; // tipo de dado é string
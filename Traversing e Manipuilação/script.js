// const h1 = document.querySelector('h1'); 
// const animalsList = document.querySelector('.animals-list');
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// // h1.outerHTML = '<p>Novo titulo</p>';

// // console.log(animalsList.innerHTML);

// // lista.previousElementSibling: // elemento acima
// // lista.previousSibling: // node acima
// // lista.firstChild; // primeiro node 'child' igual a filho
// // lista.childNodes; // todos os node child

// const lista = document.querySelector('.animals-list');
// // console.log(lista.nextElementSibling); // elemento abaixo
// console.log(lista.previousElementSibling);// elemento acima

// console.log(lista.children[--lista.children.length]);//último filho: lista.children; HTMLCollection com os filhos lista.children[0]; primeiro filho
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const animals = document.querySelector('.animals');
// const contato = document.querySelector('.contact');
// const titulo = document.querySelector('.title');

// const maps = document.querySelector('.maps');

// contato.replaceChild(lista, titulo);

// // contato.insertBefore(animals, maps);

// const newh1 = document.createElement('h1');
// newh1.innerText = 'novo titulo';
// newh1.classList.add('titulo');

// console.log(newh1);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// cloneH1.classList.add('azul');

// faq.appendChild(h1)


// ============ EXERCICIO ============


// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animals
const animals = document.querySelector('.animals');

faq.innerHTML = animals.innerHTML;



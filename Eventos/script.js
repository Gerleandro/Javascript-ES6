// const img = document.querySelector('img');

// function callback(e) {
//     console.log(e);
// }

// img.addEventListener('click', callback);

// const animalsList = document.querySelector('.animals-list');

// function callbackList(event) {
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.type)
// };

// animalsList.addEventListener('click', callbackList);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(e) {
//     e.preventDefault();
//     // console.log(event);
//     console.log(this);
//     console.log(e.currentTarget);
// };

// linkExterno.addEventListener('click', handleLinkExterno);

// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent);
// // h1.addEventListener('mouseenter', handleEvent);
// // h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//     console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', handleImg);
//



// =========== EXERCICIO ===========

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna o
// comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
};

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// Selecione todos os elementos dosite começando a partir  do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event) {
//     event.currentTarget.remove();
// }; 

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento);
// });


// Utlizando o código anterior, ao invés de mostrar no console,
// remova o elemento qwue está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('.textomaior');
    }
};

window.addEventListener('keydown', handleClickT);
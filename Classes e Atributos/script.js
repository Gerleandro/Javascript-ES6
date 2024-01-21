const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className = menu.className + ' testando'

console.log(menu.className);

// console.log(menu.classList.);

const animais = document.querySelector('.animais');

console.log(animals.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('alt'));

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'é uma raposa');

const possuiAlt = img.hasAttributes('title');

console.log(possuiAlt);

console.log(srcImg);

const carro = {
    portas: 4,
    andar: function(km) {
        console.log(`andou ${km}`);
    }
}

//=========== EXERCICIO ============

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas ano primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');


// Verifique se as imagens possuem so atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach(() => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'hhtps://www.google.com/');

console.log(link);
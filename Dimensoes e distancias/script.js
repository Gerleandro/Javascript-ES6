// const animalsList = document.querySelector('.animals-list');

// const height = animalsList.scrollHeight;
// const animalsTop = animalsList.offsetTop;
// console.log(height);
// console.log(animalsTop);

// const primaryh2 = document.querySelector(' h2');
// const h2left = primaryh2.offsetLeft;

// const rect = primaryh2.getBoundingClientRect();
// const h2rect = primaryh2.getBoundingClientRect();

// console.log(primaryh2);
// console.log(h2left);
// console.log(rect);
// console.log(h2rect.top);

// if(h2rect.top < 0) {
//     console.log('passou do elemento');
// };
// console.log(
//     window.innerWidth, // width do janela
//     window.innerHeight,// soma dev tools tambem
//     window.outerWidth, // height da janela
//     window.outerHeight,// soma da barra de endereço

//     window.pageYOffset,// distância total do scroll horizontal
//     window.pageXOffset,// distância total do scroll vertical
// );

// const small = window.matchMedia('max-width: 600px');

// if(small) {
//     console.log("user mobi");
// } else {
//     console.log("user desktop");
// };

// console.log(small);



// ============ EXERCICIO ============



// Veerifique a distância da primeira imagem
// em relação ao topo da página
const distImg = document.querySelector('img');
console.log(
    distImg.offsetTop,
)

// Retorne a soma da largura de todas as imagens
function somaImg() {
    const widthImg = document.querySelectorAll('img');
    let soma = 0;
    widthImg.forEach((widthImg) => {
        soma = soma + widthImg.offsetWidth;
    });
    console.log(soma);
}
window.onload = function() {
    somaImg();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48pc de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 28 && linkHeight >= 28) {
        console.log(link, 'Boa acessibilidade');
    } else {
        console.log(link, 'má acessibilidade');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');

}
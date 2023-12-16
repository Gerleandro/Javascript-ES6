// var numero = 20;
// var numero2 = 10;

// numero += numero2; // numero = numero + numero2
// console.log(numero);
// console.log(numero2);

// var idade = 20;
// var naoPossuirDiabetes = false; 

// var podeBeber; 
// podeBeber = (idade >= 18 && naoPossuirDiabetes) ? 'Pode beber' : 'Não pode beber';

// console.log(podeBeber)

// var possuiFaculdade = false;
// if (possuiFaculdade)
//     console.log('Sim possui');
//     console.log('Isso mesmo');

// ============= EXERCICIO ==============


// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carrro e casa.
// E false caso o contrário.
var possuiCarro =  true;
var possuiCasa = true;
var darCredito; 

// if (possuiCarro && possuiCasa)
// darCredito = 'solicitação de credito aprovada' 
//     console.log(darCredito)

darCredito = (possuiCarro && possuiCasa) ? 'Credito Aprovado' : 'Credito Negado';
    console.log(darCredito);
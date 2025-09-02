const funcoesMatematicas = require('./funcoes_matematicas');
const calculadoraIdade = require('./calculadora_idade');

// Exemplo de uso:
const resultadoSoma = funcoesMatematicas.soma(5, 3);
console.log('Soma:', resultadoSoma);

const resultadoSubtracao = funcoesMatematicas.subtrai(10, 4);
console.log('Subtração:', resultadoSubtracao);

const resultadoMultiplicacao = funcoesMatematicas.multiplica(7, 7);
console.log('Multiplicação:', resultadoMultiplicacao);

const resultadoDivisao = funcoesMatematicas.divide(20, 4);
console.log('Divisão:', resultadoDivisao);

console.log(calculadoraIdade.idade('Juia', 2008));
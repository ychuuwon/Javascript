//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculadoraIdade = require('./calculadora_idade');
import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js';
import * as calculadoraIdade from './calculadora_idade.js';

console.log ("Soma: " + somar (5, 5, 5));
console.log ("Subtração: " + subtrair (10, 5));
console.log ("Multiplicação: " + multiplicar (5, 5)) ;  
console.log ("Divisão: " + dividir (10, 5));

console.log(calculadoraIdade.idade('Juia', 2008, 2025));
//6- Faça um programa que leia uma lista de números e imprima a média aritmética.

const numeros = prompt("Digite uma lista de números separados por vírgula:").split(",");
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += parseFloat(numeros[i]);
}

const media = soma / numeros.length;

console.log(`A média é ${media}.`);

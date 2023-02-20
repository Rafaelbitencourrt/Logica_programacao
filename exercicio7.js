//7- Faça um programa que leia uma lista de números e imprima o maior e o menor número.

const numeros = prompt("Digite uma lista de números separados por vírgula:").split(",");
let maior = parseFloat(numeros[0]);
let menor = parseFloat(numeros[0]);

for (let i = 1; i < numeros.length; i++) {
  const numero = parseFloat(numeros[i]);

  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

console.log(`O maior número é ${maior}.`);
console.log(`O menor número é ${menor}.`);

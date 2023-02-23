//8- Faça um programa que leia uma lista de números e imprima os números pares e ímpares separadamente.
const numeros = prompt("Digite uma lista de números separados por vírgula:").split(",");
const pares = [];
const impares = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = parseFloat(numeros[i]);

  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

console.log("Números pares: " + pares.join(", "));
console.log("Números ímpares: " + impares.join(", "));

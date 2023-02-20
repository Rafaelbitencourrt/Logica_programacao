//9- Faça um programa que leia uma lista de números e imprima apenas os números que são divisíveis por 3 e por 5.

const numeros = prompt("Digite uma lista de números separados por vírgula:").split(",");

for (let i = 0; i < numeros.length; i++) {
  const numero = parseFloat(numeros[i]);

  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(numero);
  }
}

//5- Faça um programa que leia dois números inteiros e imprima todos os números entre eles.

const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 < numero2) {
  for (let i = numero1 + 1; i < numero2; i++) {
    console.log(i);
  }
} else {
  for (let i = numero2 + 1; i < numero1; i++) {
    console.log(i);
  }
}

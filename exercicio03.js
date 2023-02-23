//3- Faça um programa que leia um número inteiro e calcule o fatorial desse número.

const numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 2; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);

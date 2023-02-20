//4- Faça um programa que leia um número inteiro e verifique se ele é primo.

const numero = parseInt(prompt("Digite um número:"));
let primo = true;

if (numero < 2) {
  primo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log(`${numero} é primo.`);
} else {
  console.log(`${numero} não é primo.`);
}

//Receber um número inteiro do usuário e informar se ele é positivo, negativo ou zero:

const numero = parseint(prompt("Informe um número inteiro:"));

if (numero > 0) {
  console.log("O número informado é positivo");
} else if (numero < 0) {
  console.log("O número informado é negativo");
} else {
  console.log("O número é zero");
}

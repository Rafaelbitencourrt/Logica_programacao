//Receber dois números do usuário e informar qual é o maior:

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
  console.log("O primeiro número é maior.");
} else if (numero2 > numero1) {
  console.log("O segundo número é maior.");
} else {
  console.log("Os números são iguais.");
}

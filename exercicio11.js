//Receber a idade de uma pessoa e informar se ela pode votar ou não (idade mínima de 16 anos para votar):

const idade = parseInt(prompt("Digite um número:"));

if (idade >= 16) {
  console.log("Você pode votar");
} else {
  console.log("Você não tem a idade minima");
}

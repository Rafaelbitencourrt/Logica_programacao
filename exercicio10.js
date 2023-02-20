//10-Faça um programa que leia uma lista de nomes e imprima os nomes em ordem alfabética.

const nomes = prompt("Digite uma lista de nomes separados por vírgula:").split(",");

nomes.sort();

console.log(nomes);

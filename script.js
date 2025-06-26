"use strict";

alert("Bem-vindo ao jogo da média!");

let quantidade = parseInt(prompt("Quantos números você quer digitar?"));

if (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Por favor, digite um número inteiro positivo.");
} else {
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let entrada = prompt(`Digite o ${i}º número:`);
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
      alert("Valor inválido. Digite um número válido.");
      i--; // repetir essa iteração
    } else {
      soma += numero;
    }
  }

  let media = soma / quantidade;

  alert(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
  console.log(`Média calculada: ${media}`);
}

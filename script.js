function jogoNumeroSecreto() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa = parseInt(prompt("Adivinhe o número de 1 a 10"));
  if (tentativa === numeroSecreto) {
    alert("Parabéns! Você acertou!");
  } else {
    alert("Errou! O número era " + numeroSecreto);
  }
}

function calculoMedia() {
  let n1 = parseFloat(prompt("Digite a primeira nota:"));
  let n2 = parseFloat(prompt("Digite a segunda nota:"));
  let media = (n1 + n2) / 2;
  alert("A média é: " + media.toFixed(2));
}

function somaNumeros() {
  let a = parseFloat(prompt("Digite o primeiro número:"));
  let b = parseFloat(prompt("Digite o segundo número:"));
  let soma = a + b;
  alert("A soma dos números é: " + soma);
}

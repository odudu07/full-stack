

const vitorias = Number(prompt("Quantos jogos seu time venceu?"));

const empates = Number(prompt("Quantos jogos seu time empatou?"));

const pontos = vitorias * 3 + empates;

alert("O total de pontos do seu time é: " + pontos);

if (pontos > 10) {
  alert("Seu time está indo bem! ");
} else if (pontos < 5) {
  alert("Seu time precisa melhorar ");
} else {
  alert("Seu time está mais ou menos ");
}

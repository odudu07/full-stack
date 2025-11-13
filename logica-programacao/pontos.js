

// 1 - Pergunta pro usuário quantos jogos o time venceu
let vitorias = Number(prompt("Quantos jogos seu time venceu?"));

// 2 - Pergunta quantos jogos o time empatou
let empates = Number(prompt("Quantos jogos seu time empatou?"));

// 3 - Calcula os pontos (cada vitória vale 3 pontos)
let pontos = vitorias * 3 + empates;

// 4 - Mostra o total de pontos
alert("O total de pontos do seu time é: " + pontos);

// 5 - Implementa as condições
if (pontos > 10) {
  alert("Seu time está indo bem! ");
} else if (pontos < 5) {
  alert("Seu time precisa melhorar ");
} else {
  alert("Seu time está mais ou menos ");
}

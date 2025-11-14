let anoInicio;
let anoAtual = 2025;

anoInicio = parseInt(
  prompt("Digite o ano da primeira eleição que você acompanhou:")
);

while (anoInicio <= anoAtual) {
  console.log("Ano de eleição: " + anoInicio);
  anoInicio = anoInicio + 2; // próxima eleição
}

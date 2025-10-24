function calcularConsumo() {
  const distancia = parseFloat(document.getElementById('distancia').value);
  const combustivel = parseFloat(document.getElementById('combustivel').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(distancia) || isNaN(combustivel) || combustivel <= 0) {
    resultado.innerText = "Por favor, insira valores válidos!";
    return;
  }

  const consumoMedio = distancia / combustivel;

  resultado.innerText = `O consumo médio é de ${consumoMedio.toFixed(3)} Km/L`;
}

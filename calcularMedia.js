function calcularMediaENotificarSePassou(notas) {
  let total = 0;

  if (notas.length === 0) {
    throw new Error("Erro: O array de notas não pode estar vazio.");
  }

  for (let i = 0; i < notas.length; i++) {
    if (typeof notas[i] !== "number") {
      throw new Error("Erro: Todas as notas devem ser números.");
    }
  }

  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }

  let media = (total / notas.length).toFixed(2);

  if (media >= 70) {
    return `Parabéns! Sua média foi ${media} e você passou`;
  } else {
    return `Sua média foi ${media} e você não passou`;
  }
}

module.exports = calcularMediaENotificarSePassou;

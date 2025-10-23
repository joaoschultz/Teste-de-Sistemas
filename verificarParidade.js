function verificarParidade(numero) {
  let resultado;

  if (typeof numero !== "number" || numero === null) {
    throw new Error("Entrada inválida: deve ser um número.");
  }

  if (numero % 2 == 0) {
    resultado = "Par";
  } else {
    resultado = "Ímpar";
  }

  return resultado;
}

module.exports = verificarParidade;

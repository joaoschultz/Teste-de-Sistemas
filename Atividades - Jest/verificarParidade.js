function verificarParidade(numero) {
  let resultado;

  if (typeof numero !== "number" || numero === null) {
    throw new Error("Entrada inválida: deve ser um número.");
  }
  if (!Number.isInteger(numero)) {
    throw new Error("Entrada inválida: deve ser um número inteiro.");
  }
  
  if (numero % 2 == 0) {
    resultado = "Par";
  } else {
    resultado = "Ímpar";
  }

  return resultado;
}

module.exports = verificarParidade;

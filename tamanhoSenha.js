function verificarTamanhoDaSenha() {
  let senha = "";

  do {
    senha = prompt("Insira sua senha. Ela deve ter pelo menos 8 caracteres.");
  } while (senha.length < 8);

  return "Você inseriu uma senha válida";
}

module.exports = verificarTamanhoDaSenha;

function podeTrabalhar(idade) {
  if (idade < 18) {
    return ("Voce é muito jovem para trabalhar");
  } else if (idade >= 18 && idade <= 65) {
    return ("Voce pode trabalhar");
  } else {
    return ("Voce ultrapassou a idade de trabalho");
  }
}

module.exports = podeTrabalhar;

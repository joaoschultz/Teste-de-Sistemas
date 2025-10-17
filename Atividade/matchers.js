function podeTrabalhar(idade){
    if(idade < 16 && idade > 65){
        console.log("Nao pode trabalhar");
    }else if(idade >= 16 && idade <= 65){
        console.log("Pode trabalhar");
    }else{
        console.log("ultrapassou a idade");
    }
}

module.exports = podeTrabalhar
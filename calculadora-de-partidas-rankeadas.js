function calculadoraRankeada(vit, der){
    let resultado = vit - der
    return resultado
}

function nivel(saldoVitorias){
    let resultado
    if (saldoVitorias <= 10) {
        resultado = "Ferro"
    }else if (saldoVitorias >10 && saldoVitorias <=20){
        resultado = "Bronze"
    }else if (saldoVitorias >20 && saldoVitorias <=50){
        resultado = "Prata"
    }else if (saldoVitorias >50 && saldoVitorias <=80){
        resultado = "Ouro"
    }else if (saldoVitorias >80 && saldoVitorias <=90){
        resultado = "Diamante"
    }else if (saldoVitorias >90 && saldoVitorias <=100){
        resultado = "Lendário"
    }else{
        resultado = "Imortal"
    }
    return resultado
}

saldoVitorias = calculadoraRankeada(200,10)
nivel = nivel(saldoVitorias)

console.log("O Herói tem de saldo de "+ saldoVitorias + " está no nível de " + nivel)


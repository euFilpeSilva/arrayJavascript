// algoritimo que mostra as receitas e despesas de uma familia e no fim mostra se o saldo esta positivo ou negativo

familia = {
    receitas: [1500, 2000, 3000, 1000],
    despesas: [1000, 1500, 6000, 200],
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }
    return total
}

function calculoReceitaFinal() {

    let entradas = sum(familia.receitas)
    let saidas = sum(familia.despesas)  

    const total = entradas - saidas
    const validaValor = total >= 0          
    let balancoResultado ="negativo"

    if(validaValor) {
        balancoResultado = "positivo"
    }

    console.log(`Seu saldo é: ${balancoResultado} ${total}`);
}



calculoReceitaFinal()

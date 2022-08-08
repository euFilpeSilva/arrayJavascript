// Crie uma função que receba uma string em celcius ou
//  em fahrenheit e faça a transformação de uma unidade para outra

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    //  Conversão de F pra C
    // vamos remover o F e converter o valor de string pra number
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C to F ->
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 +32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'));
    console.log(transformDegree('10C'));
    // transformDegree('50Z')
} catch (error) {
    console.log(error)
}
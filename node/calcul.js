function calculadora (el1, operador, el2) {
    let result 

    switch (operador) {
        case '+':
            result = el1 + el2
            break
        case '*':
            result = el1 * el2
            break
        case '-':
            result = el1 - el2
            break
        case '/':
            result = el1 / el2
            break;
        default:
            console.log("fora da curva")
            break
    }
    return result
}

console.log(calculadora( 8, '*', 2))
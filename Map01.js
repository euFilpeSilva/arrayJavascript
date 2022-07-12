const numeros = [1, 2, 3, 4, 5]

let result = numeros.map( e => {
    return e *2
})
console.log(result);

//O map gera um novo array, não altera o atual.

//outros examples:

const soma10 = e => e + 10
const triplo = e => e * 3
const convertDinheiro = e => ` R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numeros.map(soma10).map(triplo).map(convertDinheiro)

console.log(result);
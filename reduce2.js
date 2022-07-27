const notas = [7.5, 8.10, 6, 9.3, 20.4]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(
notas.reduce(somar),
notas.length
)
console.log(mediaTurma);
// pega todas as notas e vai somando e imprimindo o valor atualizado
// junto do proximo valor/indice


const alunos = [
    {nome: 'João', nota: 7.0, bolsista: true},
    {nome: 'Maria', nota: 10.5, bolsista: false},
    {nome: 'Angela', nota: 3.7, bolsista: true},
    {nome: 'Alisson', nota: 4.3, bolsista: false},
    {nome: 'Jana', nota: 8.0, bolsista: true},
]

console.log(alunos.map( aluno => aluno.nota))

const resultado = alunos.map( aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado);
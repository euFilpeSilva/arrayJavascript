const alunos = [
    {nome: 'João', nota: 7.0, bolsista: true},
    {nome: 'Maria', nota: 10.5, bolsista: false},
    {nome: 'Angela', nota: 3.7, bolsista: true},
    {nome: 'Alisson', nota: 4.3, bolsista: false},
    {nome: 'Jana', nota: 8.0, bolsista: true},
]

// Desafio 01: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista //retorna se o bolsista é true ou falso, sendo ele true por padrão
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas));

// Desafio 02: Algum aluno é bolsista?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista //retorna se existe bolsista ou não
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsistas));
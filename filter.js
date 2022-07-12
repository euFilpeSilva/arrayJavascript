const alunos = [
    {nome: 'João', nota: 7.0, bolsista: true},
    {nome: 'Maria', nota: 10.5, bolsista: false},
    {nome: 'Angela', nota: 3.7, bolsista: true},
    {nome: 'Alisson', nota: 4.3, bolsista: false},
    {nome: 'Jana', nota: 8.0, bolsista: true},
]

let ini = alunos.filter(aluno => {
    return false
} )

const aprovado = aluno => aluno.nota >= 7
const qualifica = aluno => aluno.bolsista

const result = alunos.filter(aprovado).filter(qualifica)



console.log(result);

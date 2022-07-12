const alunos = [
    { nome: 'João', nota: 7.8 },
    { nome: 'Maria', nota: 8.9 }
]

// vamos calcular a média de notas desses alunos de forma imperativa e depois declarativa


// imperativo
let total1 = 0
for(i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length);


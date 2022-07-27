const alunos = [
    {nome: 'Ana', NOTA: 5.5 },
    {nome: 'Antonio', NOTA: 3.2 },
    {nome: 'Marcos', NOTA: 9.0 },
    {nome: 'Bia', NOTA: 9.10 },
    {nome: 'Gil', NOTA: 5.6 },
    {nome: 'José', NOTA: 4.9 },
    {nome: 'Marcelo', NOTA: 10.0 },
    {nome: 'Rai', NOTA: 4.5 },
    {nome: 'Mig', NOTA: 6.7 },
    {nome: 'Ji', NOTA: 8.8 },
]

// // IMPERATIVO
// const aprovados = []

// for(let i = 0;i < alunos.length; i++ ) {
//    if(alunos[i].NOTA >= 7) {
//     aprovados.push(alunos[i])
//    }
// }

// console.log(aprovados);

// DECLARATIVO

const estaAprovado = aluno => aluno.nota >= 7

const aprovados2 = alunos.filter(estaAprovado)
console.log(aprovados2);

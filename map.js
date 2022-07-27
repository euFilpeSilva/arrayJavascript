const alunos = [
    {
        nome: "João",
        idade: 17,
        turma: "5B",
        professor: "Marcos",
        matricula: 123456321
    },
    {
        nome: "Marcos",
        idade: 15,
        turma: "5B",
        professor: "Marcos",
        matricula: 12345612
    },
    {
        nome: "Antonio",
        idade: 16,
        turma: "7B",
        professor: "André",
        matricula: 123456789
    },
    {
        nome: "Mateus",
        idade: 15,
        turma: "6B",
        professor: "Joarez",
        matricula: 12345678
    },
    {
        nome: "Abner",
        idade: 45,
        turma: "7B",
        professor: "Andre",
        matricula: 1234567
    },
]

alunos.map(aluno => {
    console.log(`O aluno se chama ${ aluno.nome }e sua matricula é: ${ aluno.matricula}`);
    
})
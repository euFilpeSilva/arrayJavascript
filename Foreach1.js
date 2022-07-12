const aprovados = ['Juliana', 'Alto', 'João', 'Marcelo']


//O forEach vai percorrer o arrai e pra cada iteração a função vai trazer um nome com o indice incrementado.
aprovados.forEach(function(nome, indice) {
    console.log(`${ indice +1 } ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //Forma reduzida onde quero só os nomes, sem os indices (EroFunction)

// a callback passada pro forEach recebe até 3 parametros, tendo a possibilidade de suprimi-localStorage.
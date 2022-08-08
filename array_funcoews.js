const techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

//verificar se um dado existe no array
console.log(techs.includes("ola mundo"));

//remover 1 ou mais itens em qualquer posicao do array
techs.splice(1, 2)

//encontrar a posiçao de um elemento no array
let index = techs.indexOf('css')
console.log(index);


const elementos =['elemento0', 'elemento1', 'elemento2', 'elemento3']

elementos.pop() //remove o ultimo item do array.

console.log(elementos);

elementos.push('elemento_adicional') //adiciona um elemento a ultima posição do meu array.

console.log(elementos);

elementos.shift() //Remove primeiro elemento da lista.

console.log(elementos);

elementos.unshift('elemento_especial') //Adiciona elemento a primeira posição do array.

console.log(elementos);

//Splice pode tanto adicional como remover elementos.

//Adicionar
elementos.splice(2, 0, 'esp01', 'esp02' )

//Remover
elementos.splice(3, 1)

console.log(elementos);

const novoArray = elementos.slice(2) //Gera um novo array a partir do indice passado.

console.log(novoArray);

const indicesRestritos = elementos.slice(1, 4) //Nesse caso vamos imprimir somente do indice 1 até o 3.

console.log(indicesRestritos);


const { isAnyArrayBuffer } = require("util/types");

const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2  //parametro representando cada numero do array
console.log(nums.map(dobro));

const nums2 = [1, 2, 3, 4, 5]
const dobro2 = (n, i) => n * 2 + i //segundo parametro representando os indices do array
console.log(nums2.map(dobro2));

const nums3 = [1, 2, 3, 4, 5]
const dobro3 = (n, i, a) => n * 2 + i + a.length //Terceiro parametro representando o tamanho do array
console.log(nums3.map(dobro3));

// Vamos retornas a primeira letra de cada elemento do array nomes
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras);


const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 649.50 },
    {nome: 'Impressora', qtde: 9, preco: 789.50 },
    {nome: 'Caderno', qtde: 3, preco: 69.80 },
    {nome: 'Lapis', qtde: 4, preco: 4.10 },
    {nome: 'Tesoura', qtde: 1, preco: 64.30 },
]

const pegaNome = item => item.nome //retorna o nome de cada item do array
 console.log(carrinho.map(pegaNome));

 const totalItens = item => item.qtde * item.preco //retorna as quantidades multiplocadas pelos preços
 const totais = carrinho.map(totalItens)

 console.log(totais);

//  vamos implementar um map
Array.prototype.meuMap = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this)) //parametros, posição, indice e tamanho do array
    }
    return novoArray
}


const pegaNome2 = item => item.nome //retorna o nome de cada item do array
 console.log(carrinho.meuMap(pegaNome2));
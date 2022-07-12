const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis de cor", "preco": 15.35}',
    '{"nome": "Caderno capa dura", "preco": 20.55}',
    '{"nome": "Apontador", "preco": 2.44}',
]

//Deve retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado);
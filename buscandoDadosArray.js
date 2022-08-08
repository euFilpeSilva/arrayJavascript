// Vamos buscar dados dos livros e autores dentro dos arrays

// desafios:

// - Contar o numero de categorias e o numero de livros em cada categoria
// - Contar o numero de autores
// - Mostrar livros do autor Augusto cury
// - Transformar a funcao acima em outra que ira receber o nome do autor e devolver os livros desse autor

const livrosPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },
    {
        categoria: "Inteligencia emocional",
        livros: [
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do Século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    },
];
// - Contar o numero de categorias e o numero de livros em cada categoria
const totalCategorias = livrosPorCategoria.length
console.log(totalCategorias);

// - Contar o numero de  livros em cada categoria
for( let categorias of livrosPorCategoria) {
    console.log("Total de livros da categoria" + categorias.categoria);
    console.log(categorias.livros.length);
}

// contar o numero de autores
function contarAutores() {
    let autores = [];

    for( let categorias of livrosPorCategoria) {
        for(let livros of categorias.livros) {
            if(autores.indexOf(livros.author) == -1) {
                autores.push(livros.author);
            }
        }

    }
    console.log("Total de autores:" + autores.length);
}
contarAutores()

// filtra os livros do augusto
function livrosAugusto() {
    let livros = [];

    for( let categorias of livrosPorCategoria) {
        for(let livro of categorias.livros) {
            if(livro.author === "Augusto Cury") {
                livros.push(livro.title);
            }
        }

    }
    console.log("Livros do outor:" + livros);
}
livrosAugusto()

// filtra os livros pelo nome do autor

function livrosPorNomeAutor(author) {
    let livros = [];

    for( let categorias of livrosPorCategoria) {
        for(let livro of categorias.livros) {
            if(livro.author === author) {
                livros.push(livro.title);
            }
        }

    }
    console.log(`Livros do Autor: ${author} - ${livros.join(",")}`);
}

livrosPorNomeAutor('Augusto Cury')
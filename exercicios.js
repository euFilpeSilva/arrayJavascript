// const receba = ( nome ) => {
//     console.log('Olá ' + nome);
// }
// receba('João')

// Object.assign: copia os dados e sobrescreve os iguais.


// com this


const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());

function bomDia() {
    console.log("Bom diaaa!!!!");
}

const boaTarde = function() {
    console.log("Boa tardeee!!!!");
}
// Passar um função como parametro para outra função
function umaFuncaoOuOutra(fn) {
   if(typeof fn === 'function'){
    fn()
   }
}

umaFuncaoOuOutra(3)
umaFuncaoOuOutra(bomDia)
umaFuncaoOuOutra(boaTarde)

// Retornar uma função a partir de outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8));


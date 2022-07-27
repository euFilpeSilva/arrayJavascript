function somar(p1) {
    return function(p2) {
        return function(p3) {
            return p1 + p2 +p3
        }
    }
}

const resultado = somar(2)
console.log(resultado(2)(2));

function calcular(a) {
    return function(b) {     
            return function(fn){
                return fn(a,b)
         }     
    }
}

function soma(a,b) {
    return a+ b
}
function mult(a,b) {
    return a * b
}
function sub(a,b) {
    return a - b
}

const r1 = calcular(10)(5)(mult)
console.log(r1);



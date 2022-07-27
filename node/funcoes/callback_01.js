
let somar = (a, b)  => {
   return a + b
}

let subtrair = (a, b) => {
   return a - b
};

function exec(fn, a, b){
    return fn(a, b)
}

console.log(exec(somar, 10, 5));
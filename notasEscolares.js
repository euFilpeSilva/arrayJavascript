// Algoritimo que transforma notas escolares dosistema numerico para caracteres
notas = 100
function notasEscolares (notas) { 
    let scoreFinal
   if( notas >= 90 && notas <= 100) {
   scoreFinal = "A"
   }else if(notas >= 80 && notas <= 89) {
    scoreFinal = "B"
   }else if(notas >= 70 && notas <= 79) {
    scoreFinal = "C"
   }else if(notas >= 60 && notas <= 69) {
    scoreFinal = "D"
   }else if( notas < 60 ) {
    scoreFinal = "E"
   }else {
    scoreFinal = "Fora do intervalo"
   }

   return scoreFinal
}
console.log(notasEscolares(900));
console.log(notasEscolares(61));
console.log(notasEscolares(2));
console.log(notasEscolares(89));
console.log(notasEscolares(52));
console.log(notasEscolares(77));
console.log(notasEscolares(83));
console.log(notasEscolares(93));


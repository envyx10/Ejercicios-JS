
/* 

*    JS de version mcdEuclides.
*    Version: 1.0
*    Fecha: 20/05/2024
*    @author: Pablo Diaz.

*/

function mcdEuclides(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
  
    while(num2 !== 0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    document.getElementById("resultado").innerHTML = "El MCD es: " + num1;

    return false;
}

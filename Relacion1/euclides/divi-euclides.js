
/* 
*    JS de formulaEuclides.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.
*/

function diviEuclides(){

    let divi = parseInt(document.getElementById("dividendo").value) ;
    let disor = parseInt(document.getElementById("divisor").value) ;

    let cociente = 0;

    /* El resto es lo que queda en el monton despúes del último reparto */

    while(divi >= disor){
        divi -= disor;
        cociente++ 
    }

    document.getElementById("resultado").innerHTML = "El cociente es : " + cociente + 
                                                     " y el resto es : " + divi;

    return false;

}
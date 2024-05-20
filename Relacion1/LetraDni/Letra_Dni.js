/* 

*    JS de suma-formulario.html.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.

*/

function calculoLetra (){

    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
    const RESTO = 23;

    let dni = parseInt(document.getElementById("dni").value);
    let resto = dni % RESTO;

    document.getElementById("resultado").innerHTML = "La letra es: " + LETRA[resto];

    return false;

}


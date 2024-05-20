/* 

*    JS de suma-formulario.html.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.

*/

function sumar(){

    //* 1- Captación de datos
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    //* 2- Cáculo 
    let suma = n1 + n2;
    //* 3- Mostrar resultado
    document.getElementById("resultado").innerHTML = "<strong>El resultado es:</strong> " + suma;

    return false //! para que se pare el documento html, freno la simulación de envio SIEMPRE.
}


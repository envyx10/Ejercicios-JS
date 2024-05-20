// * JS secuencialUno.html *//

/**
 *  * En este código, implementaremos un algoritmo secuencial
 *            ? entrada - cálculo - saludo
 * 
 *  * 1º version : los datos se asignan en la declaración de variables.
 *  ! JS no es obligatorio declarar datos ni especificar tipos, typescript si.
 * 
 *  *    let numero1 = 7;  - El intérprete deduce que numero1 es integer 
 *  *    let numero2 = 5;  - El intérprete deduce que numero2 es integer 
 * 
 *  !    El probema es que numero1 que vale 7 puedes igualarlo a una cadena // numero1 = " toma ya "
 *  
 *  *    let suma = numero1 + numero2  // cálculo
 * 
 *  *    document.getElementById("resultado").innerHTML = suma;
 * 
 *  * El código JS se ejecutra cuando el navegador carga la linea que enlaza el script
 *  * si quiero tener el control de cuando se ejectura el codigo, debo hacer uso de:
 *  *  - eventos de usuario.
 *  *  - funciones en el código JS: declaración y ejecución separado
 * 
 */


function sumar(){

    let numero1 = parseInt(prompt(" Dame un número entero   ")); //*  hacemos un parseo 
    let numero2 = parseInt(prompt(" Dame otro número entero ")); //*  hacemos un parseo 
    
    let suma = numero1 +numero2; 
    
    document.getElementById("resultado").innerHTML = "El <b>resultado</b> de la suma es: " + suma ;

}


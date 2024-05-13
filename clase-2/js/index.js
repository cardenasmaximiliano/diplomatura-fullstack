//control de flujos


//operadores de comparacion o relacionales


// let numero = 1;  => cuando hay un solo = en realidad de lo que estamos hablando es 
//de un operador de asignacion.

//operador de igualdad

// (ingresamos dato propio  == X ) me va a dejar que se ejecute una linea de codigo.

// solo compara valores y hace conversiones en caso de necesario. 

// let numero = "12";

// (numero == 12)

//operador de igualdad estricto

// === 

// (numero === 12); //en operdadores de igualdad estricto, se compara no 
//solo el mismo dato si no el tipo de dato.

//condicional if 

//cuando hablamos de una estructura if, vamos a hablar de una construcion fundamental 
//para la toma de decisiones. siempre evalua expresiones que son VERDADERAS.

// if (condicion booleana){ aca se expresa lo que se quiere ejecutar }

let numero = "8";

//en este caso nos va a dar verdadera la comparacion porque estamos frente a un operador de igualdad.
if (numero == "8"){
    console.log( "la comparacion es verdadera");
}


//en este caso nos va a dar false porque el operador de igualdad 
//estricto requiere que sean el mismo tipo de dato
if (numero === "8"){
    console.log( "la comparacion es verdadera");
}

//estructura/ sentencia else

if (numero === 8){
    console.log( "esto es un numero 8")
}
else{
    console.log( "no es el mismo numero")
}

//estructora / sentencia else if


// operadores de mayor que y menor que 

// > mayor que   < menor que

// >= mayor o igual  <= menor o igual

/*
let numeroUno = 0;

if (numeroUno >= 0){
    console.log( "valor es mayor a 0")
}
else if( numeroUno <= 0){
    console.log("valor seguramente es negativo")
}
else{
    console.log("valor es 0");
}

*/

/*
    1- pedir datos al usuario  => prompt

    2- si es mayor de edad o no 

*/

// const EDAD = prompt("INDICA TU EDAD");

// const EDAD_NUMERO = parseInt(EDAD);

//ENTRAMOS EN LA CONDICION DE SI ES MAYOR O NO

// if(isNaN(EDAD_NUMERO)){  //isNaN significa not a number.
//     console.log("che loco pone un numero");
// } else{
//     //comprobar si la persona tiene o no 18
//     if(EDAD_NUMERO >= 18){
//         console.log("es mayor para manejar")
//     } else if (EDAD_NUMERO == 17){
//         console.log("podes manejar pero con el permiso de tus padres");

//         let permiso = prompt("tenes permiso ingresa si o no");
//         if (permiso === "si"){
//             console.log("podes manejar tranquilo")
//         } else{
//             console.log("pedile a tus padres que te saquen el permiso")
//         }

//     } 
//     else{
//         console.log("no es mayor para manejar")
//     }
// }

//operador logicos 

//nos ayuda a evaluar y tomar decisiones basadas en codiciones, 
//las condiciones recuerden que se miden en booleanos que son 
//verdero= 1 o falso = 0.

// dentro de js tenemos 3 operadores logicos  && = Y o and ; || = o u OR ; ! no o NOT; 

//&& operador  AND  => siempre va a dar verdadero si lo que se se compara es verdadero 

/*
    a    |   b   |   a && b
    true | true  |   true 
    true | false |   false
    false| true  |   false
    false| false |   false

*/ 

// let edad = 25;
// let tieneLicencia = false;

// if( edad >= 18 && tieneLicencia == true){
//     console.log("puede conducir")
// }else{
//     console.log("no puede conducir")
// }

// operador logico or || 
/*
devuelve verdadero o true si al menos una de las condiciones es verdadera. 
para que devuelva falso tienen que ser las 2 falsas

    a   | b    | a || b
   true | true | true
   true | false| true
   false| true |true
   false| false| false
   */ 


// let numeroDivision = -3;

//si un numero es positivo 0 es divisible por 5

// if ( numeroDivision > 0 || numeroDivision % 5 === 0){
//     console.log("el numero es positivo o divisible por 5")
// } else{
//     console.log("ni es positivo ni es divisible por 5")
// }

// //solamente pueden ejecutar acciones administradores o moderadores

// let rolUsuario = "pepito";

// if ( rolUsuario === "administrador" || rolUsuario === "moderador"){
//     console.log ("puede cambiar el color de la pagina")
// } else{
//     console.log("es simplemente un usuario")
// }

// operador not  ! 

// nega una condicion, si la condicion es verdedara la niega y la hace falsa. 

// verificamos si un usuario NO es menor de edad

// let edad = 20;

// if(!(edad < 18)){
//     console.log("el usuario es mayor de edad")
// }else{
//     console.log("el usuario es menor de edad")
// }

// //usuario INICIA SESION

// let usuarioLogueado = false;

// if(!usuarioLogueado){ //false
//     console.log("el usuario no inicio sesion");

// }else{
//     console.log("el usuario inicio sesion")
// }

// ejemplo de perfil

let perfilCompleto = true; 

if(!perfilCompleto){
    console.log("por favor completa el perfil")
}else{
    console.log("perfil completo.")
}

//precedencia de operadores

//1- parentesis y corchetes a la hora de ejecutar.

//operadores aritmeticos * / %

// operadores aritmeticos + - 

// operadores logicos && || ! 
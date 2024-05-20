/*
ciclos e iteraciones

- es una estructura de control de flujo.
- nos permite ejecutar repetidamente un bloque de codigo siempre y cuando se cumpla una 
condicion especifica.
- es importante porque nos permite automatizar tareas y procesar datos mas eficientes. 

2 tipos de ciclos/ iteraciones o BUCLE

****ciclo por conteo (counted loop):

- ciclo por contador.
- se utiliza cuandos sabemos exactamente cuantas veces deseamos que se repita un bloque de codigo.

ciclo FOR.

*** ciclos por condiciones (conditional loop)

- va estar controlado por condiciones y solamente se va a ejecutar mientras la condicion sea verdedera. 
- este ciclo se utiliza cuando no sabemos cuantas veces necesitamos que se repita el bloque de codigo. 

- while  / do ... while


*/

/*
Operadores de incremento / decremento

-operadores de tipo unitario, que aumentan o disminuyen el valor de una variable.

operador de incremento = ++
operador de decremento = --

*/

/*** operador de incremento = post-incremento */

// let x = 5;

// console.log(x++);
// console.log(x);

/** pre-incremento **/

// let y = 8;
// console.log(++y);

/* operador de decremento = post y pre */

// let a = 9;
// console.log(a--);
// console.log(a)

//ciclo FOR

/*
estructura

for(inicializacion; condicion; actualizacion)

 -inicializacion(desde)= establecer una variable de control
se va a ejecutar una sola vez y asigna un valor inicial.
 -condicion(hasta)= es la expresion logica que se verifica en cada iteracion.
 Mientra sea verdadero se ejecuta, si es falso se termina el bucle.
 -actualizacion = es donde se incrementa o decrementa la variable de control.
*/

// for(let i = 0; i <= 9; i++ ){
//     console.log("iteracion Nro", i);
// }

// const OCHO = 8;

// for(let i = 1; i <= 10; i++){

//     const RESULTADO = OCHO * i;

//     console.log(OCHO + "x" + i + "=" + RESULTADO);
//     console.log(`${OCHO} X ${i} = ${RESULTADO}`); //TEMPLATE LITERAL
// }

//imprimir numeros pares del 1 al 20

const  INICIO = 1;
const FIN = 100;


// for(let i = INICIO; i <= FIN; i++){

//     // if( i % 2 === 0){
//     //     console.log(`el numero ${i} es par`);
//     // }

//     if( i == 80){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

//necesito imprimir multiplos de 3 entre 1 y 20
// y que no me imprima el 12

// for(let i = 1; i <= 20; i++){

//     if(i === 12){
//         continue;
//     }

//     if( i % 3 === 0){
//         console.log(`los multiplos de 3 son ${i}`);
//     }
// }


/*
while => 
    1- evalua la condicion
    2- despues de ejecutar el bloque de codigo vuelve a la evaluacion de la condicion


    /while(condicion){   mientras se cumpla una condicion

    }

*/

// let contador = 1;

// while( contador <= 5){
//     console.log(contador);
//     contador++;
// }

/* do... while 
    a diferencia del while, este garantiza que el codigo se va a ejecutar aunque sea
    una vez, indiferente de si la condicion es verdera o falsa.

    do{
        bloque a ejecutar
    } while(condicion);

*/

// let contador = 7;

// do{
//     console.log(contador);
//     contador++;

// }while(contador <=6);

//un programa que sume 2 numeros, dados por el usuario

// let suma = 0;
// let continuar;

// do{
//     const NUMERO = parseInt(prompt("ingrese su numero para sumar"))

//     if(!isNaN(NUMERO)){
//         suma += NUMERO;
//         continuar = prompt("quiere ingresar otro numero? si/ no").toLowerCase()
//     }else{
//         alert("ingrese un numero valido");
//         continuar = "si";
//     }
// }while(continuar === "si");

// console.log("la suma total es ") 


//switch
/**
    nos va a ser recordar al condicional if else else if
    comparar valores basados en el valor de una expresion


    switch(expresion){
        case valor1:
            ///bloque de codigo
            break;
        case valor2:
            ///bloque de codigo
            break;
        case valor3:
            ///bloque de codigo
            break;
        case valor4:
            ///bloque de codigo
            break;
        
        default:
            //codigo en caso de que ningun valor sea compatible con el de la expresion
        }
 * 
 * */ 


let fruta = "frutilla";


switch(fruta){
    case "naranja":
        console.log( "vale 4pesos");
        break;
    case "frutilla":
        console.log( "vale 5 pesos");
        break;
    case "mango":
        console.log( "vale 10 pesos");
        break;
    case "manzana":
        console.log( "vale 7 pesos");
        break;
    default:
        console.log("no tenemos ese producto")
}
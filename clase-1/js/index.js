// aca un comentario

/*

aca cdomentarios multilinea

ctrl + } en win

comand + barra inclinada/ slash
*/

/*
definicion de variable: 

1- es un espacio reservado de memoria.
2- el cual va a tener dentro o va a alojar un tipo de dato.
    -numerico
    - cadena de texto (string)
    -booleanos
    -objetos
    -funciones
    - etc
3- este espacio reservado puede variar o puede ser constante. 

Las variables fueron modificandose a traves de las versiones 

previo ECMA6

 - var

ECMA6

- let
- const

------

concepto llamado scope = alcance. 


*/

// var nombreClave = tipo de dato;

//numero
let numero = 8;
// string 
let cadenaDeTexto = "es una cadena";
let cadenaDeTexto1 = 'es una cadena';
let cadenaDeTexto2 = `es una cadena`;
//booleanos

let boolean = true;
let booleanF = false;

//declaracion asignacion

//declarar
let nombreCompleto;

//asignarle un valor
// nombreCompleto = "maximiliano cardenas";


/*
    let y const

    let => se puede modificar

    */

let pepito = "hola soy pepito";


/*
console.log 
*/
console.log(pepito);//funcion en javascript que imprime mensajes en cosola

pepito = "hola soy roberto";

console.log(pepito);

/**
    const = no se modifica
    se suelen escribir en mayuscula y en snake_case
 */

// const EDAD_MINIMA = 18; 

// console.log(EDAD_MINIMA);

// EDAD_MINIMA = 17;

// console.log(EDAD_MINIMA);


/**opeaciones basicas */

let numero1 = 8;
let numero2 = 5;

let sumatoria = numero1 + numero2; //suma +
console.log(sumatoria);

let resta = numero1 - numero2;
console.log(resta);

let multiplicacion = numero1 * numero2;
console.log(multiplicacion);

let division = numero1 / numero2;
console.log(division);

let resto = numero1 % numero2; //modulo
console.log(resto);

let potencia = numero1 ** numero2;
console.log(potencia);


/**
    string = concatenacion


 * **/

  
  // let nombre = "marcelo";
    // const APELLIDO = "farias";

    // let nombreApellido = nombre +" "+ APELLIDO;

    // console.log(nombreApellido);
    // console.log("El nombre que posee la variable APELLIDO es :" + APELLIDO);

    // //TEMPLATE STRING 

    // console.log(`mi nombre es ${nombre} y mi apellido es ${APELLIDO}`);


/***PROMPT */

/***COMO PASO UN STRING A UN NUMERO A TRAVES DEL PARSEO
 * 
 * parseInt
 */
 const NUMERO_UNO = parseInt(prompt("INGRESA TU NUMERO")) ;
 const NUMERO_DOS =parseInt(prompt("INGRESA TU NUMERO"));
// document.write();


// let typeNumero = 8;
// let typeLetra = "A";
// let typeBoolean = true;

// console.log(typeof typeNumero);
// console.log(typeof typeLetra);
// console.log(typeof typeBoolean);

const SUMA = NUMERO_UNO + NUMERO_DOS;
console.log(SUMA);
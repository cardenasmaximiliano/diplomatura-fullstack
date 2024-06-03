/** metodos de matematicas*/

/* 

    pi * radio al cuadrado

    metodos para trabajar potencias y raices

    Math.pow(base, exponente) => me va a devolver la base elevada de un exponenete
    Math.sqrt(x) => devolver raiz cuadrada de un numero
    
    */

function calcularCirculo(radio){
    return Math.PI * Math.pow(radio, 2);
}

let radio = 5;

console.log(`el area de un circulo con radio ${radio} es : ${calcularCirculo(radio)}`);

/*** 
 * 
 * Math.E => representa la base de logaritmo natural (E) 
 * 
 * 
 * 
 * N(t)= N0 x Ert
 */

console.log(Math.E);
/*
Math.LN2 => CALCULAR LOGARITMO NATURAL DE 2
Math.LN10 => logaritmo natural de 10
Math.LOG2E => logaritmo en base 2 de e

*/

/* metodos de redondeo

    Math.round(x) => redondeo entero al mas cercano
    Math.ceil() => redondear hacia arriba (redondea al mayor numero)
    Math.floor() => redondea hacia abajo(redondea al menor numero)
    Math.trunc() => elimina los decimales y devuelve parte entera 

*/

console.log(Math.round(4.49));
console.log(Math.ceil(-4.1));
console.log(Math.floor(-4.9));
console.log(Math.trunc(3.9));

/* metodos para obtener valors absolutos

    Math.abs() => devolver un valor absoluto

*/

console.log(Math.abs(-7.24));

/*
    metodos para encontrar minimo y maximos


    Math.max(a,b,c...) => dentro Math.max nosotros podemos poner varios numeros
    y me van a devolver el mayor

    Para poder utilizar un numero de tipo infinito se utiliza la palabra reservada
    Infinity que puede ser positivo o negativo poniendo -Infinity
*/

// console.log(Math.max(18,5,11));

/**
 *  Math.min(a,b,c...) => dentro Math.min nosotros vamos a encontrar
 * entre varios numero el menor.
 */

// console.log(Math.min(18,24,45));
/*
metodos para trabajar potencias y raices

    Math.pow(base, exponente) => me va a devolver la base elevada de un exponenete
    Math.sqrt(x) => devolver raiz cuadrada de un numero
    
    */

    // console.log(Math.sqrt(16));

    /**
    metodos trigonometricos
    
    Math.sin() => devuelve el seno de un numero (en radianes)
    Math.cos() => devuelve el coseno de un numero (en radianes)
    Math.tan() => devuelve la tangente deu n numero (en radianes)

     */

    // console.log(Math.sin(Math.PI/2));
    // console.log(Math.cos(Math.PI));

    /**
     * Math.random => lo que hace es generar un numero aleatorio que siempre va 
     * a ir entre 0 y 1(excluyente) ;
     */

    // console.log(Math.random())


    /* generar numeros aleatorios entre 2 valores especificos */

    // function numeroAleatorioEntre(min, max){
    //     return Math.floor(Math.random()*(max -min) + min);
    // }


    // let min = 5; 
    // let max = 150;

    // let numeroAleatorio2 = numeroAleatorioEntre(min, max);

    // console.log(`numero aleatorio entre ${min} y ${max}: ${numeroAleatorio2}`);


    /* juego de tirar dados */


//    function enteroAleatorioEntre(min, max){
//        min = Math.ceil(min);
//     max= Math.floor(max);

//      return Math.floor(Math.random()*(max-min +1) + min);
//     }



    // /* funcion lanzar dados */

    // function lanzarDados(){
    //     return enteroAleatorioEntre(1,6);
    // }

    // console.log(`resultado de lanzar dados: ${lanzarDados()}`)


    /**contraseñas aleatorias */

    // function enteroAleatorioEntre(min, max){
    //     min = Math.ceil(min);
    //  max= Math.floor(max);
 
    //   return Math.floor(Math.random()*(max-min +1) + min);
    //  }



    // function generarContrasena(longitud){
    //     let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    //     let contrasena = '';
    //     for(let i =0; i < longitud; i++){
    //         contrasena += caracteres.charAt(enteroAleatorioEntre(0,caracteres.length - 1));
    //     }
    //     return contrasena;
    // }

    // let longitudContrasena = 7;
    // let contrasenaAleatoria = generarContrasena(longitudContrasena);

    // console.log(`contrasena aleatoria generada: ${contrasenaAleatoria}`);

// console.log( new Date());

// let diaMilisegundos = new Date(16222000055415);

// console.log(diaMilisegundos);

// let stringDate = new Date('2024-06-03T12:00:00')
// console.log(stringDate)

// let diaDatosEspecificos = new Date(2024,5,3,12,0,30,0); //año, mes,dia,hora,min,seg,milseg
// console.log(diaDatosEspecificos)

/**
 * metodos de Date
    
    getFullYear() = devuelve solo el año
    getMonth() = devuelve el mes
    getDate() = devuelve dia del mes actual
    getDay() = devuelve el dia de la semana
    getHours() = devuelve la hora
    getMinutes() = devuelve el minutos
    getSeconds() = devuelve los segundos
    getMiliseconds() = milisegundos.
 */

    let date = new Date();

    console.log(date.getFullYear());
    console.log(date.getMonth()); /*no trabaja del 1 al 12,si no del  0 a 11 */
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());

let newDate = new Date();

/**
 metodos para establecer partes de las fechas
    setFullYear
    setMonth
    setDate
*/

    newDate.setFullYear(2025);
    newDate.setMonth(11);
    newDate.setDate(25)

console.log(newDate);

/*
METODOS DE CONVERSION A STRING

    toString
*/

console.log(date.toString())
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

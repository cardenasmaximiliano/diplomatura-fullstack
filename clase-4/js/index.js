/**
 * funciones en js: un bloque de codigo para realizar una tarea especifica
 * reciben entradas llamadas parametros
 * podemos reutilizarlo
 * nos sirve para modularizar nuestro codigo
 * es mas facil la mantencion de nuestro codigo. 
 */

/*
funciones nombran acciones = 

DECLARACION
function nombreDeFuncion(parametros1, parametros2){
    //cuerpo de la funcion

    return resultado;
}

nombre de funcion = identificador unico que va a expresar la accion y se escribe con camelcase
parametros = variables locales,son las que van a recibir datos de entrada.
cuerpo de funcion = el bloque de codigo que muestro lo que hace la funcion.

return = el valor de la funcion que devuelve al momento de ejecutarse.
puede o no puede estar. 



EJECUCION

nombreDeFuncion(argumento, argumento);

function saludar(nombre){
    console.log(`hola buen dia ${nombre}`);
}

saludar("Agustina");


*/


// calcularAreaRectangulo(4, 5);
// calcularAreaRectangulo(2,8);

// let base = parseInt(prompt("ingresa base"));
// let altura = parseInt(prompt("ingresa altura"));

// calcularAreaRectangulo(base, altura);

// function calcularAreaRectangulo(base, altura){
//     let areaRectangulo = base * altura;

//     console.log(areaRectangulo);
// }

// function ingresarNombre(){
//     let nombreIngresado = prompt("ingresa tu nombre");
//     console.log("el nombre ingresado es " + nombreIngresado);
// }

// let numero = 0;

// while(numero < 3){
//     ingresarNombre()
//     numero ++
// }

// crear una funcion que se llame esPar . donde tome la funcion
// un argumento.  y que devuelva por console.log si es par true o si no lo es devuelva false.

// %  === 0 

// function esPar() {
//     let numero = prompt("Por favor, ingresa un número:");
//     numero = Number(numero);
//     // Verificar si el valor ingresado es un número
//     if (isNaN(numero)) {
//         alert("Lo que ingresaste no es un número válido.");
//     } else {
//         // Verificar si el número es par o impar
//         if (numero % 2 === 0) {
//             alert(`El número ${numero} es par.`);
//         } else {
//             alert(`El número ${numero} es impar.`);
//         }
//     }
//   }

//   esPar();

// function esPar (numero) {
//     if (numero % 2 === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// esPar(2);
// esPar(3);

// function esPar(numero) {
    
//     if (numero % 2 === 0) {
    
//         console.log(`${numero} es par`);
// }
//     else {
//         console.log(`${numero} es impar`);
//     }}
// esPar(5);

// function esPar(){
//     let numeroIngresado=parseInt(prompt("Ingresa un numero"))
//     if(!isNaN){
//         console.log("Ingresa un numero valido")
//         }
//     if(numeroIngresado%2===0){
// console.log(`El numero ${numeroIngresado} es par`)
// }
// else if(!numeroIngresado%2===0){
//     console.log(`El numero ${numeroIngresado} no es par`)
// }

// }

//  esPar();

 //imprimir numeros impares de 1 al 20

 // el bucle es por conteo
 //  % !== 0


// function imprimirImpares(){
//     for(let i = 1; i <=20; i++){
//         if(i % 2 !== 0){
//             console.log( i +"" + "es numero impar")
//         }
//     }
// }
// imprimirImpares();

// function esImpar(numero) {
//     if (numero % 2 != 0) {
//         return true;
//     }else{
    //     return false;

//}
// }

// for (let i = 0; i < 20; i++) {
//     if (esImpar(i)) console.log(`El numero ${i} es IMPAR`);
// }

// function sumar (a, b){
    
//     return a + b;  
// }

// let resultado = sumar(5,3);
// console.log(resultado)

//FUNCION ANONIMA

// const SUMAR = function(a,b){
//     return a + b; 
// }

// let resultado = SUMAR(3,6);
// console.log(resultado)


//funcion flecha => 

    // const nombreFuncion = (argumentos) => expression; 

   // const nombrefuncion =() =>{

//  
//    } 

const calcularRectangulo1 =(longitud, ancho) =>longitud * ancho;

const area = calcularRectangulo1(5,3);
console.log(area);






// function nombreFuncion(){


//     return
// }
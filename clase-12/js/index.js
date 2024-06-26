/**
    sugar syntax

    una caracteristica que se encuentra en caulquier lenguaje de programacion, no añade funcionalidades,
    si no que lo que hace es crear un codigo mas facil de leer y escribir. 
    presenta forma compacta de expresar contrucciones de codigo. 
    */

    //template literals => el remplazo de la concatenacion, llevando el codigo a una manera mas sencilla de leer.

//     let name = "julian";

//     console.log("hola soy " + name + " tengo 20 años ");

//     console.log(`hola soy ${name} y tengo 20 años`);

// //condicionales

// let edad = 18;

// if(edad >= 18){
//     console.log("la persona es mayo")
// }else{
//     console.log("la persona es menor")
// }

//operador ternario o operador condicional
/*
es un operador que utilizamos para evaluar una condicion de manera mas compacta. 

por que se le dice ternario?
toma 3 operandor

condicion ? valor si es verdadero : valor si falso

*/
// asignar valor en basado en condicion

// edad >= 18 ? console.log("es mayor") : console.log("es menor");

// //selecciona un valor por defecto

// let nombreUsuario = null;

// let nombre = nombreUsuario ? nombreUsuario : "invitado";
// console.log(nombre);

// // operador ternario en linea de return

// function obtenerDescueto(edad){
//     return (edad < 18) ? 0.1: 0.2;
// }

// console.log(obtenerDescueto(15));
// console.log(obtenerDescueto(30));

//operador de corto circuito and &&  / or ||

/*
    evaluan expresiones logicas y tomamos decisiones basadas en ellas. 
    son operadores de corto circuito porque en algunas circunstancias, no evaluan
    todas las partes de una expresion.

*/

// operador logico and &&

/*
 lo podemos usar como una forma reducida de un condicional, porque no solo evalua ambas condiciones
 si son verdaderas, si no que nos puede retornar un valor especifico, "valor de corto circuito".
*/ 

// const estaLogueado = true;

//  let usuario;

//  if (estaLogueado){
//      usuario = {name: "elian", edad: 25}
//  }

//  console.log(usuario);

// const usuari1 = estaLogueado && {nombre:"elian", edad:25};
// console.log(usuario)

//codigo de bienvenida

// const usuario ={
//     siEstaLogueado: true,
//     siEsAdmin: true,
//     nombre: "elian"
// }

// if(usuario.siEstaLogueado){
//     console.log(`bienvenido ${usuario.nombre}`);
//     if(usuario.siEsAdmin){
//         console.log('tiene acceso')

//     }
// }

// usuario.siEstaLogueado && console.log(`bienvenido ${usuario.nombre}`);
// usuario.siEstaLogueado && usuario.siEsAdmin && console.log("tiene acceso");


//operador logico or
/*
si el primer operando es verdadero se ejecuta la expresion sin necesidad de que se evalue la segunda.

si el primer operando es falso, se evalua y retorna el segundo operando.

*/ 

// let usuario ={
//     nombre: null
// }

// let usuarioActivo;

// if(usuario.nombre){
//     usuarioActivo = usuario.nombre;
// }else{
//     usuarioActivo = "invitado";
// }

// console.log(usuarioActivo)

// const usuarioActivo = usuario.nombre || "invitado";
// console.log(usuarioActivo)

// let nombre = prompt("ingresa tu nombre");
// console.log( nombre || "invitado");

//construimos una configuracion de aplicacion.

// const configuracionUsuario ={
//     tema: null,
//     lenguaje: "ingles"
// }

// const configuracionPorDefecto ={
//     tema: "oscuro",
//     lenguaje:"español"
// }

// const configuracionFinal ={
//     tema: configuracionUsuario.tema || configuracionPorDefecto.tema,
//     lenguaje: configuracionUsuario.lenguaje || configuracionPorDefecto.lenguaje
// }

// console.log(configuracionFinal);

//operador nullish coalescing => operacion de fusion nula,  ??

/*
operador or = retorna el primer operando si este es verdadero, false, 0, " ", null, undefined, NaN, devuelve falso.
operador Nullish = retorna el primer operando si este no es null, o undefined. 
*/



/*
    const resultado = valorizquierda ?? valorPredeterminado.

*/

// const PREFERENCIAS_USUARIOS ={
//     colorFondo: null,
//     tamañoLetras: 14,
//     tema: "claro"
// }

// const COLOR_FONDO = preferenciasUsuario.colorFondo ?? 'blanco';
// const TAMAÑO_LETRAS = preferenciasUsuario.tamañoLetras ?? 16;
// const TEMA = preferenciasUsuario.tema ?? 'oscuro';

// console.log(`el color de fondo es ${COLOR_FONDO}`)
// console.log(`el tamaño de letra es ${TAMAÑO_LETRAS}`)
// console.log(`el tema es ${TEMA}`)


//Destructuracion o destructuring

/*
    caracteristica moderna y con bastante poder, que nos permite descomponer objetos y arrays, 
    en variables mas pequeñas.


*/

// const PERSONA ={
//     nombre:"walter",
//     edad: 27,
//     ciudad: "santa rosa"
// }

// let {nombre, edad} = PERSONA;

// console.log(nombre);
// console.log(edad);

// const PERRO ={
//     duenio: "marce",
//     raza: "caniche",
//     edad: 5,
//     direccion:{
//         calle: "valencia",
//         numero: 1234,
//         ciudad: "mar de ajo"
//     }
// }

// let {duenio,raza, edad:pedro, direccion:{calle, numero, ciudad}} = PERRO;

// console.log(duenio);
// console.log(raza);
// console.log(calle);
// console.log(pedro);

//destructuring arrays

// const numeros = [1,2,3,4,5,6,];

// const [indiceCero, indiceUno, indiceDos,indice] =numeros;

// console.log(indiceCero)

const PRODUCTOS =[
    {id: 1, nombre: 'camisa', precio: 2000},
    {id: 2, nombre: 'pantalon', precio: 2500},
    {id: 3, nombre: 'buzo', precio: 3000},
]

PRODUCTOS.forEach(({nombre, precio})=>{
    console.log(`${nombre}: ${precio}`)

})
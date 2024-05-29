/**
 * objetos: son colecciones de datos o funcionalidades representados como propiedades y metodos.
 * Es fundamental para almacenar y manipular datos.
    
    propiedades: claves y valores que almacenan datos. 

    metodos: son funciones que estan asociadas a objetos y pueden operar sobre propiedades.

 * 
 */

/***pepito***/

// let nombre = "pepito";
// let apellido = "juanCarlo";
// let edad= 28;

/**
 *  en sass maps  
 * $colores:{
 *      rojo: red,
 *      azul: blue,
 * }
 * 
 * map-get($colores, rojo)
 * 
 * $funtesTamanio ={
 *    s: 18px,
 *    m: 24px
 * } 
 * 
 */

// let datosPepito = {
//     /***aca dentro se declaran propiedades */
//     nombre:"pepito",
//     apellido: "juanCarlo",
//     edad: 28
// }

// console.log(datosPepito);
// console.log(datosPepito.nombre);
// console.log(datosPepito["apellido"]);
// console.log(datosPepito.edad);

// datosPepito.nombre = "pepita";

// console.log(datosPepito);



/** funciones constructoras
 * 
 * palabra reservada function
 * el nombre de la function tiene que teneer la primera letra en Mayuscula
 * se ponen parentesis() y dentro se pasan parametros
 *  **/
 


// function DatosPersonas(nombre, apellido,edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.presentar = function(){
//             console.log("hola, soy "+ this.nombre+ " "+ this.apellido+ " y tengo " + this.edad);
//         }
// };

// let persona1 = new DatosPersonas("juan","carlos",30);
// let persona2 = new DatosPersonas("Eduardo","Diaz", 24);

// console.log(persona1.nombre)
// persona1.presentar();

// const FINAL = 1.3

// function Productos(id,marca,tipo, precio){
//     this.id = id;
//     this.marca = marca;
//     this.tipo = tipo;
//     this.precio = precio;
//     this.precioVenta = function(){
//         let precioFinal = this.precio * FINAL
        
//         console.log("el producto "+ this.tipo + " "+this.marca + " cuesta " + precioFinal)
//     }

// }

// let producto1 = new Productos(1, "marolio", "yerba", 1500);
// let producto2 = new Productos(2, "cañuelas", "aceite", 1200);
// producto1.precioVenta()
// producto2.precioVenta();


// operador in me dice si alguna clave existe dentro de un objeto

let persona = {
    nombre:"paulina",
    edad: 25,
    apellido: "barcos"
}

// console.log("nombre" in persona)
// console.log("apellido" in persona);

//bucle for... in 
//se utiliza para iterar sobre las propiedades enumerables de un objeto. 

/*** for(variable in objeto){
 *      ///se ejecuta el codigo
 * 
 * } */

// for(let propiedad in persona){
//     console.log(propiedad + ":" + persona[propiedad])
// }

//clases en objetos


    class DatosPersona{
        constructor(nombre, edad){
            this.nombre = nombre
            this.edad = edad
        }


        saludar(){
            console.log(`hola, soy ${this.nombre}, y tengo ${this.edad}`)
        }
    }

    const persona1 = new DatosPersona("luis",24);
    persona1.saludar();


    
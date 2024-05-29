function calcularArea(radio){

    return Math.Pi * radio * radio;

}

//funciones que retornan funciones

// function mayorQue(x){

//     return (num) => num > x ;

// }

// let mayorQueDiez = mayorQue(10);

// // let mayorQueVeinte = mayorQue(20);

// console.log(mayorQueDiez(12))


//sumas y restas

// function asignarOperacion(operacion){
//     if(operacion === "suma"){
//         return function(numero1, numero2){
//             return numero1 + numero2;
//         }
//     }else if(operacion === "resta"){
//         return (numero1, numero2) => numero1 - numero2;
//     }
// }

// let sumar = asignarOperacion("suma");
// let resta = asignarOperacion("resta");

// console.log(sumar(4,8))
// console.log(resta(8,3));

//funciones pasadas por parametros

//funcion que tome 2 numeros y una funcion que tome la accion 

// function operar(a, b, operacion){
//     return operacion(a, b);
// }

// //funciones especificas

// function suma(a,b){
//     return a + b;
// }

// function resta(a,b){
//     return a - b; 
// }
// function multiplicar(a,b){
//     return a*b
// }


// console.log(operar(5,8,suma));
// console.log(operar(2,3,multiplicar));


//metodos de iteracion (ARRAYS 2.0)

//forEach => se utiliza para iterar sobre un elemento array y ejecuta una funcion proporcionada para cada elemento.

/**
 *  const Letras = ["a", "b", "c"];
 * 
 * letras.forEach(function(elemento,indice, array){
 * 
 *      codigo a ejecutar
 * })
 */

// const LETRAS =  ["a", "b", "c"];

// for(let index = 0; index < LETRAS.length; index++){
//     const ELEMENTOS = LETRAS[index];
//     console.log(ELEMENTOS);
// }

// LETRAS.forEach(function(item){
//     console.log(item);
// });

// LETRAS.forEach(item => console.log(item));

//array de personas

// const ESTUDIANTES =[
//     {
//         nombre:"Juan",
//         edad: 20,
//     },
//     {
//         nombre:"alondra",
//         edad: 19,
//     },
//     {
//         nombre:"fermin",
//         edad: 25,
//     },
//     {
//         nombre:"valentin",
//         edad: 27,
//     }
// ];


// function pasarDatosEstudiantes(estudiante){
//     console.log(`el alumno/a ${estudiante.nombre} tiene ${estudiante.edad} de edad`);
// }

// ESTUDIANTES.forEach(pasarDatosEstudiantes); 

// const ESTUDIANTES =[
//          {
//              nombre:"Juan",
//              nota: 10,
//          },
//          {
//              nombre:"alondra",
//              nota: 9,
//          },
//          {
//              nombre:"fermin",
//              nota: 5,
//          },
//         {
//             nombre:"valentin",
//             nota: 7,
//          }
//          ];

// let suma = 0; 

// ESTUDIANTES.forEach(function(estudiante){
//     suma += estudiante.nota;
// });


// let promedio = suma / ESTUDIANTES.length;

// console.log(promedio);

//FIND => nos sirve para encotrar el primer elemento en un array que cumpla con la condicion dada por la funcion.

//  const ESTUDIANTES =[
//      {
//          nombre:"Juan",
//          edad: 20,
//      },
//      {
//          nombre:"alondra",
//          edad: 19,
//      },
//      {
//          nombre:"fermin",
//          edad: 7,
//      },
//      {
//          nombre:"valentin",
//          edad: 8,
//      }
//  ];

// const USUARIO_MAYOR_EDAD = ESTUDIANTES.find(function(usuario){
//     return usuario.edad > 18;
// })

// console.log(USUARIO_MAYOR_EDAD);

//FILTER = se utiliza para crear un nuevo array, filtra elementos basandose en una condicion y devuelve un nuevo array


//  const ESTUDIANTES =[
//           {
//               nombre:"Juan",
//               nota: 4,
//           },
//           {
//               nombre:"alondra",
//               nota: 9,
//           },
//           {
//               nombre:"fermin",
//               nota: 5,
//           },
//          {
//              nombre:"valentin",
//              nota: 7,
//           }
//           ];

// let alumnosAprobados = ESTUDIANTES.filter(function(alumno){
//     return alumno.nota >= 7;
// })

// if(alumnosAprobados.length === 0){
//     console.log("no hay aprobados")
// } else {
//     let suma = 0;


// alumnosAprobados.forEach(function(alumno){
//     console.log(`alumno aprobado ${alumno.nombre} con la nota ${alumno.nota} `)
//     suma += alumno.nota;
// });

// let promedio = suma / alumnosAprobados.length;

// console.log(`el promedio de notas es ${promedio}`)
// }

//SOME => verifica si almenos 1 elemento en el array cumple con una condicion. 

// const NUMEROS = [1,2,3,4,5,6,7,8];

// const numeroMayorA10 = NUMEROS.some(function(numero){
//     return numero > 7;
// })

// console.log(numeroMayorA10);


// MAPS = es un metodo que copia un array y genero uno nuevo

// const PRODUCTOS = [
//     {
//         nombre:"mother", 
//         precio: 15000
//     },
//     {
//         nombre:"mother", 
//         precio: 20000
//     },
//     {
//         nombre:"mother", 
//         precio: 22000,
//     }
// ]

// const AUMENTO = 0.1;

// const PRECIO_NUEVO = PRODUCTOS.map(function(producto){
//     return{
//         nombre:producto.nombre,
//         precio:producto.precio * (1 + AUMENTO)
//     }
// })

// console.log(PRECIO_NUEVO);


//reduce =>  metodo para reducir arrays a un solo valor donde se aplica una funcion acumuladora.


//carrito de compras
const PRODUCTOS = [
    {
        nombre:"mother", 
        precio: 15000
    },
    {
        nombre:"mother", 
        precio: 20000
    },
    {
        nombre:"mother", 
        precio: 22000,
    }
]

const PRECIO_TOTAL = PRODUCTOS.reduce(function(acumulador, producto){
    return acumulador + producto.precio
},0);

console.log(`el precio total de mis productos es ${PRECIO_TOTAL}}`);
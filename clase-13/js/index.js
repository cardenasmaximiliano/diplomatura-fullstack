//operador spread permite expandir elementos de un iterable(array o string). se representa con ...

//copiamos un array
// let array1 = [1, 2, 3, 4];
// let array2 = [...array1]

// console.log(array2)

// //concatenamos un array
// let array3 = [1,2,3,4];
// let array4 =[5,6,7,8];

// // let array5 = [...array3, ...array4];

// let concatArray =  array3.concat(array4);
// console.log(concatArray)
// // console.log(array5)

// //pasar un elemento array por argumento 

// console.log(Math.max(...array4));

// //añadir elementos en array

// let nuevoArray = [...array4,10, 2, "string"];

// console.log(nuevoArray) 

// ///objetos 

// let objetoOriginal = {
//     a: 1,
//     b: 2
// }

// let nuevoObjeto = {
//     ...objetoOriginal,
//     c:"alondra"
// }

// console.log(nuevoObjeto)

// console.log(objetoOriginal === nuevoObjeto)

// let tercerObjeto = {
//     ...objetoOriginal,
//     ...nuevoObjeto
// }

// console.log(tercerObjeto)

let persona = {
    nombre: "juan",
    edad: 30,
    direccion:{
        ciudad: "mar del plata",
        cp: 7600
    }
};

//copio y modifico
let modificoPersona ={
    ...persona,
    direccion:{
        ...persona.direccion,
        ciudad:"balcarce"
    }
}

console.log(modificoPersona)

//clonar y modificar array

let usuarios = [
    {id:1, nombre:"alondra"},
    {id:2, nombre:"valentin"},
    {id:3, nombre:"juan"},
   
]

//map = 
let actualizarUsuarios = 
usuarios.map(usuario => usuario.id === 2 ?{...usuario, nombre:"leslyer"} : usuario);

console.log(actualizarUsuarios)

//rest parameters, o parametros rest => nos permite representar un numero indefinido de argumentos 
// en un array. Es util cuando una funcion necesita aceptar cantidades variables de argumentos. 
/*
    function nombreDeFuncion(...parametros){
        se ejecuta el codigo 
    }

*/

function calculadora(operacion, ...numeros){
    switch(operacion){
        case "suma":
            return numeros.reduce((acc, curr) => acc + curr, 0);
        case "resta":
            return numeros.reduce((acc, curr) => acc - curr);
        case "multiplicacion":
            return numeros.reduce((acc, curr) => acc * curr, 1);
        case "division":
            return numeros.reduce((acc, curr) => acc / curr);
    }
}

console.log(calculadora("suma", 5,7,8,10,14,1))
console.log(calculadora("resta",10,5,2))
console.log(calculadora("multiplicacion",2,4,2))

//en el contexto de funciones, acc => acumulador , 
//curr, current VALUE => el valor actual del elemento que se esta procesando en el array.
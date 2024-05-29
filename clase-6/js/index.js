/*
UN ARRAY ES UNA ESTRUCTURA DE DATOS, QUE NOS PERMITE ALMACENAR MULTIPLES VALORES EN UNA VARIABLES.
ALMACENA = NUMEROS, STIRNGS, BOLEANOS, OBJETOS.
VAN A TENER LA CARACTERISTICA DE: estar ordenaditos y tener algo llamado indice, que es la manera
como vamos a obtener el valor guardado.

Los arrays inician en UNA POSICION   0

*/

//alt + 91 = corchetes
// let numeros = [1,2,3,4,5]; //array vacio []
// let strings = ["paula","federico","marcelo"]; 
// let boolenos = [true,false,true,false];
// let mixtos = [1,"paula",true];

// console.log(numeros);
// console.log(strings[]);
//array de objetos

// let obj= [
//     {
//         nombre: "paula",
//         edad: 25
//     },
//     {
//         nombre: "marcelo",
//         edad: 22
//     },
//     {
//         nombre: "enzo",
//         edad: 21
//     },
// ]

// console.log(obj[1]);

//recorrer los arrays 

// let strings = ["paula","federico","marcelo"]; 

// for(let i = 0; i < 4; i++){
//     console.log(strings[i]);
// }

//metodos => nos facilitan el trabajo con los arrays. 

//metodos de modificacion
//metodos de acceso o busqueda
//metodos de iteracion



//metodos de modificacion

// -push: agrega uno o mas elementos al final del array

// let array = [1,2,3];

// array.push(5,"pepito");

// console.log(array);

// -pop: elimina el ultimo dato del array.

// array.pop(); //lo que este en parentesis representa al indice que se quiere eliminar o agregar en el array
// console.log(array);

// -shift = elimina el primer dato del array

// array.shift()
// console.log(array);

// -unshift = agerga uno o mas elementos al inicio del array

// array.unshift("pepito","mandarina","paris");
// console.log(array);

//splice() = cabiar el contenido de un array, eliminandolo reemplazandolo, o agregando elementos en el lugar.

//array.splice(2,2,"barcelona"); //selecciona el indice, selecciona cantidad de elementos,muestra el valor reemplazado
//console.log(array);



//sort => ordenar los elmeentos del array y nos da un array ordenado.

// let arrayNum = ["pepito","maxi","fran","alo"];

//nosotros quisieras ordenar olementos de manera decreciente o creciente
/*
se comparan 2 datos dentro del array,de manera inicial, principalmente inidice 0 y 1; 
y se van ordenando en base a las funciones de resta entre ellos 

a -b = devuelve un valor negativo si A es menor que b, lo que coloca a A antes que b (creciente)
b - a = devulve un positivo si A es mayor a B, lo que coloca a A despues de B (decreciente);
a -b = devuelve 0,  quiere decir que A y b son iguales, por ende ocupan el mismo lugar. 

*/

// arrayNum.sort();
// console.log(arrayNum);

// reverse = invertir el arraySeleccionado

// arrayNum.reverse();
// console.log(arrayNum);

//metodos de acceso o busqueda

//concat = agarra 2 arrays y los concatenacion. (los fusiona)

// let array1 = [1,2,8,10];
// let array2 = [3,4];

// let nuevoArray = array1.concat(array2);

// nuevoArray.push(5,6);

// console.log(nuevoArray);


// let marceArray = [10, 8, 15,7,1];
// marceArray.sort((a,b) => b - a);

// console.log(marceArray);


//slice = devuelve una copia del array, donde nosotros indicamos el largo de inicio y final

// let arraySlice = nuevoArray.slice(3,8);
// console.log(arraySlice);

//indexOf = me devuelve un indice en caso de que la busqueda sea correcta, si no existe el elemento
// me va a devolver -1
// let nombres = ["marcelo","pedro","albert","federico"];

// let nomIndex = nombres.indexOf("pepito");

// console.log(nomIndex);


//lastIndexof() = devolver el ultimo indice en el que se pueda encontrar el elemento

let apellidos = ["CARLO","Martinez","Farias","zair","Martinez","zair"];

let resultadoApellido = apellidos.lastIndexOf("zair");

console.log(resultadoApellido);

//includes() = nos dice si un array posee un elemento o no. Se maneja con booleanos TRUE o FALSO

let includeApe = apellidos.includes("cardenas");

console.log(includeApe);





//join = me devuelve todos los datos separados por elemento que nosotros elijamos.

let arrayString= arraySlice.join("-");
console.log(arrayString);

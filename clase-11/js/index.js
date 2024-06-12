/*
storage = mecanismo de almacenamiento proporcionado por el navegador. 
Para almacenar inforamcion de manera local de las aplicaciones. 
ejemplos: logueo en cuentas de mail, redes sociales. Ecommerce

2 tipos:

localStorage  = almacenamos los datos de manera indefinida. Se van almacenar aun cerrando el navegador.
SessionStorage = almacena los datos, hasta que el usuario cierra el navegador, despues se eliminan. 


cookies= es un fragmento de datos que un servidor web envia al navegador de un usuario, 
y que el navegador almacena.
funcion principal de la cookie, es recordar informacion sobre el usuario. 

localStorage vs cookies:

-persistencia = localStorage persiste, cookies tienen fecha de caducidad.
-tamaño = localStorage posee mas tamaño de almacenamiento que una cookie.
-(CLAVE SABER ESTO) Accebilidad = las cookies
 pueden ser accedidas por el servidor y el cliente, y localStorage por el cliente.
-seguridad = las cookies son mas seguras por sus protocolos, y localStorage al no enviarse al servidor. 


como funcionan los metodos de Storage?

        --- vamos a necesitar siempre, que se guarde una clave y un valor 

    metodos de Storage:

    - setItem = guardar un par clave - valor en el almacenamiento
    - getItem = recuperamos el valor de la clave especifica.
    -removeItem = elmina el par clave-valor 
    -clear = elmina todos los datos clave-valor
*/

//setItem 
// localStorage.setItem ('nombre', 'Marcelo');
// localStorage.setItem ('nombre1', 'maxi');
// localStorage.setItem ('edad', '30');
// localStorage.setItem ('perro', 'schanauzer');


// sessionStorage.setItem('color', 'rojo');

//getItem
// let nombre = localStorage.getItem('nombre');

// console.log(nombre);

//removeItem

//localStorage.removeItem('nombre1');

//clear
// localStorage.clear();

// key = devuelve el nombre de la clave en una posicion especifica de almacenamiento



// let key0 = localStorage.key(2);

// console.log(key0);

//nosotros podemos recorrer los datos almacenados en el storage. 

// for(let i =0; i <localStorage.length; i++){
//     let clave = localStorage.key(i);
//     let valor = localStorage.getItem(clave);

//     console.log(`clave ${clave}, valor: ${valor}`);
// }

/**
 * ejemplo login
 */


// function login(){

//     const USUARIO = document.getElementById('usuario').value;
//     const PASSWORD = document.getElementById('password').value;

//     if(USUARIO && PASSWORD){

//         localStorage.setItem('usuario',USUARIO);
//         localStorage.setItem('password',PASSWORD);

//         //se usa para establecer url entre las paginas de nuestro sitio.
//         //tambien nos permite establecer union con urls externas.
//         window.location.href = '../pages/inicioSession.html';

//     }else{
//         alert('ingrese nombre y apellido')
//     }

// }

// const reciboUsuario = localStorage.getItem('usuario');
// document.getElementById('bienvenidos').textContent = `bienvenido ${reciboUsuario}`;


/*
    JSON => JAVASCRIPT OBEJECT NOTATION, es un formato de intercambio de datos. 
    facil de leer, es independiente. 

    nos sirve para = trabajar con objetos, y guardar arrays.
    transferir datos entre un servidor y un cliente. 

*/

let persona = {nombre:'juan',edad:25,ciudad:"mar del plata"};

localStorage.setItem('persona', persona);

//stringify => es una funcion que permite convertir objetos a cadena de json. 

let jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);

localStorage.setItem('persona1',jsonPersona);


//si queremos recuperar un JSON del localstorage, nosotros debemos utilizar el metodo parse()

let personaParse = JSON.parse(jsonPersona);
console.log(personaParse)
/*
ajax = asynchronous Javascript and XML, javascript asincronico.
es una texnica que se utiliza para crear aplicacion interactivas.
Permite que se actualice de forma asincronica el sitio.
Puede cambiar datos con el el servidor sin necesidad de hacer refrescar toda la pagina.

se compone de 4 componentes principales:

1- javascript como lenguaje.
2- XMLHttpRequest => lo que proporciona la funcionalidad para hacer las solicitudes http hacia el servidor
de manera asincrona. 
3- Datos en formato Json => JSON.
4- Callback  => funciones que se ejecutan una vez que recibimos las respuestas del servidor. 



API => INTERFAZ DE PROGRAMACION DE APLICACIONES, conjunto funciones y procedimientos, que sirven o se usan para diseñar
e integrar alguna informacion en diferentes aplicaciones.

Las apis nos van a permitir a nosotros comunicar varias aplicaciones entre si. 

las podemos consumir de diferentes maneras, 

XMLHttpRequest
FETCH

*/
/*XMLHttpRequest 

1- creabamos un objeto XMLHttprequest
2- Configurar una solicitud, era hacia a la api.
3- Decidir lo que se debia hacer con la respuesta cuando se recibe
4- enviar la solicitud.
*/


// const url = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// document.getElementById("cargarDatos").addEventListener('click',function(){
    
    //crear un objeto xml
    // const xhr = new XMLHttpRequest();

    //configurar la solicitud a la api.

    // xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

    //definir lo que se debe hacer cuando se recibe la respuesta.

    /*
    LA CONEXION CON LA API, se hace cuando se genera el meto open, esto lo que hace es
    iniciar una nueva solicitud http.

    /* metodos comunes
        GET: Va a pedir informacion al servidor.
        POST: va a enviar la informacion a un servidor.
        PUT: actualiza la informacion de un servidor.
        DELETE: elimina la informacion de un servidor.
    */
    

    /**
     * cuando hacemos una peticion, se nos devuelve un codigo de respuesta, este codigo de respuesta
     * nos nuestra la informacion del estado de solicitud http.
     * 
     * EXISTEN 2 OBJETOS: 
     * 
     * this.readyState => que esta indica el estado de solicitud, y puede varios valores: 
     * 
     * 0 (unsent)=> nos dice que la solicitud n ofue iniciada. 
     * 1 (opened) => la conexion con el servidor fue establecida. 
     * 2 (heading_received) => las cabeceras recibieron la respuesta.
     * 3(loading) => se recibe la respuesta, y se descarga los datos que se piden.
     * 4(done)=> la operacion se completo
     * 
     * 
     * this.status => nos indica el codigo de estado HTTP de las respuestas recibidas del servidor.
     *  200 => que esta todo ok, que se completa la conexion
     * 404 => pagina no encontrada.
     * 500 interval server error, hay un error en la solicitud del servidor.
     * 
     *  onreadystatechange => es un obejto que se utiliza para definir una funcion que se ejecutara cada vez
     * que el estado de solicitud cambie.
     */
    
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status ===200){
//             let posts = JSON.parse(xhr.responseText)

//             let contedorPost = document.getElementById('posteo');
//             contedorPost.innerHTML =''

//             posts.forEach(function(post){
//                 let elementoPost = document.createElement('div');
//                 elementoPost.innerHTML = `
//                        <h3>${post.title}</h3>
//                          <p>${post.body}</p>
//                             <p>${post.id}</p>  
//                 `
//                 contedorPost.appendChild(elementoPost)
//             });
//         }
//     }
//     //deberiamos enviar la solicitud

//     xhr.send();
// })


/*
    FETCH => viene en respuesta a lo que era XMLHttpRequest.

*/

// const apiFotos = "https://jsonplaceholder.typicode.com/photos";

// const contenedorFotos = document.getElementById('contenedorFotos');

// fetch(apiFotos)
//     .then(respuesta => respuesta.json())
//     .then((datos)=>{
//         console.log(datos)
//         mostrarFotos(datos)
//     })
//     .catch(error => console.log(error))
    


// function mostrarFotos(datos){
//     datos.forEach(foto =>{
//          const img = document.createElement("img");
//          img.src = foto.url;
//          contenedorFotos.appendChild(img)
//      })
//  }

// const app = document.getElementById('contenedorPokemon');

// let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// fetch(url)
//     .then(respuesta => respuesta.json())
//     .then(data => mostrarPokemon(data))



//     function mostrarPokemon(data){
//         const div = document.createElement("div");
//         div.classList.add("pokemon");
//         div.innnerHTML = `
//             <h2>${data.name}</h2>
//              <img src="${sprites.other['official-artwork'].front_default}" alt="">
//         `
    
//         app.append(div)
 //  }


    // const app = document.getElementById("contendorPokemon");
    // let url = "http://pokeapi.co/api/v2/pokemon/pikachu";
    // fetch (url)
    //     .then(respuesta => respuesta.json())
    //     .then((data) => mostrarPokemon(data))
    //     .catch(error => console.log(error))
    
    //     function mostrarPokemon(data){
    //     const div = document.createElement("div");
    //     div.classList.add("pokemon");
    //     div.innerHTML = `
    //         <h2>${data.name}</h2>
    //         <img src="${data.sprites.other["official-artwork"].front_defaul}" >
    //     `;
    // app.appendChild(div);
    // }

//     const app = document.getElementById('contenedorPokemon');
//     const urlPoke = 'https://pokeapi.co/api/v2/pokemon/pikachu';
//     fetch(urlPoke)
//     .then((respuesta) => respuesta.json())
//     .then((data) => {
//         console.log(data);
//         mostrarPokemon(data);
//         })
//     .catch((error) => console.log(error));
//     const mostrarPokemon = (data) => {
//     const div = document.createElement('div');
//     div.classList.add('pokemon');
//     div.innerHTML = `
//         <h2>${data.name}</h2>
//         <img src="${data.sprites.other['official-artwork'].front_default}"}>
//     `;
//     app.append(div);
// };

/*
async y await => ecma 8 2017

async => es una palabra clave. que define funciones asincronas, cundao definimos async
automaticamente esta funcion devuelve una promessa, independientemente de si se cumple o no.

await => es una plabra clave que se utiliza, para esperar la resolucion de esa promesa dentro de la funcion.
cuando utilizamos await detenemos la ejecucion de la funcion asincrona.



*/

// async function fetchData(){


//     //maneja los errores que pueden llegar a ocurrir dentro del async
//     try{
//         //try => se espera que la promesa se cumpla antes de continuar
//         const api = await fetch("http://ejeploApi.com")
//         //luego va el codigo que se ejecutara despues del llamado a la promesa.

//     }
//     catch(error)



// }

// async function fetchPoke1(){
//     const  pokeApi = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// }

// const fetchPoke2 = async ()=>{
//     const pokeApi =fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// }

const fetchPoke = async ()=>{
    const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await pokeApi.json();
    console.log(pokeApi)
    console.log(data)
}

    fetchPoke();
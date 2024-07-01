/**
 * sincronico = refiere a la ejecucion secuencia de nuestro codigo js.
 * 
 * js, por defecto es sincronico bloqueante y trabaja en un solo hilo (que esto se lo conoce como single-threads)
 
    podemos llevar a Js a un estado de asincronismo que refiere al trabajo en multiples hilos al mismo tiempo.
 */

    // console.log("inicio de operacion")
    // function operacionSincronica(){
    //     for(let i= 0; i< 3; i++){
    //         console.log( (i + 1));
    //     }
    // }
    // operacionSincronica()
    // console.log("fin de programa")

    /*
    javacript nos permite generar asincronia en nuestro proyecto a traves de algunas funciones.

    setTimeOut => funcion que se utiliza para programar ejecuciones de alguna funcion. 
    Y esta se va a ejecutar en un cierto periodo de tiempo. 

    setTimeout(funcion, tiempoEnMilisegundo de cuanto quiero que se ejecute)
    
    console.log("inicio de programa")
    */

    // console.log("inicio de programa")
    // setTimeout(function(){
    //     console.log("la operacion asincronica finalizo")
    // }, 3000)
    // console.log("fin del programa")


    //estructuras y mecanismos
    /*
    callbacks => son funciones que se pasan como argumentos en otras funciones y se ejecutan despues
    de que la operacion principal haya terminado
    
    */

    // setTimeout(()=>{
    //     console.log("tiempo 1");
    //     setTimeout(()=>{
    //         console.log("tiempo 2")
    //         setTimeout(() => {
    //             console.log("tiempo3 ")
    //         },3000);
    //     },2000)
    // },1000)

    /*
    momentos en lo que se usa:

    solicitud HTTP = cuando llamos a Apis, es crucial no bloquear el hilo principal mientras esperamos
    respuestas del servidor.

    operaciones de entrada y salida => lectura de archivos o base datos.

    timers => operaciones, que se ejecutan despues de un determinado tiempo (setTimeout, setInterval)
    
    
    */

    // function cambiarContenido(){
    //     document.getElementById("elemento").innerHTML="soy programador frontEnd"
    // }
    
    // setTimeout(cambiarContenido,4000);

    // function cambiarContenido2(){
    //     document.getElementById("elemento").innerHTML = "soy maquetador web"
    // }
    // setTimeout(cambiarContenido2,2000);


    // let mensaje = "maximiliano";

    // let elemento = document.getElementById("elemento");
    // let indice = 0;

    // function mostrarLetra(){
    //     elemento.textContent += mensaje [indice];
    //     indice++
    
    //     if( indice < mensaje.length){
    //         setTimeout(mostrarLetra,1000)
    //     }
    // }

    // setTimeout(mostrarLetra,1000)


    /*
    for ( let letra of "hola mundo"){
    setTimeout(()=>{
        console.log(letra),2000)}
        }

    */

        /*
        Event loop => es el sistema que coordina la ejecucion de funciones, maneja operaciones
        asincronas y decide que operacion debe ejecutarse a continuacion en las pilas. 
        
        
        */

/*
setInterval => es una funcion de js, que nos permite ejecutar funciones de manera repetitiva.
Con un intervalo fijo de tiempo por cada ejecucion. 
Nos sirve para realizar tareas que sean periodicas.

setInterval(callback, delay ms, [argumentos de manera opcional])

*/

// function decirHola(){
//     console.log("hola")
// }

// let intervalId = setInterval(decirHola, 2000)


/*
clearInterval => funcion que nos sirve para detener la ejecucion de un intervalo que fue establecido previamente.

cuando se utiliza un setInterval, se detiene con este. 

*/

// setTimeout(()=>{
//     clearInterval(intervalId)
//     console.log("intervalo se freno")
// },10000)

// function horario(){
//     const ELEMENTO_RELOJ = document.getElementById("reloj");
//     const ahora = new Date();

//     const HORA= ahora.getHours().toString().padStart(2, '0');
//     const MINUTOS= ahora.getMinutes().toString().padStart(2, '0');
//     const SEGUNDOS= ahora.getSeconds().toString().padStart(2, '0');

//     ELEMENTO_RELOJ.textContent = `${HORA}:${MINUTOS}:${SEGUNDOS}`
// }
// setInterval(horario,1000)


// horario()

/**cronometro */

// let inicioTiempo;
// let tiempoCero = 0;
// let intervaloTiempo;

// const BOTON_INICIAR = document.getElementById("inicio")
// const BOTON_PAUSA = document.getElementById("pausa")
// const BOTON_REINICIAR = document.getElementById("reinicio")

// //eventos

// BOTON_INICIAR.addEventListener("click",ini);
// BOTON_PAUSA.addEventListener("click",pau);
// BOTON_REINICIAR.addEventListener("click",rein);

// function ini() {
//     inicioTiempo = Date.now() - tiempoCero;
//     intervaloTiempo = setInterval(actulizacionTiempo, 10) //actualiza el tiempo cada 10milisegundos
// }

// function pau(){
//     clearInterval(intervaloTiempo)
// }
// function rein(){
//     clearInterval(intervaloTiempo);
//     tiempoCero = 0;
//     actulizacionTiempo()
// }

// function actulizacionTiempo(){
//     const lapsoTiempo = Date.now() - inicioTiempo;
   
//     console.log(lapsoTiempo);
//     const minutos = Math.floor(lapsoTiempo / (1000*60).toString().padStart(2,'0'))
//     const segundos = Math.floor(lapsoTiempo / (1000*60).toString().padStart(2,'0'))
//     const miliSegundos = Math.floor(lapsoTiempo / (1000*60).toString().padStart(2,'0'))

//     document.getElementById('cronometro').textContent =`${minutos}:${segundos}:${miliSegundos}`;
// }

let inicioTiempo;
let tiempoCero = 0;
let intervaloTiempo;
let tiempoLimite = 0; // Tiempo límite en segundos

const BOTON_INICIAR = document.getElementById("inicio");
const BOTON_PAUSA = document.getElementById("pausa");
const BOTON_REINICIAR = document.getElementById("reinicio");
const INPUT_TIEMPO_LIMITE = document.getElementById("tiempoLimite"); // Input para el tiempo límite

// Eventos

BOTON_INICIAR.addEventListener("click", iniciar);
BOTON_PAUSA.addEventListener("click", pausar);
BOTON_REINICIAR.addEventListener("click", reiniciar);
INPUT_TIEMPO_LIMITE.addEventListener("input", establecerTiempoLimite);

function iniciar() {
  inicioTiempo = Date.now() - tiempoCero;
  intervaloTiempo = setInterval(actualizarTiempo, 10);
  verificarTiempoLimite(); // Inicia la verificación del tiempo límite
}

function pausar() {
  clearInterval(intervaloTiempo);
}

function reiniciar() {
  clearInterval(intervaloTiempo);
  tiempoCero = 0;
  actualizarTiempo();
}

function establecerTiempoLimite() {
  tiempoLimite = parseInt(INPUT_TIEMPO_LIMITE.value) * 1000; // Convierte el valor a segundos
}

function verificarTiempoLimite() {
  if (tiempoLimite > 0) {
    const tiempoRestante = tiempoLimite - (Date.now() - inicioTiempo);
    if (tiempoRestante <= 0) {
      pausar();
      alert("¡El tiempo límite ha expirado!");
    }
  }
  setTimeout(verificarTiempoLimite, 10); // Revisa el tiempo límite cada 10 milisegundos
}

function actualizarTiempo() {
  const tiempoTranscurrido = Date.now() - inicioTiempo;

  const horas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60)).toString().padStart(2, "0");
  const minutos = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000).toString().padStart(2, "0");
  const milisegundos = Math.floor(tiempoTranscurrido % 1000).toString().padStart(3, "0");

  document.getElementById("cronometro").textContent = `${horas}:${minutos}:${segundos}:${milisegundos}`;
}   


/** promesas
 * 
 * es un objeto que representa la finalizacion o fracaso de una operacion asincrona. 
 * es una manera de manejar operaciones, para que sean mas legibles y faciles de manjar. 
 
    las promesas tienen 3 estados: 

    estado de pendiente(pending): es el estado inicial, antes de que se complete la operacion asincrona.
    estado de cumplida (fullfilled): la operacion asincrona se finalizo con exito.
    estado rechazado(rejected): la operacion asicrona fallo.

    una promessa = nos puede devolver 2 estados si se resolvio o si fallo


    let miPromesa = new Promise((revolve, reject)=>{
        //operacion asincrona
        })

 */

        // let miPromesa = new Promise((resolve, reject)=>{
        //     //operacion asincrona

        //     setTimeout(() =>{
        //         let exitoso = true;
        //         if(exitoso){
        //             resolve('genial! datos recibidos')
        //         }else{
        //             reject('hay un error, la solicitud fallo')
        //         }
        //     },2000)

        //     })

        // console.log(miPromesa)

    const solicitarUsuario = (estado) =>{
        return new Promise((resolve, reject) =>{
            if(estado === true){
                resolve("se resolvio")
            } else{
                reject("no se resolvio")
            }
        })
    }
    
    console.log(solicitarUsuario())


    /*
    then y cath = > son metodos que nos sirven para manejar promesas


    then = se utiliza para manejar promesas de exito.
    toma como funcion argumentos, que van a ser ejecutados
    si la promesa es exitosa

    catch => que es lmetodo que se utiliza cunado no se ejecuta
    o hay un error en la proesa. 

    
    
    
    
    */

    let miPromesa = new Promise((resolve, reject)=>{
        //     //operacion asincrona

       setTimeout(() =>{
                 let exitoso = false;
                 if(exitoso){
                     resolve('genial! datos recibidos')
                 }else{
                     reject('hay un error, la solicitud fallo')
                 }
             },2000)
             
             })

             miPromesa.then((mensaje)=>{
                console.log(mensaje)
             }).catch((error) => {
                console.log(error)
             })

           
/*
    eventos: son acciones o sucesos que ocurren en nuestra pagina web.

    los eventos pueden ser: 

    de mouse
    de teclado
    de formularios
    de documentos

    como se maneja un evento: 

    1ª paso es seleccionar un elemento, a traves de metodos como getElement o queryselector 
    2ª agregar la forma de ejecucion del evento.

*/

/** addEventListener, 
 * 
 *    elemento.addEventListener('evento', se ejecuta funcion);
 *     
 *    podemos generar una funcion externa e invocarla dentro del addeventListener  
 *  
 */

// let botonAdd = document.getElementById('botonUno');

// function mensaje(){
//     alert("esta es la primera vez q manejamos eventos")
// }

// botonAdd.addEventListener('click',mensaje);

// botonAdd.addEventListener('click',function(){
//     alert("esta es la primera vez q manejamos eventos")
// });


/**
 *  llamada de evento con la palabra reservado ON.
 *   on para designar un evento. 

    click = mouse
    keydown = teclado
    submit = formulario
 
    elemento.on(pegado al on el evento que se quiere ejecutar)
    */

// let botonAdd = document.getElementById('botonUno');



//     // botonAdd.onclick= function(){
//     //     alert("estamos usando onClick")
//     // }

// function enHTML(){
//     alert("estamos trabajando los eventos de manera antigua")
// }

/** eventos de mouse
 * 
 *  click = ocurre cuando se le da click a un elemento
 *  dblclick = ocurre cuando se le da doble click a un elemento
 *  mousedown= que es cuando se preciona un elemento.
 *  mouseup = ocurre cuando se suelta del mouse un elemento
 *  mouseover = ocurre cuando se pasa el mouse sobre un elemento (como el hover)
 *  mouseout = que ocurre cuando el raton esta por fuera del elemento. 
 */


// let btnDoble = document.getElementById("btnDoble");

// btnDoble.addEventListener("dblclick",function(){
//     alert("se hizo doble click")
// })

// let presionar = document.getElementById("presionar");
// presionar.addEventListener("mousedown",function(){
//     console.log("mousedown")
// })

// presionar.addEventListener("mouseup",function(){
//     console.log("mouseup")});


//     let caja = document.getElementById("caja");
//     caja.addEventListener("mousemove", function(){
//         console.log("pasar el mouse por encima de la caja")
//     })

//     caja.addEventListener("mouseout", function(){
//         console.log("el mouse esta por fuera")});

// let enlace = document.getElementById("enlace");

// enlace.addEventListener("mouseover", function(){
//     alert("pasamos el mouse por encima")
// });


/*
eventos teclado 

keyup = el evento se dispara cuando se suelta una tecla
keydown = el evento se dispara cuando se aprieta una tecla
 ! keypress = se dispara cuando se presiona y libera una tecla, y 
devuelve un valor de caracter. (este evento ya no es utilizado)
¡
*/

// let inputDown = document.getElementById("inputKeydown");

// inputDown.addEventListener("keydown", function(){
//     console.log("la tecla esta apretada")
// })
// inputDown.addEventListener("keyup", function(){
//     console.log("la tecla se solto")
// })

/*
detectamos tecla especifica

*/


// let input = document.getElementById('inputKey');
// let mensaje = document.getElementById("mensaje");

// input.addEventListener("keydown", function(evento){
//     if(evento.key === "enter"){
//         evento.preventDefault();
//         mensaje.textContent = 'presionaste la tecla'
//     } else {
//         mensaje.textContent = '';
//     }
// });

// let input = document.getElementById('inputKey');
// let mensaje = document.getElementById('mensaje');
// input.addEventListener('keydown', function(evento){
//     if(evento.key === "m"){
//         evento.preventDefault();
//         console.log("presiono la tecla m");
//     } else {
//         console.log("No es la tecla solicitada");
//     }
// })


/*
    formularios

    submit => se dispara cuando se envia el formulario
    reset = se dispara cuando se reestablece un formulario
    focus => se dispara cuando el elemento esta en foco
    blur => se dispara cuando el elemento esta desenfocado
    change => se dispara cuando el valor de un elemento ha sido 
    cambiado y se pierde el foco

    input => se dispara cada vez que el valor de un elemento cambia
*/

    // document.getElementById("submitFormulario").addEventListener('submit', function(evento){
    //     // evento.preventDefault();//evita el envio de formulario
    //     alert("formulario enviado")
    // })

    // document.getElementById("resetFormulario").addEventListener('reset',function(){
    //     alert('formulario reseteado')
    // });

    // let inputFocus = document.getElementById("inputFocus");

    // inputFocus.addEventListener('focus', function(){
    //     console.log("el input esta enfocado")
    // });

    // inputFocus.addEventListener('blur', function(){
    //     console.log("el input esta desenfocado")
    // });

    // let input = document.getElementById("inputChange");

    // input.addEventListener('change',function(){
    //     console.log('el valor del input cambio a :' + this.value);
    // })

    let input = document.getElementById("inputEvento");
    
    input.addEventListener('input', function(){
        console.log("elvalor actual del input es :" + this.value);
    })
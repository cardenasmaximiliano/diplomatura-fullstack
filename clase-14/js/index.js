//  const boton = document.getElementById("boton");

// boton.addEventListener("click", ()=>{
//    Swal.fire({
//     title: "hola comision",
//     text: "esto es un mensaje",
//     icon: "success",
//     imageUrl: "https://plus.unsplash.com/premium_photo-1677178629331-140f46fad545?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     imageWidth: 400,
//     imageHeight: 200,
//     confirmButtonText:"realizar compra",
//     background: "bisque",
//     backdrop: "#b7050b"
//    })
// })

// Swal.fire({
//     template: "#my-template"
//   });

const boton = document.getElementById("boton");

let carrito =  ["arroz","fideos", "yerba"];
console.log(carrito)
boton.addEventListener("click", () =>{
    Swal.fire({
        Title: "¿desea eliminar un producto?",
        text: "desea eliminar el producto",
        icon: "warning",
        cofirmButtonText:"aceptar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result) =>{
        if(result.isConfirmed){
            carrito = carrito.filter(producto => producto !== "fideos");
            console.log(carrito);
            Swal.fire({
                title:"producto eliminado",
                icon:"success",
                confirButtonText:"aceptar"
            })
        }
    })
})


let botonLogin = document.getElementById("boton-login");

const USUARIO = "administrador1";
const PASSWORD = "12345";

botonLogin.addEventListener("click", ()=>{
    Swal.fire({
        title: "iniciar Session",
        html:`
            <input type="text" id="usuario" class="swal2-input" placeholder="ingresa usuario">
            <input type="text" id="password" class="swal2-input" placeholder="ingresa password">
        `,
        confirButtonText: "enviar",
        showCancelButton:true,
        cancelButtonText:"cancelar"

    }).then((result) =>{
        const USUARIO_SW = document.getElementById("usuario").value;
        const PASSWORD_SW = document.getElementById("password").value;
        //
        if(USUARIO_SW === USUARIO && PASSWORD_SW === PASSWORD){
            window.location.href = "ingreso.html";
        }
    } )
})



let botonTosty = document.getElementById("botonTosty");

botonTosty.addEventListener("click", () =>{
    Toastify({
        text:"PRODUCTO AGREGADO",
        duration: 1000,
        position:"left",
        gravity: "bottom",
        avatar: "https://img.freepik.com/psd-gratis/nube-png-aislada-fondo-transparente_191095-18048.jpg?w=826&t=st=1719403288~exp=1719403888~hmac=ff358e3a01272681ba96c96990f2ab92e8afb961f6ed705ea6b4e304abedad40",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast();


})

const DateTime = luxon.DateTime;

const fechaHoraActual = DateTime.now();

console.log(fechaHoraActual.toString());

const horaEspecifica = DateTime.local(2023,8,21,13,0);

console.log(horaEspecifica.toString());



//anime.js
const box = document.querySelector(".box");

box.addEventListener("click", ()=>{

    anime({
        targets: '.box',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 // All properties except 'scale' inherit 250ms delay
    })
})


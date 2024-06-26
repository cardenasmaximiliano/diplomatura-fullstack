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
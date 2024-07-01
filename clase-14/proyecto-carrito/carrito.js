//array de objetos


const baseDeDatos = [

    {
        id: 1,
        nombre:'memoria ram',
        precio: 1000,
        imagen: 'imagen.jpg'
    },
    {
        id: 2,
        nombre:'mother',
        precio: 2000,
        imagen: 'imagen.jpg'
    },
    {
        id: 3,
        nombre:'teclado',
        precio: 3000,
        imagen: 'imagen.jpg'
    }

]

let carrito = [];

const DOMitem = document.getElementById('items');
const DOMcarrito = document.getElementById('carrito');
const DOMtotal = document.getElementById('total');
const DOMbotonvaciar= document.getElementById('botonvaciar')

//funciones

function renderizarProductos(){
    baseDeDatos.forEach((info) =>{
        const html = `
           <div class="card" style="width: 18rem;">
        <img src="${info.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${info.nombre}</h5>
        <p class="card-text">$: ${info.precio}</p>
        <button class="btn btn-primary" marcador="${info.id}">comprar</button>
  </div>
</div>  
        `;
        DOMitem.innerHTML += html;
    })
    document.querySelectorAll('.btn .btn-primary').forEach((boton)=>{
        boton.addEventListener('click', agregarProductoCarrito)
    })

}

//agregar producto al carrito

function agregarProductoCarrito(evento){
    carrito.push(evento.target.getAttribute('marcador'))

    console.log(carrito)
//
renderizarCarrito();
//local storage
localStorage.setItem('carrito', JSON.stringify(carrito));
//trabajr con sweetalert
    Swal.fire({
        title:"agregado a carrito",
        text:"el producto fue sumando a su pedido",
        icon:"success",
        confirmButtonText:"aceptar"
    })

}

function renderizarCarrito(){
    DOMcarrito. innerHTML = '';
    carrito.forEach((id)=>{
        const producto = baseDeDatos.find((info) => info.id === parseInt(id))
        const html = `
                    <li>
                        ${producto.nombre} - ${producto.precio}
                    </li>

        `
        DOMcarrito.innerHTML += html;
    })
    const total = carrito.reduce((total,id) =>{
        const producto = baseDeDatos.find((info) => info === parseInt(id))
        return total + producto.precio;
    },0)
        DOMtotal.textContent = total.toFixed(2)
    }

    renderizarProductos()

    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito') || [])
        renderizarCarrito()
    }



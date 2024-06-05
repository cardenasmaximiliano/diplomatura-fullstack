// import{} from "ruta"

/*
document = es un objeto que nos proporciona una interfaz para interactuar
con elementos y la estructura del documento(HTML).
Podemos acceder, modificar, manipular elementos de html. 
    como accedemos?

    id: getElementById() => es un metodo que acompaña al objeto document. Y esta reservado
    unicamente para llamar selectores id.

    class= getElementByClassName() querramos recuperar una coleccion de elementos.  

    etiqueta = getElementByTagName, va a tomar a todas las etiquetas.

    QUERYSELECTOR = 

    querySelector = nos permite seleccionar nodos con la sitaxis de CSS

    querySelectorAll ==> nos trae todo pero todo los elementos

    */



// let titulo = document.getElementById('titulo');

// console.log(titulo)

// let claseParrafo = document.getElementsByClassName('parrafo');

// console.log(claseParrafo);

// let li = document.getElementsByTagName('li');
// console.log(li);

// let queryP = document.querySelector('.parrafo');
// console.log(queryP);

// let queryPAll= document.querySelectorAll('.parrafo');
// console.log(queryPAll);


// /**
    //  HTMLCollection = coleccion viva de elementos DOM.
    //  Trabaja dinamicamente, se va a actualizar añadiendo o quitando elementos.

    // nodeList = es una coleccion de nodos, elementos, atributos o texto.
    // querySelector = 


//     let titulo = document.getElementById('titulo');

//     /*
//     InnerText = es una propiedad, que nos permite accesder al texto visible dentro
//     de un elemento, y este omite cualquier contenido de HTML.
    
//     */

//     titulo.innerText = "cambiamos el titulo del H1";

//     let pau = document.getElementById('pau');

//     pau.innerText = "julian";

    /*
    innerHTML = se utiliza para obtener o crear contenido HTML, dentro de un elemento.
    InnerHTML incluye cualquier etiqueta de HTML. 

    
    */

//     let cardContenedor = document.getElementById('cardContenedor');
//     console.log(cardContenedor);
//     cardContenedor.innerHTML = `
//                                 <div>
//                                 <img src="" alt="">
//                                     <div>
//                                         <h2>card producto</h2>
//                                         <p>info de producto</p>
//                                     </div>
//                                 </div>
//                                 `;

// console.log(cardContenedor);

/*
    createElement => podemos nosotros desde js crear un nuevo elemento HTML en el dom.

   appendChild => es un metodo que utilizamos para gregar un nuevo nodo,
    como hijo de otro nodo existe. 

    className ==> esl propiedad que se utiliza para crear una clase con la cual
    podemos trabajar desde css

    */

// let sectionVacia = document.getElementById('sectionVacia');

// let lista = document.createElement('ul');
// lista.className = "listaJs"
// lista.innerHTML = `
//                     <li>elemento de lista</li>
//                     `;

// sectionVacia.appendChild(lista);

/*
    CLassList => esto es un objeto de js. nos proporciona interfaz
    para acceder y manipular clases de un elemento. 

    classList.add => añadir uno o mas clases al elemento.
    classList.remove => elimina uno o mas elementos
    Toggle => altera la precencia de una clase o elemento. 

    classList.contain => me devuelve boolean si estque una clase esta o no.
*/

// let miElemento = document.getElementById('miElemento');

// // miElemento.classList.add("nuevaClase");

// miElemento.classList.remove("nuevaClase");

// miElemento.classList.toggle("nuevaClase");


// /*
//     setAttribute => metodo que se utiliza para establecer o cambiar
//     valores de un atributo en HTML.


// */
// const body = document.getElementById('body');

// const img = document.createElement('img');

// img.setAttribute('src', 
// 'https://images.unsplash.com/photo-1716724854567-9ec995836d19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

// body.appendChild(img);

/** productos
 * 
 * objeto
 * 
 * array
 * 
 * funciones para crear cada card en el dom 
 * 
 */

class Producto{
    constructor(nombre,descripcion,precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

//array

const PRODUCTS = [
    new Producto("producto1","descripcion producto","24"),
    new Producto("producto2","descripcion producto 2","30"),
    new Producto("producto3","descripcion producto 3","54"),
    new Producto("marolio","yerba piola","1540")
];

//ELEMENTO CONTENEDOR

const CONTENEDOR_PRODUCTOS = document.getElementById('productosContainer');

//funcion crear una card y darle la info

function agregarTarjetasProducto(productos){
    productos.forEach(producto =>{
        const card = document.createElement('div');
        card.innerHTML = `
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p>precio:${producto.precio} </p>
        `;
    
    CONTENEDOR_PRODUCTOS.appendChild(card);
    })
}

agregarTarjetasProducto(PRODUCTS);
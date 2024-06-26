const BOTON_MODO_OSCURO = document.getElementById("boton-modo-oscuro");
const BODY = document.body;

BOTON_MODO_OSCURO.addEventListener("click", ()=>{
     BODY.classList.toggle('modo-oscuro')
})

/*carrousel*/

const CAROUSEL_ENTRADA = document.querySelector(".carousel-entrada");
const CAROUSEL_ITEM = document.querySelectorAll(".carousel-item");
const CAROUSEL_PREV = document.getElementById("carousel-prev");
const CAROUSEL_NEXT = document.getElementById("carousel-next");

let contador = 0;

console.log(CAROUSEL_ITEM)
CAROUSEL_PREV.addEventListener("click", ()=>{
    contador--;
    if(contador < 0){
        contador = CAROUSEL_ITEM.length - 1;
    }
    carouselActualizacion();

})

CAROUSEL_NEXT.addEventListener("click", ()=>{
    contador++;
    if(contador >= CAROUSEL_ITEM.length){
        contador = 0;
    }
    carouselActualizacion();
    
});

function carouselActualizacion(){
    CAROUSEL_ITEM.forEach((item, index)=>{
        item.classList.remove('active');
        if(index === contador){
            item.classList.add('active');
        }
    });
}

carouselActualizacion();
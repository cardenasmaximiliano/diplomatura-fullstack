//calcular cuotas.

//3 variables  1-monto total 2-cuotas 3-pagomensual


//en caso de que usen este ejemplo sumen: 
//tasa Anual. 
//los intereses


// let montoTotal = 1300;
// let cantidadCuotas = 12; 
// let pagoMensual= calcularPagoEnCuantas(montoTotal, cantidadCuotas);

// function calcularPagoEnCuantas(montoTotal, cantidadCuotas){

//     if(cantidadCuotas <= 0){
//         return "el numero cuotas debe ser mayor a 0"
//     }

//     let pagoMensual = montoTotal /cantidadCuotas;

//     return pagoMensual;
// }
//parseInt siempre devuelve numero entero
//parseFloat siempre devuelve numero flotante.

//toFixed () metodo que me deja elegir la cantidad de numeros que quiero que se muestren
//despues de la coma
//console.log(`el pago mensual es: ${parseFloat(pagoMensual.toFixed(2))}`);

// 12.3333333333333

//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

// 4- precio inicial, impuestos, descuentos, precioFinal


// function calcularPrecioFinal(precio, impuesto, descuento){
//     let precioConImpuesto = precio + (precio * impuesto / 100);
//     console.log(precioConImpuesto);
//     let precioFinal = precioConImpuesto - (precioConImpuesto * descuento /100);
//     return precioFinal; 
// }

// let precioInicial= 120;
// let porcentajeDescuento = 5;
// let porcentajeImpuesto = 21;

// let precioFinal= calcularPrecioFinal(precioInicial,porcentajeImpuesto,porcentajeDescuento);

// console.log(`el precio final es :${precioFinal.toFixed(2)}`)

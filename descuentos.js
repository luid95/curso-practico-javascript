const precioOriginal = 120;
const descuento = 18;

const porcentajeConDescuento  = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajeConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
});

//Descuento con funciones
function precioConDescuento(precio, descuento){
    const porcentajeConDescuento  = 100 - descuento;

    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}
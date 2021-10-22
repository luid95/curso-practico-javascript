const list1 = [
    100,
    200,
    300,
    500
];

let sumalista =0;

for(let i=0; i< list1.length; i++){
    sumalista += list1[i];
    console.log(list1[i]);
}

console.log('Suma total de la lista ' + sumalista);

let promedio = sumalista / list1.length;
console.log('El promedio de ' + promedio);

function calcularMediaAritmetica(lista){
    let sumalista =0;

    for(let i=0; i< lista.length; i++){
        sumalista += lista[i];
    }

    //verificar el metodo reduce para sumar los elementos de mi lista
    /*const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            
            return valorAcumulado + nuevoElemento;
        }
    );*/

    const promedio = sumalista / lista.length;

    return promedio;
}
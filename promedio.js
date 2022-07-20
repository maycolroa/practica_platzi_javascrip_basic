//promedio  
function calcular_media(lista){
    let suma_lista = 0;
    for (let i = 0; i < lista.length; i++){
    suma_lista = suma_lista + lista[i];
}
const promedio_lista = suma_lista / lista.length;
    return promedio_lista;
}
//mediana
const lista_1 = [
    100,
    200,
    500,
    400000000,
]

const mitad_lista_1 = parseInt(lista_1.length / 2);

function si_es_par(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (si_es_par(lista_1.length)){

    const elemento_1 = lista_1[mitad_lista_1 - 1];
    const elemento_2 = lista_1[mitad_lista_1];

    const promedio_elemento_1_2 = calcular_media([
        elemento_1,
        elemento_2
    ]);
    mediana = promedio_elemento_1_2;
} else {
    mediana = lista_1[mitad_lista_1];
}
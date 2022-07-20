//const precio_original = 100;
//const descuento = 15;

function calcular_precio_descuento (precio, descuento){
    const porcentaje_precio_descuento = 100 - descuento;
    const precio_descuento = (precio * porcentaje_precio_descuento) / 100;
    return precio_descuento;
}

function button_price_discount(){
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;

    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;

    const precio_con_descuento = calcular_precio_descuento(price_value, discount_value);

    const resul_precio = document.getElementById("resul_precio");
    resul_precio.innerText = "el precio con descuento son : $" + precio_con_descuento;
}

//console.log({
   // precio_original,
    //descuento,
    //porcentaje_precio_descuento,
    //precio_descuento,
//});
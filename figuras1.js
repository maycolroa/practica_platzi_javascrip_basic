//codigo de cuadrado
console.group("cuadrado");
//const lado_cuadrado = 5;
//console.log("los lados del cuadrado miden: " + lado_cuadrado + "cm");

function perimetro_cuadrado(lado){
    return lado * 4;
}
//console.log("el perimetro es: " + perimetro_cuadrado + "cm");

function area_cuadrado(lado){
    return lado * lado;  
}

//console.log("area es: " + area_cuadrado + "cm^2, ");
console.groupEnd();
//codigo triangulo

console.group("triangulo");
//const lado_triangulo_1 = 6;
//const lado_triangulo_2 = 6;
//const base_triangulo = 4;
//const altura_triangulo = 5.5;

//console.log("los lados del triangulo miden: " + lado_triangulo_1 + "cm, " + lado_triangulo_2 + "cm, " + base_triangulo + "cm, ");

//console.log("la altura del triangulo mide: " + altura_triangulo + "cm, ");

function perimetro_triangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("el perimetro del triangulo mide: " + perimetro_triangulo + "cm, ");

function area_triangulo(base, altura){
    return (base * altura) / 2;
} 

//console.log("el area del triangulo mide: " + area_triangulo + "cm^2, ");

console.groupEnd();

//codigo circulo

console.group("circulo");

//radio
//const radio_circulo = 4;
//console.log("el radio del circulo mide: " + radio_circulo + "cm, ");

//diametro
function diametro_circulo(radio){
   return radio * 2;
}
//console.log("el diametro del circulo mide: " + diametro_circulo + "cm, ");
//pi
const pi = Math.PI;
console.log("pi mide: " + pi + "cm, ");
//circunferencia
function circunferencia(radio){
    const diametro = diametro_circulo(radio);
    return diametro * pi;
}
//console.log("la circunferencia del circulo mide: " + circunferencia + "cm, ");
//area
function area_circulo(radio){
    return (radio * radio) * pi;
}
//console.log("el area del circulo mide: " + area_circulo + "cm^2, ");
console.groupEnd();
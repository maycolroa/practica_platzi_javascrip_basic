//codigo de cuadrado
console.group("cuadrado");
const lado_cuadrado = 5;
console.log("los lados del cuadrado miden: " + lado_cuadrado + "cm");

const perimetro_cuadrado = lado_cuadrado * 4;
console.log("el perimetro es: " + perimetro_cuadrado + "cm");

const area_cuadrado = lado_cuadrado * lado_cuadrado;
console.log("area es: " + area_cuadrado + "cm^2, ");
console.groupEnd();
//codigo triangulo

console.group("triangulo");
const lado_triangulo_1 = 6;
const lado_triangulo_2 = 6;
const base_triangulo = 4;
const altura_triangulo = 5.5;

console.log("los lados del triangulo miden: " + lado_triangulo_1 + "cm, " + lado_triangulo_2 + "cm, " + base_triangulo + "cm, ");

console.log("la altura del triangulo mide: " + altura_triangulo + "cm, ");

const perimetro_triangulo = lado_triangulo_1 + lado_triangulo_2 + base_triangulo;

console.log("el perimetro del triangulo mide: " + perimetro_triangulo + "cm, ");

const area_triangulo = (base_triangulo * altura_triangulo) / 2; 

console.log("el area del triangulo mide: " + area_triangulo + "cm^2, ");

console.groupEnd();

//codigo circulo

console.group("circulo");

//radio
const radio_circulo = 4;
console.log("el radio del circulo mide: " + radio_circulo + "cm, ");

//diametro
const diametro_circulo = radio_circulo * 2;
console.log("el diametro del circulo mide: " + diametro_circulo + "cm, ");
//pi
const pi = Math.PI;
console.log("pi mide: " + pi + "cm, ");
//circunferencia
const circunferencia = diametro_circulo * pi;
console.log("la circunferencia del circulo mide: " + circunferencia + "cm, ");
//area
const area_circulo = (radio_circulo * radio_circulo) * pi;
console.log("el area del circulo mide: " + area_circulo + "cm^2, ");
console.groupEnd();
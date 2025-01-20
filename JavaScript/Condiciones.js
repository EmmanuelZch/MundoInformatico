let nota = 8;
console.log("He realizado mi examen.");

//Condición

if (nota < 5) {

    calificacion = "Insuficiente";
}
else if (nota === 6) {
    calificacion = "Suficiente";
}
else if (nota < 8) {
    calificacion = "Bien";
}
else if (nota <= 9) {
    calificacion = "Notable";
}
else {

    calificacion = "Sobresaliente";
}

console.log("He obtenido una calificación", calificacion);

//Condicion (si la nota es mayor o igual a 5)


//////////////////////////////////////////////////////////////////////////////////
//Verifica si una persona es mayor de edad (18 años ) o no para acceder a un sitio
//////////////////////////////////////////////////////////////////////////////////
let edad =18;

if (edad >= 18){
    console.log("Puedes pasar al sitio");
}
else {
    console.log("No puedes pasar al sitio");
}



//////////////////////////////////////////////////////////////////////////////////
//Estás desarrollando una aplicación de comercio electrónico y necesitas calcular el
//  costo de envío basado en el monto total de la compra. Si el monto total es mayor
//  o igual a $50, el envío es gratuito. Si el monto total es menor a $50, el costo
//  de envío es de $5.
//////////////////////////////////////////////////////////////////////////////////

let monto = 50;

if (monto <=50){
    console.log("EL envío es gratuito");
}
else {
    console.log("El costo del envío es de $5");
}

//////////////////////////////////////////////////////////////////////////////////
//Escribe un programa que determine si un número es par o impar.
//////////////////////////////////////////////////////////////////////////////////

let num = 16;

if (num % 2 === 0){
    console.log("El numero es par")
}
else{
    console.log("El numero es impar")
}

//////////////////////////////////////////////////////////////////////////////////
//Escribe un programa que determine si un número es positivo, negativo o cero.
//////////////////////////////////////////////////////////////////////////////////

let numero = 0;

if (numero > 0){
    console.log("El número es positivo")
}
else if (numero < 0 ){
    console.log("El número es negativo")
}
else{
    console.log("EL número es cero")
}


///////////////////////////////////////////////////////////////////////////////////
//Estás desarrollando una aplicación de gestión de inventario para una tienda.
//  Necesitas verificar si un producto está en stock, si está agotado o si la 
// cantidad es baja y necesita reabastecimiento.
////////////////////////////////////////////////////////////////////////////////////

let stock = 0;

if (stock === 0){
    console.log("El producto está agotado")
}
else if(stock > 0 && stock <= 5) {
    console.log("El producto necesita reabastecimiento")
}

else{
    console.log("El producto está en stock")
}


///////////////////////////////////////////////////////////////////////////////////
//Estás desarrollando una aplicación de control de acceso para un edificio. Necesitas
//  verificar si una persona puede entrar al edificio basado en su edad y si tiene
//   una tarjeta de acceso válida.
////////////////////////////////////////////////////////////////////////////////////

let age = 18;
let target = true;

if (age >= 8 && age < 65 && target) {
    console.log("Acceso permitido: Puedes ingresar al edificio")
}
else if(age >= 18 && !target) {
    console.log("Acceso denegado: Necesitas una tarjeta de acceso")
}

else {
    console.log("Acceso denegado: Edad insuficiente")
}



let IngresoAnual = 100000;

if (IngresoAnual <= 10000){
    console.log("El impuesto a pagar es del 10%");
} else if (IngresoAnual > 10000 && IngresoAnual <=20000){
    console.log("El impuesto a pagar es del 15%");
} else {
    console.log("El impuesto a pagar es del 20%");
}




let puntuacion = 80;

if (puntuacion >= 90){
    console.log("La calificación es A");
} else if (puntuacion >= 80 && puntuacion < 90){
    console.log("La calificación es B");
} else if (puntuacion >= 70 && puntuacion < 80){
    console.log("La calificación es C");
} else if (puntuacion >= 60 && puntuacion < 70){
    console.log("La calificación es D");
} else {
    console.log("La calificación es F");
}


let temperatura = 25;

if(temperatura < 0){
    console.log("El sistema está en modo de calefacción");
} else if (temperatura >= 0 && temperatura <= 20){
    console.log("El sistema está en modo de espera");
} else {
    console.log("EL sistema está en modo de enfriamiento")
}





























let horas = 3
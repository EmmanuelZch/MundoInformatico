let password = prompt("Ingrese su contraseña:");

while (password !== "1234") {
    alert("Contraseña Incorrecta");
    password = prompt("Ingrese su contraseña");
}


//while tiene una inicializacion exterior (una variable) y despues pone que mientras que la variable ocurra se va a repetir

let pi = 0;

//Condicion: Mientras la variable contador sea menor de 5
while (pi < 5) {
    console.log("Valor de pi:", pi);
    pi++ //incrementamos el valor de pi
}

let numSecret = prompt("Para continuar adivine el numero secreto del 1 al 10:");

while(numSecret !== 3) {
    alert("Número incorrecto, intentelo otra vez") 
    numSecret = prompt("Para continuar adivine el numero secreto del 1 al 10:");
}

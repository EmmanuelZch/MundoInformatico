let Nota1 = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (Nota1) {
    case 10:
        Nota1 = "Sobresaliente";
        break;
    case 9:
    case 8:
        Nota1 = "Notable";
        break;
    case 7:
    case 6:
        Nota1 = "Bien";
        break;
    case 5:
        Nota1 = "Insuficiente";
        break;
    case 4:
    case 3:
    case 2:
    case 1:
        Nota1 = "Muy insuficiente";
        break;

    default: Nota1 = "Nota Errónea";
}

console.log("He obtenido una calificación", Nota1)


let experiencia;

do  {
    experiencia = prompt("¿Cuál es tu experiencia en programación? (100%, 75%, 50%, 25%)");

switch (experiencia) {
    case "100%":
        alert("Eres un experto");
        break;
    case "75%":
        alert("Tienes experiencia");
        break;
    case "50%":
        alert("Tienes algo de experiencia");
        break;
    case "25%":
        alert("Tienes poca experiencia");
        break;
default:
    alert("Por favor, ingresa un valor válido");
    experiencia = null
    }
} while (experiencia === null);  
var n;

n=parseFloat(prompt("Ingrese la nota del estudiante"));

if (n>=3) {
    document.write("El estudiante APROBÓ <img src='img/comprobado.png' height = 20px> " );
} else {
    document.write("El estudiante REPROBÓ <img src='img/cruz.png' height = 20px> " );
}
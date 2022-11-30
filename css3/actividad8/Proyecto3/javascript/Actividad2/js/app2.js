//Aplicacion para evaluar si un número está entre 10 y 100 

var n;

//Capturar la entrada
n=parseInt(prompt("Por favor didgitar el número entero :D"))

//Evaluamos el proceso numerico
// Para el Y puede ser and o &
//Para el O puede ser or o ||
if (n>=10 & n<=100) {
    
    document.write("El número " +n+ " está entre 10 y 100 <img src='img/comprobado.png' height = 20px> ");
} else {
    
    document.write("El número " +n+ " NO está entre 10 y 100 <img src='img/cruz.png' height = 20px> ");
}
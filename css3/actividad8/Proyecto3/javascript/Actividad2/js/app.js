//Aplicación para evaluar la fiebre de una persona

var temp;

//capturar los datos de entrada
temp=parseFloat(prompt("Ingrese su temperatura en en °C: "));

//proceso para evaluar la fiebre 


if (temp>= 38) {
    document.write ("La temperatura " +temp+ "°C indica que tiene FIEBRE :( <img src='img/fiebre.png' height = 30px> ");
} else {
    document.write("La temperatura " +temp+ "°C indica que NO tiene fiebre <img src='img/pulgares-para-arriba.png' height = 30px>");
}

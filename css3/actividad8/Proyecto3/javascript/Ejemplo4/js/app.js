//definimos variables
var peso, estatura, imc;

//Capturamos las entradas
peso=parseFloat(prompt("Digite su peso en kg"));
estatura=parseFloat(prompt("Digite su estatura en m"));

//Hacemos el calculo
imc=peso/(estatura*estatura);

//Hacemos el proceso
if (imc<18.5) {
    
    document.write ("Usted tiene un bajo peso   <img src='img/bajo-peso.png' height='50px' width='50px'> <br><br>"); 

    document.write ("<h3> El bajo peso puede tener causas que no se deben a una enfermedad subyacente. Por ejemplo, hacer dieta, el ejercicio, la falta de acceso a la comida, tipo de cuerpo o la mala alimentación en los bebés. <h3>"); 

} else if (imc >= 18.5 && imc<=24.9){
    document.write("Usted tiene un peso normal <img src='img/peso.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> Para su estatura, un peso normal variaría entre a kilogramos. Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad. <h3>"); 

} else if (imc >= 25 && imc<=29.9){
    document.write("Usted tiene Sobrepeso  <img src='img/gordo.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> La obesidad es una enfermedad crónica, producida por el consumo excesivo de grasas, azúcares y carbohidratos, lo que provoca la acumulación de grasa en nuestro cuerpo. Otra causa es la poca o nula actividad física en la vida diaria. <h3>"); 

}   else if (imc >= 30 && imc<=34.9){
    document.write("Usted tiene obesidad I <img src='img/gordo1.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> Podemos hablar de obesidad tipo 1 cuando el índice de masa corporal (IMC) se sitúa entre 30 y 34,9. Esto supone que su proporción de masa corporal respecto a la altura es un 30-35% superior al punto medio. Se trata del grado más bajo de obesidad, pero no eso no significa que esté exento de riesgos <h3>"); 

}    else if (imc >= 35 && imc<=39.9){
    document.write("Usted tiene obesidad II <img src='img/obesidad.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> De acuerdo a un estudio, la obesidad grado 2 no se asocia con un riesgo aumentado de cáncer de próstata en hombres de mediana edad. Sin embargo, se necesitan más investigaciones para saber si la obesidad de grado 2 sí está asociada con enfermedad de alto grado, es decir, con el estadío más avanzado del cáncer. <h3>"); 

}    else if (imc >= 40 && imc<=49.9){
    document.write("Usted tiene obesidad III <img src='img/obesidad2.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> El único tratamiento efectivo a largo plazo para la obesidad mórbida es la cirugía bariátrica. Los sujetos obesos mórbidos tienen una alta incidencia de complicaciones. <h3>"); 

}    else if (imc >= 50){
    document.write("Usted tiene obesidad IV <img src='img/obesidad3.png' height='50px' width='50px'> <br><br>");

    document.write ("<h3> Obesidad grado 4 (obesidad extrema): Si el IMC es igual o mayor a 50. El cuarto grado de obesidad no está incluido en todas las clasificaciones, sino que muchas lo engloban en la obesidad mórbida. <h3>"); 

} else {
    document.write("Escriba los valores numericos esperados <img src='img/tiste.png' height='50px' width='50px'>");
}
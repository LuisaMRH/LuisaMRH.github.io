var v, descuento, total;

v=parseInt(prompt("Ingrese el valor del producto"));

if (v>=50000) {
    
    descuento=v*0.05;
    total=v-descuento;

    document.write("Se obtiene el 5% de descuento que es igual a: $" +descuento+ "<br>" );
    document.write("Usted debe pagar un total de: $" +total+ "<img src='img/comprobado.png' height = 20px>");

} else {
    document.write("No obtiene descuento <img src='img/cruz.png' height = 20px> ");
}
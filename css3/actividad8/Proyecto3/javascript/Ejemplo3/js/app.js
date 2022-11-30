
var op, n1, n2, resultado;

op=parseInt(prompt
    ("Escoja una opción 1. Suma 2. Resta 3. Multiplicación 4. División"));

switch (op) {
    case 1:
        n1=parseInt(prompt("Digite el 1er número"));
        n2=parseInt(prompt("Digite el 2do número"));
        resultado=n1+n2;
        document.write("La suma de " +n1+ " + " +n2+ " = " +resultado );
        break;

    case 2:
        n1=parseInt(prompt("Digite el 1er número"));
        n2=parseInt(prompt("Digite el 2do número"));
        resultado=n1-n2;
        document.write("La resta de " +n1+ " - " +n2+ " = " +resultado );
        break;

    case 3:
        n1=parseInt(prompt("Digite el 1er número"));
        n2=parseInt(prompt("Digite el 2do número"));
        resultado=n1*n2;
        document.write("La multiplicación de " +n1+ " * " +n2+ " = " +resultado );
        break;

    case 4:
        n1=parseFloat(prompt("Digite el 1er número"));
        n2=parseFloat(prompt("Digite el 2do número"));
        resultado=n1/n2;
        document.write("La división de " +n1+ " / " +n2+ " = " +resultado );
        break;

    default:
        document.write("¡Error! Seleccione una opción del menú");
        break;
}
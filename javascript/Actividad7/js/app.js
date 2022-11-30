//funcion sumar
function sumar() {
    var x, y, suma;
   
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
   
    suma=parseInt(x)+parseInt(y);
   
    document.getElementById("resultado_suma").innerHTML = "La suma = "+suma
   }
//funcion restar
   function restar() {
    var x, y, resta;
   
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
   
    resta=parseInt(x)-parseInt(y);
   
    document.getElementById("resultado_resta").innerHTML ="La resta = " +resta
   }
//funcion multiplicar
   function multiplicar() {
    var x, y, multiplicacion;
   
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
   
    multiplicacion=parseInt(x)*parseInt(y);
   
    document.getElementById("resultado_multiplicacion").innerHTML ="La multiplicación = " +multiplicacion
   }
//funcion dividir
   function dividir() {
    var x, y, division;
   
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
   
    division=parseFloat(x)/parseFloat(y);
   
    document.getElementById("resultado_division").innerHTML ="La división = " +division
   }




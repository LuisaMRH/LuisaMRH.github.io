//función que suma 2 números
function sumar() {
 var x, y, suma;

 x=document.getElementById("n1").value;
 y=document.getElementById("n2").value;

 suma=parseInt(x)+parseInt(y);

 document.getElementById("resultado").innerHTML = "La suma es: " +suma
}

//<p style='background-color: #E3B7A0; color:#4C0033 ;font-size:40px;border-radius: 12px;text-align: center;margin-top: 3%;padding:210px; border: 4px solid #000;box-shadow: 0px 5px 0px 5px #4C0033;'>",'La suma es: ' +suma+"</p>")
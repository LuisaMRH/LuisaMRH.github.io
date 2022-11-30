
var a,b;
var i;

a=parseInt(prompt("Ingrese el número inicial"));
b=parseInt(prompt("Ingrese el número final"));

for(i=a; i<=b; i++){
    if (i%2==0) {
        
        document.write(i+"&nbsp;");
    } 
}
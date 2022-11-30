function validaCampos(){
    var formulario;
    formulario=document.formUser;

    if(formulario.user.value==""){
        document.getElementById("validaUser").innerHTML="Escriba su usuario ¡Por favor!";
        formulario.user.focus();
        return false;
    }else{
        document.getElementById("validaUser").innerHTML="";
    }

    if(formulario.email.value==""){
        document.getElementById("validaEmail").innerHTML="Escriba su correo ¡Por favor!";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("validaEmail").innerHTML="";
    }

    if(formulario.password.value==""){
        document.getElementById("validaPassword").innerHTML="Escriba su contraseña ¡Por favor!";
        formulario.password.focus();
        return false;
    }else{
        document.getElementById("validaPassword").innerHTML="";
    }

    if(formulario.passwordC.value==""){
        document.getElementById("validaPasswordC").innerHTML="Confirme su contraseña ¡Por favor!";
        formulario.password.focus();
        return false;
    }else{
        document.getElementById("validaPasswordC").innerHTML="";
    }

    formulario.submit();
}
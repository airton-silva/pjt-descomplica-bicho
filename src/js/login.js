
function logar(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var validInput = validarFormLogin(email, password);

    if (validInput == true) {
        if (email == "admin@admin.com" && password == "admin") {
            window.location.href = "../home/index.html";
            
        }else {
            alert("Usuario ou Senha invalidos")
        }

    }else {
        alert("os campos do formulario são invalidos")
    }

}

function validarFormLogin( email, password) {
    if ( email != "" || password != "") {
        
        if (email <= 3) {
            alert ( "Os campo Email não pode ter menos que 3 caracteres");
        }
        if (password <= 3) {
            alert ( "Os campo Password não pode ter menos que 3 caracteres");
        }else {
            return true;
        }

    }else {
        alert ( "preencha todos os campos");
    }

}
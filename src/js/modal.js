// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function Login() {
    var done=0;
    var usuario = document.getElementsByName('email')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="../home/homeUsuario.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }

function validacao(f) {

  //Verificação de campo vazio 
    if(f.matricula.value == null || f.email.value == null || f.senha.value == null) {    
      alert("Campos inválidos!");
      return false;
    }
    else if(f.nome.value == null || f.nome.value.length < 3){
      alert("Não existe nome com menos de tres letras!");
      return false;
    }
    else if(f.senha.value.length <= 6){
      alert("Senha deve ter pelo menos seis caracteres!");
      return false;
    }
    else{
        alert("Usuario cadastrado com sucesso!");        
    }
}

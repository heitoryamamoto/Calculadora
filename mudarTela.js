
window.addEventListener("keydown", andar)
function andar(teste) {
    var tecla = teste.keyCode
    if (tecla == "13") {
        var usuario = "", senha = ""
        usuario = document.getElementById("usuario1").value

        senha = document.getElementById("senha1").value
        if (usuario == "heitor") {
            usuario = true;
        }
        if (senha == "heitor123") {
            senha = true;
        }
        if (usuario == true && senha == true) {
            window.location.assign("calculadora.html")
        }
        else {
            document.getElementById("modal").style.visibility = 'visible';
        }

    }
}


function perfil(params) {
    window.location.assign("perfil.html")
}
function calculadora(params) {
    var usuario = "", senha = ""

    usuario = document.getElementById("usuario1").value
    senha = document.getElementById("senha1").value
    if (usuario == "heitor") {
        usuario = true;
    }
    if (senha == "heitor123") {
        senha = true;
    }
    if (usuario == true && senha == true) {
        window.location.assign("calculadora.html")
    }
    else {
        document.getElementById("modal").style.visibility = 'visible';
    }

}
function icon(params) {
    window.location.assign("icon.html")
}
function menu(params) {
    window.location.assign("menu.html")
}
function cadastrar(params) {
    window.location.assign("cadastro.html")
}
function menuCadastro(params) {
    var usuario = "", senha = "", email = ""

    email = document.getElementById("email").value
    usuario = document.getElementById("usuario1").value
    senha = document.getElementById("senha1").value
    if (email == "") {
        alert("Preencha o campo acima")
    }
    else if (usuario == "") {
        alert("Preencha o campo acima")
    }
    else if (senha == "") {
        alert("Preencha o campo acima")
    }
    else{
        window.location.assign("menu.html")
    }

}
function fecharModal(params) {
    document.getElementById("modal").style.visibility  = 'hidden';
}

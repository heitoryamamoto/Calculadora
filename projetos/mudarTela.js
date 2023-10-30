

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
        if (senha == "heitor426345") {
            senha = true;
        }
        if (usuario == true && senha == true) {
            window.location.assign("calculadora.html")
        }
        else{
            alert("usuário ou senha estão incorretos")
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
    if (senha == "heitor426345") {
        senha = true;
    }
    if (usuario == true && senha == true) {
        window.location.assign("calculadora.html")
    }
    else {
        alert("usuário ou senha estão incorretos")
    }

}
function icon(params) {
    window.location.assign("icon.html")
}
function menu(params) {
    window.location.assign("menu.html")
}


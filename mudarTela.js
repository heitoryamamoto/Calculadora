
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
    else {
        window.location.assign("menu.html")
    }

}
function fecharModal(params) {
    document.getElementById("modal").style.visibility = 'hidden';
}
function fecharModalNota(params) {
    document.getElementById("modalNota").style.visibility = 'hidden';
}
function fecharModalNotasSalvas(params) {
    document.getElementById("modalNotasSalvas").style.visibility = 'hidden';
}
function abrirModalNotasSalvas(params) {
    document.getElementById("modalNotasSalvas").style.visibility = 'visible';
}
function criarNota(params) {
    document.getElementById("modalNota").style.visibility = 'visible';
}
function salvarNota() {
    var titulo = "";
    var texto = "";
    var botao = "";
    var notasSalvas = "";
    titulo = document.getElementById("inpTituloMensagem").value;
    texto = document.getElementById("areaAnotacao").value;
    botao = document.createElement("button");
    botao.className = "botaoNotasSalvas"
    botao.innerHTML = titulo
    notasSalvas = document.getElementById("notasSalvas");
    notasSalvas.appendChild(botao);
    document.getElementById("titulo").innerHTML = titulo
    document.getElementById("mensagem").innerHTML = texto
    botao.addEventListener("click", function () {
        abrirModalNotasSalvas();
    });
    for (var i = 0; i < 2; i++) {
        document.createElement("div").className = "modal"
    }
    fecharModalNota();
}
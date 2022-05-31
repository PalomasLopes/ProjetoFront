let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let emailOk = false
let motivoOk = false
let assuntoOk = false

function validaEmail() {
    let txtEmail = document.querySelector("#email")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
   } else {
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = "green"
    emailOk = true
   }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#assunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}


function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Mensagem enviada com sucesso!')
    } else {
        alert ('Preencha o campo corretamente antes de enviar')
    }
}
// var nome = "Thais" // variavel de escopo global
// let nome = "Thais" // variavel de escopo local, pode alterar o valor
// const nome = "Thais" variavel de escopo local, não pode alterar o valor

// const perfil = document.getElementById("perfil") -> pega pelo perfil
// const perfil = document.getElementsByClassName("perfil") -> pega pela classe
// const perfil = document.getElementsByName("name") -> pega pelo atributo name
// const perfil = document.getElementByTagName("name") -> pega pela tag
// const perfil = document.querySelector(".perfil")

//JS é Case Sensitive = reconhece letras mauisculas e minusculas para as palavras reservadas


let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let indicacao = document.querySelector("#indicacao")
let nomeOk = false
let emailOk = false
let indicacaoOk = false
let mapa = document.querySelector("#mapa")

function validaNome()
{
    let txtNome =document.querySelector("#txtNome")
    if(nome.value.length < 3)
    {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        nomeOk = false
    }
    else
    {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
        emailOk = false
    }
    else
    {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaEmail2()
{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /* função de validasção de email utilizando expressão regular */

    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.match(regex))
    {
        txtEmail.innerHTML = "E-mail Válido."
        txtEmail.style.color = "green"
        emailOk = true
    }
    else
    {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
        emailOk = false
    }
}

function validaIndicacao()
{
    let txtIndicacao = document.querySelector("#txtIndicacao")
    if(indicacao.value.length > 100)
    {
        txtIndicacao.innerHTML = "O texto ultrapassou o limite permite de 100 caracteres."
        txtIndicacao.style.color = "red"
        indicacaoOk = false
    }
    else
    {
        txtIndicacao.innerHTML = indicacao.value.length + "/100"
        indicacaoOk = true
        if(indicacao.value.length <=100)
        {
            txtIndicacao.style.color = "green"
        }
    }
}

function enviar()
{
    if(nomeOk == true && emailOk == true && indicacaoOk == true)
    {
        alert ("Formulário enviado com sucesso!")
    }
    else
    {
        alert ("Por favor, preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom()
{
    mapa.style.aspectRatio = "16/16"
}

function mapaNormal()
{
    mapa.style.aspectRatio = "16/9"
}

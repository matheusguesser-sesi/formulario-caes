let cpfcadastros = ["14959203034", "12345678910", "10987654321", "32165498780"];


document.getElementById("formu").addEventListener("submit", function(e) {
    e.preventDefault();


let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let telefone = document.getElementById("telefone").value;
let cpf = document.getElementById("cpf").value;
let idade = Number(document.getElementById("idade").value);
let cidade = document.getElementById("cidade").value;
let tipomoradia = document.getElementById("moradia").value;
let possuiquintal = document.getElementById("quintal").value;
let podepetnamorada = document.getElementById("podepet").value;
let temquintalodmora = document.getElementById("temquintal").value;
let petantes = document.getElementById("peta").value;
let horassozinho = Number(document.getElementById("sozinho").value);
let justhorasso = document.getElementById("justhorasso").value;
let motivo = document.getElementById("motivo").value;
let termo = document.getElementById("termo").checked;
let financeiro = document.getElementById("financeiro").value;
let decisaohj = document.getElementById("decisaohj").value;

if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return false
}

if (!email.includes("@")) {
    alert("O email deve conter o caractere '@'.");
     return false
}

if (telefone.length < 8) {
    alert("O telefone deve ter no mínimo 8 dígitos.");
     return false
}

if (cpf === "") {
    alert("O CPF é obrigatório");
     return false
}

if (idade < 18 || isNaN(idade)) {
    alert("Sua idade deve ser maior ou igual a 18 anos");
     return false
}

if (cidade === "") {
    alert("É obrigatório informar a cidade.");
     return false
}

if (tipomoradia === "") {
    alert("É obrigatório informar o tipo de moradia.");
     return false
}

if (possuiquintal === "") {
    alert("É necessário informar se você possui quintal");
     return false
}

if (petantes === "") {
    alert("É necessário informar se você já teve algum pet");
     return false
}

if (isNaN(horassozinho) || horassozinho < 0) {
    alert("Insira um valor numérico válido");
     return false
}

if (motivo.length < 10) {
    alert("O motivo deve ter pelo menos 10 caracteres.");
     return false
}

if (tipomoradia === "apartamento" && podepetnamorada === "") {
    alert("Informe se o local permite animais:");
     return false

}

if (tipomoradia === "casa" && temquintalodmora === "") {
    alert("Informa se o quintal é seguro:");
     return false
}

if (horassozinho > 8) {
    alert("Problema: O animal ficará mais de 8 horas por dia sozinho no dia.");
    if (justhorasso.length < 5) {
        alert("Informe uma justificativa adicional e plausível.");
         return false
    }
}

if (petantes === "nao") {
    alert("Poderá haver acompanhamento inicial por parte da ONG");

}

let motivosgen = ["quero", "porque sim", "quero um cachorro"];
if (motivosgen.includes(motivo)) {
    alert("O motivo é muito genérico");
     return false
}

if (cpfcadastros.includes(cpf)) {
    alert("O CPF já se encontra cadastrado, insira um CPF válido");
     return false
}

if (!termo) {
    alert("Você deve aceitar o termo para poder enviar o formulário");
     return false
}

if (tipomoradia === "apartamento" && possuiquintal === "sim") {
    alert("Não é possível indicar uso de espaço externo sem possuir quintal");
     return false
}

if (financeiro === "nao") {
    alert("Envio do formulário cancelado por falta de condições financeiras");
     return false
}

if (decisaohj === "sim") {
    alert("Reflita antes de adotar.");
     return false
}

alert("Formulário enviado com sucesso!")




});
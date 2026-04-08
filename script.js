const cpfcadastros = ["14959203034", "12345678910", "10987654321", "32165498780"];

const formu = document.getElementById("formu");
const moradia = document.getElementById("moradia");
const sozinho = document.getElementById("sozinho");
const peta = document.getElementById("peta");
const podepet = document.getElementById("podepet");
const quintal = document.getElementById("temquintal");
const mophoras = document.getElementById("mophoras");
const msgerro = document.getElementById("msgerro");
const resultado = document.getElementById("resultado");


sozinho.addEventListener("input", function () {
    if (Number(sozinho.value) > 8) {
        mophoras.style.display = "block";
    } else {
        mophoras.style.display = "none";
    }
})

moradia.addEventListener("change", function () {
    if (moradia.value === "apartamento") {
        podepet.style.display = "block";
        quintal.style.display = "none";
    } else if (moradia.value === "casa") {
        quintal.style.display = "block";
        podepet.style.display = "none";
    } else {
        podepet.style.display = "none";
        quintal.style.display = "none";
    }

});

peta.addEventListener("change", function () {
    if (peta.value === "nao") {
        alert("Você nunca teve pet antes, a ONG poderá realizar um acompanhamento");
    }


});

formu.addEventListener("submit", function (event) {

    event.preventDefault();
    msgerro.innerHTML = "";
    resultado.innerHTML = "";

    let erros = [];




const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const telefone = document.getElementById("telefone").value.trim();
const cpf = document.getElementById("cpf").value.trim().replace(/\D/g, "");
const idade = Number(document.getElementById("idade").value);
const cidade = document.getElementById("cidade").value;
const tipomoradia = document.getElementById("moradia").value;
const possuiquintal = document.getElementById("quintal").value;
const podepetnamorada = document.getElementById("podepet").value;
const temquintalodmora = document.getElementById("temquintal").value;
const petantes = document.getElementById("peta").value;
const horassozinho = Number(document.getElementById("sozinho").value);
const justhorasso = document.getElementById("justhorasso").value.trim();
const motivo = document.getElementById("motivo").value.trim().toLowerCase();
const termo = document.getElementById("termo").checked;
const financeiro = document.getElementById("financeiro").value;
const decisaohj = document.getElementById("decisaohj").value;
const espacoexterno = document.getElementById("espacoexterno").value;


if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
}

if (!email.includes("@")) {
    alert("O email deve conter o caractere '@'.");
}

const telefonenum = telefone.replace(/\D/g, "");
if (telefonenum.length < 8) {
    alert("O telefone deve ter no mínimo 8 dígitos.")
}

if (cpf === "") {
    alert("O CPF é obrigatório");
}

if (idade < 18 || isNaN(idade)) {
    alert("Sua idade deve ser maior ou igual a 18 anos");
}

if (cidade === "") {
    alert("É obrigatório informar a cidade.");
}

if (tipomoradia === "") {
    alert("É obrigatório informar o tipo de moradia.");
}

if (possuiquintal === "") {
    alert("É necessário informar se você possui quintal");
}

if (petantes === "") {
    alert("É necessário informar se você já teve algum pet");
}

if (isNaN(horassozinho) || horassozinho < 0) {
    alert("Insira um valor numérico válido");
}

if (motivo.length < 10) {
    alert("O motivo deve ter pelo menos 10 caracteres.");
}

if (!termo) {
    alert("Você deve aceitar o termo de responsabilidade.");
}

if (idade < 18) {
    alert("Você deve ter mais de 18 anos para adotar um pet.");
}

if (tipomoradia === "apartamento" && podepetnamorada === "") {
    alert("Informe se o local permite animais:");

}

if (tipomoradia === "casa" && temquintalodmora === "") {
    alert("Informa se o quintal é seguro:");
}

if (horassozinho > 8) {
    alert("Problema: O animal ficará mais de 8 horas por dia sozinho no dia.");
    if (justhorasso.length < 5) {
        alert("Informe uma justificativa adicional e plausível.");
    }
}

if (petantes === "nao") {
    alert("Poderá haver acompanhamento inicial por parte da ONG");
}

const motivosgen = ["quero", "porque sim", "quero um cachorro"];
if (motivosgen.includes(motivo)) {
    alert("O motivo é muito genérico");
}

if (cpfcadastros.includes(cpf)) {
    alert("O CPF já se encontra cadastrado, insira um CPF válido");
}

if (!termo) {
    alert("Você deve aceitar o termo para poder enviar o formulário");
}

if (tipomoradia === "apartamento" && possuiquintal === "sim") {
    alert("Não é possível indicar uso de espaço externo sem possuir quintal");
}

if (financeiro === "nao") {
    alert("Envio do formulário cancelado por falta de condições financeiras");
}

if (decisaohj === "sim") {
    alert("Reflita antes de adotar.");
}

if (telefonenum.length < 10 || telefonenum.length > 11) {
    alert("Informe um telefone válido.");
}

if (erros.length > 0) {
    msgerro.innerHTML = "<ul>" + erros.map(erro => `<li>${erro}</li>`).join("") + "</ul>";
    return;
}

resultado.innerHTML = `
    <h2>Formulário enviado!</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>CPF:</strong> ${cpf}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Moradia:</strong> ${tipomoradia}</p>
    <p><strong>Tem quintal na moradia:</strong> ${possuiquintal}</p>
    <p><strong>Já teve pet antes:</strong> ${petantes}</p>
    <p><strong>Horas que fica sozinho:</strong> ${horassozinho}</p>
    <p><strong>Motivo:</strong> ${motivo}</p>

`;

cpfcadastros.push(cpf);
formu.reset();
podepet.style.display = "none";
quintal.style.display = "none";
mophoras.style.display = "none";

});
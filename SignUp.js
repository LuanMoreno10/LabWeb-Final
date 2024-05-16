//função para verificar se a password tem os requisitos necessários
function validarPassword() {
    var password = document.getElementById("password").value;
    var regexNumero = /\d/; // Verifica se há pelo menos um dígito
    var regexMaiuscula = /[A-Z]/; // Verifica as letras maiuscluas
    var regexEspecial = /[!@#$%^&()_+\-=[\]{};':"\\|,.<>/?]]/; // Verifica se há um caracter especial

    //Verifica os critérios estabelecidos:
    if (password.length < 8 || !regexNumero.test(password) || !regexMaiuscula.test(password) || !regexEspecial.teste(password)) {
        alert("A senha deve conter pelo menos 8 caracteres, 1 número, 1 letra maiúscula e 1 caractere especial.");
        return false;
    }

    return true;
}
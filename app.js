//Challenge ONE

let amigos = [];


// Função para adicionar um amigo na lista/array (amigos)
function adicionarAmigo() {
    let amigo = sanitizarEntrada(document.getElementById('amigo').value.trim());

    // validação da entrada do usuário
    if (amigo.trim() !== '') {
        amigos.push(amigo);
        limparCampo();
        exibirTextoNaTela('h2', `Amigo adicionado com sucesso ${amigo}`);
        console.log(amigos);
    } else {
        exibirTextoNaTela('h2', 'Por favor, insira um nome válido');
        limparCampo();

    }
} 
// Função para sanitizar/limpar a entrada do usuário
function sanitizarEntrada(entrada) {
    return entrada.replace(/[^a-zA-Z\s]/g, '');
}

// Função para exibir os informações na tela
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.textContent = texto;
}


// Função para limpar o campo de input
function limparCampo() {
    limpar = document.querySelector('input');
    limpar.value = '';
}


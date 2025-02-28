//Challenge ONE

let amigos = [];


// Função para adicionar um amigo na lista/array (amigos)
// Validando a entrada do usuário, evitando campos vazios sejam adicionados
// E adicionando um nome válido na lista de amigos
function adicionarAmigo() {
    let amigo = sanitizarEntrada(document.getElementById('amigo').value.trim());

    if (amigo.trim() !== '') {
        amigos.push(amigo);
        limparCampo();
        listaAmigos();
        console.log(amigos);
    } else {
        exibirTextoNaTela('h2', 'Por favor, insira um nome válido');
        limparCampo();

    }
} 


// Função para sanitizar/limpar a entrada do usuário
// Evitando caracteres especiais e números
function sanitizarEntrada(entrada) {
    return entrada.replace(/[^a-zA-Z\s]/g, '');
}

// Função para exibir a lista de amigos na tela
// Utilizando o ID listaAmigos do HTML e limpando ele para adicionar os novos amigos
// Ele itera cada elemento na lista de amigos e cria um elemento li no HTML
// Com cada amigo adicionado
function listaAmigos(){
    let amigosLista = document.getElementById('listaAmigos');
    amigosLista.innerHTML = '';
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        amigosLista.appendChild(li);
    });
}

// função para sortear amigo secreto
// Verifica se a lista está vazia, se estiver, ele avisa o usuário
// Depois ele gera um número aleatório para os elementos no array
// Então com o resultado ele seleciona o número sorteado do array 
// E exibe na tela o amigo secreto
function sortearAmigo(){
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'A lista de amigos está vazia';
        return;
    }
    let sorteio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteio];

    document.getElementById('resultado').innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    return amigoSorteado;
}

// Função para exibir os informações na tela
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.textContent = texto;
}


// Função para limpar o campo de input logo após a digitação
function limparCampo() {
    limpar = document.querySelector('input');
    limpar.value = '';
}


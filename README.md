<h1 align="center"> 
  🚀 Desafio ONE - Amigo Secreto
</h1>

<h1 align="center"> 

![screenshot](https://github.com/user-attachments/assets/624665f6-351f-47be-b77f-3114158bb97d)

</h1>
  
## 📖 About
O Projeto amigo secreto é baseado no desafio ONE na qual quem faz parte do programa ONE - Oracle Next Education, tem que fazer para passar adiante no programa.
Esse desafio trabalha com JavaScript e um pouco com HTML, utilizando essas tecnologias eu tenho que usar a logica de programação para 
conseguir resolver o desafio, criando funções para cada parte dele. Objetivo é ele adicionar o amigo digitado no input à array, depois ele pode sortear aleatoriamente um desses amigos, para ser seu amigo secreto.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20FINALIZADO&color=GREEN&style=for-the-badge)

## 🔑 Key-Features
- `adicionarAmigo`: A função adicionar amigo serve para adicionar novas pessoas a lista de amigos, ela também possui validações,
evitando que espaços em branco passem pelo input e acabem sendo adicionado à lista. Uma Mensagem é exibida caso ele digite um nome que não é válido.
- `sanitizarEntrada`: A função sanitizar entrada ela não é necessária no codígo em si, mas para treinar e melhorar o input, eu acabei criando essa função. Ela evita que os caracteres especiais, números, etc. Que estão fora do regex não passem pelo input e nem sejam adicionado a lista. Ela é utilizada diretamente no valor capturado pelo ID amigo em adicionarAmigo.
- `listaAmigos`: A função serve para exibir a lista de amigos na tela, ela limpa a lista antes de ser utilizada e itera cada elemento da lista de amigos para criar um elemento no HTML chamado `<li>`, que faz os amigos adicionados serem mostrados na tela.
- `sortearAmigo`: A função é utilizada para sortear aleatoriamente um número que representa um elemento na lista de amigos. Caso esse número seja 1 o amigo considerado elemento 1 da lista, será aprensentado como o amigo secreto.
- `exibirTextoNaTela`: A função é somente para exibir algumas informações para o usuário utilizando `<h2>` do HTML.
- `limparCampo`: Serve simplesmente para limpar o campo após o usuário digitar seu amigo.

https://github.com/user-attachments/assets/70a6c4ba-b2bd-4509-a713-dd4f58466177

## 🗂️ How To Use 
Você só precisa clonar o repositório e testar, recomendo utilizar VSCODE e a extensão Live Server.
```bash
# Clone this repository
$ git clone https://github.com/Rafael-LynX/Challenge-Amigo-Secreto.git
```
Utilizando no vscode abra o arquivo HTML com Live Server para abrir o site. E comece a testar o desafio amigo secreto.

Se quiser acesse o site: https://rafael-lynx.github.io/Challenge-Amigo-Secreto/

## 🛠️ Technologies Used

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://docs.oracle.com/javase/tutorial/index.html)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## 🏆 Autor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/109623407?s=400&u=19dac11507a1cbd81c5c6ceb1526c24eb6033cce&v=4" width=115><br><sub>Rafael Vieira</sub>](https://github.com/Rafael-LynX) 


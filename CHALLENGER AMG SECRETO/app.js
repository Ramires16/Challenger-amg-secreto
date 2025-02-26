//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let adicao = document.getElementById('amigo');
    let nomeAmigo = adicao.value.trim();

    if (nomeAmigo === "") {
        alert(" Por favor, insira um nome.");
    } else {
        listaDeAmigos.push(nomeAmigo);
        console.log(listaDeAmigos);

        atualizarListaDeAmigos();
        adicao.value = "";
    }

    function atualizarListaDeAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

        listaDeAmigos.forEach((amigo) => { // Percorre o array de amigos
            let li = document.createElement("li"); // Cria um novo elemento <li>
            li.textContent = amigo; // Define o texto do <li> como o nome do amigo
            lista.appendChild(li); // Adiciona o <li> na lista <ul>
        });
    }
}


function sortearAmigo() {
    if(listaDeAmigos.length ===0){
        alert("Adiocione amigos antes de sortear!!!");
        return;
    }
        
    let nomeAleatorio = Math.floor(Math.random() * listaDeAmigos.length);// Gera um índice aleatório entre 0 e o tamanho da lista - 1
    let nomeSorteado = listaDeAmigos[nomeAleatorio];// Obtém o nome sorteado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 O amigo sorteado é: ${nomeSorteado} 🎉`;
}
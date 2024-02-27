document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("proximoPasso").addEventListener("click", function(event) { //botao de proxima etapa


        // infos perfil 1
        var nome = document.getElementById("nome").value;
        // Verificação de nome
        if (nome === "") {
            alert("Por favor, insira seu nome antes de prosseguir.");
            event.preventDefault();
            return;
        }
        // var genero = document.getElementById("genero").value;
        // var dataNascimento = document.getElementById("dataNascimento").value;
        // //verificação de data
        // if (dataNascimento === "") {
        //     alert("Por favor, insira sua data de nascimento antes de prosseguir.");
        //     event.preventDefault();
        //     return;
        // }
        // var localizacao = document.getElementById("localizacao").value;
        // //verificação de nascimento 
        // if (localizacao === "") {
        //     alert("Por favor, insira sua localização antes de prosseguir.");
        //     event.preventDefault();
        //     return;
        // }

        // // Armazena infos 1 no localStorage
        localStorage.setItem("nome", nome);
        // localStorage.setItem("genero", genero);
        // localStorage.setItem("dataNascimento", dataNascimento);
        // localStorage.setItem("localizacao", localizacao);

        // console.log("Valores armazenados no localStorage.");

    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Recupera o nome do localStorage
    var nome = localStorage.getItem("nome");

    // Verifica se o nome foi armazenado no localStorage
    // if (nome) {
    //     // Atualiza o texto dentro do elemento h1
    //     var boasVindasElement = document.getElementById("boas-vindas");
    //     if (boasVindasElement) {
    //         boasVindasElement.textContent = "Prontinho, " + nome;
    //     }
    // }

    var boasVindasElement = document.getElementById("boas-vindas");
    if (boasVindasElement) {
        boasVindasElement.textContent = "Prontinho, " + nome;
    }
});

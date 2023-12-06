document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("proximoPasso2").addEventListener("click", function(event) { //botao de proxima etapa
        // infos perfil 2
        var escolaridade = document.getElementById("escolaridade").value;
        
        var ocupacao = document.getElementById("ocupacao").value;
        var renda = document.getElementById("renda").value;

        // Armazzena infos 2 no localStorage
        localStorage.setItem("escolaridade", escolaridade);
        localStorage.setItem("ocupacao", ocupacao);
        localStorage.setItem("renda", renda);

        console.log("Valores armazenados no localStorage.");
    });

})
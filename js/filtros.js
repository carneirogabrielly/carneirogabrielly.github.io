document.addEventListener("DOMContentLoaded", function() {
    // Cria um objeto para armazenar os valores
    var perfilData = {
        modalidades: [],
        distancia: 10, // Valor padrão inicial
        oportunidades: [],
        areasInteresse: [],
        preco: 0 // Valor padrão inicial para o preço
    };

    // Função para atualizar o valor do raio de distância no span
    function updateRaioDistancia(value) {
        document.getElementById("raioDistancia").textContent = value + " Km";
    }

    // Função para atualizar o valor do preço no span
    function updatePreco(value) {
        document.getElementById("preco").textContent = "R$ " + value.toFixed(2);
    }

    // Adiciona um ouvinte de evento ao input de range para a distância
    document.getElementById("distancia").addEventListener("input", function() {
        perfilData.distancia = this.value;
        updateRaioDistancia(perfilData.distancia);
    });

    // Adiciona um ouvinte de evento ao input de range para o preço
    document.getElementById("faixaPreco").addEventListener("input", function() {
        perfilData.preco = parseFloat(this.value);
        updatePreco(perfilData.preco);
    });

});


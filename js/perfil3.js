document.addEventListener("DOMContentLoaded", function() {
    // Cria um objeto para armazenar os valores
    var perfilData = {
        modalidades: [],
        distancia: 10, // Valor padrão inicial
        oportunidades: [],
        areasInteresse: []
    };

    // Função para atualizar o valor do raio de distância no span
    function updateRaioDistancia(value) {
        document.getElementById("raioDistancia").textContent = value + " Km";
    }

    // Adiciona um ouvinte de evento ao input de range
    document.getElementById("distancia").addEventListener("input", function() {
        perfilData.distancia = this.value;
        updateRaioDistancia(perfilData.distancia);
    });

    // Adiciona ouvintes de eventos para checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var category = this.parentNode.parentNode.parentNode.querySelector('p').textContent.trim();
            var value = this.nextSibling.nodeValue.trim();
            
            if (this.checked) {
                perfilData[category.toLowerCase()].push(value);
            } else {
                perfilData[category.toLowerCase()] = perfilData[category.toLowerCase()].filter(function(item) {
                    return item !== value;
                });
            }

            console.log(perfilData); // Exibe o objeto com os valores atualizados
        });
    });
});

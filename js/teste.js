let coracoes = document.querySelectorAll('.coracao');
indexes = localStorage.getItem('lista_index')
if (indexes !== null){
    var lista_index = indexes
    oportunidadesFavoritas = document.querySelectorAll('.oportunidade-favorita')
    if (oportunidadesFavoritas !== null){
        for (i in indexes){
            oportunidadesFavoritas[i].style.display = 'flex'
        }
    }
}
else{
    var lista_index = []
}



coracoes.forEach(function(coracao) {
    coracao.addEventListener('click', function(event) {
        // Encontre o índice do coração clicado dentro da lista de corações
        let indice = Array.from(coracoes).indexOf(coracao);
        lista_index.push(indice)
        localStorage.setItem('lista_index',lista_index)
    });
});


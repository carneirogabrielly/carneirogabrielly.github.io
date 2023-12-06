document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("meuBotao").addEventListener("click", function() {
    
        inputs = document.querySelectorAll('input') 
        dict = {}
        i = 0
        console.log(inputs.length)
        while(i<inputs.length) {
            dict[inputs[i].id] = inputs[i].value;
            i+=1
        }
        console.log(dict)
    })

})
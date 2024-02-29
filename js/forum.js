function adicionarPergunta() {
    const pergunta = document.getElementById("novaPergunta").value;
    if (pergunta) {
        const novoTweet = document.createElement("div");
        novoTweet.className = "tweet";
        novoTweet.innerHTML = `<span class="username">@usuário:</span> ${pergunta}`;
        document.body.insertBefore(novoTweet, document.querySelector(".tweet"));
        document.getElementById("novaPergunta").value = "";
    }
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
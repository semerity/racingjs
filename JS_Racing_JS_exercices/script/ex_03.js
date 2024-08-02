window.onload = function (){
    const x = document.getElementsByTagName("div")[2];
    x.addEventListener("click",(event) => {
        let text;
        let nom = prompt("What is your name ?");
        if (nom == null || nom == "") {
          text = "You don't have a name ?...";
        } else {
            if (confirm("Are you sure "+ nom +" is your name ?")) {
                text = "Hello " + nom + " !";
                x.innerHTML = text;
                alert(text);
            }
        }
    })
}
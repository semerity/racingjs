window.onload = function (){
    const x = document.getElementsByTagName("body")[0];
    const plus = document.getElementsByTagName("button")[0];
    const moin = document.getElementsByTagName("button")[1];
    const backcol = document.getElementsByTagName("select")[0];
    x.style.fontSize = "16px";
    plus.addEventListener("click", (event) => {
        x.style.fontSize = parseInt(x.style.fontSize) + 1 + "px";
    });
    moin.addEventListener("click", (event) => {
        x.style.fontSize = parseInt(x.style.fontSize) - 1 + "px";
    });
    backcol.addEventListener("change", () => {
        const index = backcol.selectedIndex;
        var value = backcol.options[index].value;
        x.style.backgroundColor = value;
      });
}
window.onload = function (){
    const x = document.getElementsByTagName("div")[2];
    var clickcount = 0;
    x.addEventListener("click",(event) => {
        clickcount++;
        x.innerHTML = clickcount; 
    })
}
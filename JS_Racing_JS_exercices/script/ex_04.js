window.onload = function (){
    const x = document.getElementsByTagName("div")[2];
    var str = [];
    var strlen = 0;
    document.addEventListener("keydown",(event) => {
        const keyname = event.key;
        if (str.length == 42) {
            str = str.slice(1);
            str.push(keyname);
            x.innerHTML = str.toString();
        } else {
            str.push(keyname);
            x.innerHTML = str.toString();
        }
    })
}
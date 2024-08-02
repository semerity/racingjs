window.onload = function (){
    const cube = document.getElementsByTagName("canvas")[0];
    const div = document.getElementsByTagName("div")[2];
    console.log(div);
    const xy = document.getElementsByTagName("div")[3];
    var offsetx = 0;
    var offsety = 0;
    var mousex = 0;
    var mousey = 0;
    var cubex = 0;
    var cubey = 0;
    var pressed = false;
    xy.innerHTML = "New coordinates => {x: " + cubex + ", y: " + cubey + "}";
    cube.style.position = "relative";
    cube.style.left = "0px";
    cube.style.top = "0px";

    document.addEventListener("mousemove",(event)=>{
        offsetx = window.innerWidth / 2;
        offsety = 206;
        mousex = event.pageX - offsetx;
        mousey = event.pageY - offsety;
        if (pressed) {
            cubex = mousex;
            cubey = mousey;
            if (cubex >= 339) {
                cube.style.left="339px";
                cubex = 339;
            } else if (cubex <= -339) {
                cube.style.left="-339px";
                cubex = -339;
            }else{
                // x max:339 min:-339
                cube.style.left = cubex+"px";
            }
            if (cubey >= 28) {
                cube.style.top="28px";
                cubey = 28;
            } else if (cubey <= -22) {
                cube.style.top="-22px";
                cubey = -22;
            }else{
                // y max:28 min:-22
                cube.style.top = cubey +"px";
            }
            xy.innerHTML = "New coordinates => {x: " + cubex + ", y: " + cubey + "}";
        }
    });

    cube.addEventListener("mousedown",()=>{
        pressed = true;
    });

    document.addEventListener("mouseup",()=>{
        pressed = false;
    });
}
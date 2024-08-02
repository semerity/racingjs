window.onload = function (){
    const canvas = document.getElementsByTagName("canvas")[0];
    const pause = document.getElementsByTagName("button")[0];
    const stop = document.getElementsByTagName("button")[1];
    const mute = document.getElementsByTagName("button")[2];
    
    var audio = new Audio('triangle.ogg');
    canvas.addEventListener("click",() =>{
        audio.play();
    });
    pause.addEventListener("click",() =>{
        audio.pause();
        console.log("paused");
    });
    stop.addEventListener("click",() =>{
        audio.pause();
        audio.currentTime = 0;
    });
    mute.addEventListener("click",() =>{
        if (audio.muted) {
            audio.muted = false;
            console.log("unmuted");
        } else {
            audio.muted = true;
            console.log("muted");
        }
    });
    
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";

        ctx.beginPath();
        ctx.moveTo(6,6);
        ctx.lineTo(14,10);
        ctx.lineTo(6,14);
        ctx.fill();
        ctx.closePath();

        // triangle Border ?
        ctx.beginPath();
        ctx.moveTo(4,3);
        ctx.lineTo(17,10);
        ctx.lineTo(4,17);
        ctx.lineTo(4,3);
        ctx.stroke();
        ctx.closePath();

    }
}
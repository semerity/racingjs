function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; SameSite = Strict";
}

function unsetCookie(cname, exdays) {
    const d = new Date();
    d.setTime(d.getTime() - (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "="  + ";" + expires + "; SameSite = Strict";
}

window.onload = function(){
    unsetCookie("acceptsCookies",1);
    var x = document.getElementsByTagName("a")[0];
    const foot = document.getElementsByTagName("footer")[0];
    const wone = document.getElementsByTagName("div")[2];
    var str = wone.innerHTML;
    const wtwo = document.createElement("div");
    const del = document.createElement("button");
    del.innerHTML = "Delete cookie";
    x.addEventListener("click",()=>{
        setCookie("acceptsCookies","true",1);
        if (document.cookie.includes("acceptsCookies=true")) {
            wone.innerHTML="";
            foot.appendChild(wtwo);
            wtwo.appendChild(del);
        }
    });
    del.addEventListener("click",()=>{
        unsetCookie("acceptsCookies",1);
        del.parentNode.removeChild(del);
        wtwo.parentNode.removeChild(wtwo);
        wone.innerHTML = str;
        x = wone.children[0];
        x.addEventListener("click",()=>{
            setCookie("acceptsCookies","true",1);
            if (document.cookie.includes("acceptsCookies=true")) {
                wone.innerHTML="";
                foot.appendChild(wtwo);
                wtwo.appendChild(del);
            }
        });
    });
    if (document.cookie.includes("acceptsCookies=true")) {
        wone.innerHTML="";
    }
}
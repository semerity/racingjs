window.onload = function (){
    const orb = document.getElementsByTagName("span")[0];
    async function api() {
        const reponse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const bitcon = await reponse.json();
        var newrate = bitcon.bpi.EUR.rate;
        console.log(localStorage.getItem("eurate"));
        console.log(newrate);
        if (localStorage.getItem("eurate") !== null) {
            if (localStorage.getItem("eurate") < newrate) {
                orb.style.backgroundColor = "green";
                localStorage.setItem("eurate", newrate);
            } else if (localStorage.getItem("eurate") == newrate) {
                orb.style.backgroundColor = "orange";
                localStorage.setItem("eurate", newrate);
            } else {
                orb.style.backgroundColor = "red";
                localStorage.setItem("eurate", newrate);
            }
        } else {
            localStorage.setItem("eurate", newrate);
        }
    };
    api();
}
window.onload = function (){
    const entree = document.getElementsByTagName("input")[0];
    const ok = document.getElementsByTagName("button")[0];
    const x = document.getElementsByTagName("div")[2];
    async function postal(code) {
        if (code.length == 5) {
            const reponse = await fetch("https://apicarto.ign.fr/api/codes-postaux/communes/" + code);
            const postal = await reponse.json();
            if (typeof postal[0].nomCommune !== 'undefined') {
                x.innerText = postal[0].nomCommune + " | " + postal[0].libelleAcheminement;
            }
        }
    };

    ok.addEventListener("click", () => {
        postal(entree.value);
    });
}
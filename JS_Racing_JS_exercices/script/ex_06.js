window.onload = function (){
    const x = document.getElementsByTagName("div")[2];
    async function afficherannuaire() {
        const reponse = await fetch("https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%20%2C%20nom_etablissement%20%2C%20mail&limit=25");
        const annuaire = await reponse.json();
        annuaire.results.forEach(element => {
            let str = element.nom_commune;
            str += " | " + element.nom_etablissement;
            str += " | " + element.mail;
            str += "\n";
            console.log(str);
            x.innerText += str;
        });
    };
    afficherannuaire();
}
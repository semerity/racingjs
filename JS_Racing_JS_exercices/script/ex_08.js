window.onload = function (){
    const x = document.getElementsByTagName("canvas");
    var orgcount=0;
    var vercount=0;
    var purcount=0;
    var blacount=0;
    for (let i = 0; i < x.length; i++) {
        if(orgcount<4){
            orgcount++;
            x[i].style.backgroundColor = "orange";
        } else if (purcount<3) {
            purcount++;
            x[i].style.backgroundColor = "purple";
        } else if (blacount<1) {
            blacount++;
            x[i].style.backgroundColor = "black";
        } else {
            vercount++;
            x[i].style.backgroundColor = "olive";
        };
    }
}
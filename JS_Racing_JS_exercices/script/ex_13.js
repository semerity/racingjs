window.onload = function () {
    const div = document.getElementsByTagName("div")[2];
    const image = "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png";
    div.innerHTML = "<img src=" + image + "></img>";
    const img = document.getElementsByTagName("img")[0];
    img.draggable = false;
    var init = img.height;
    var repeat = 0;
    localStorage.setItem("ex12_img", image);
    div.addEventListener("mouseenter", () => {
        repeat = setInterval(function () {
            img.height -= img.height * 0.05;
        }, 100);
    });
    div.addEventListener("mouseleave", () => {
        img.height = init;
        clearInterval(repeat);
    });
    img.addEventListener("click",()=>{
        localStorage.removeItem("ex12_img");
    })
};
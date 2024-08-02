window.onload = function(){
    const div = document.getElementsByTagName("div")[2]
    const x = document.getElementsByTagName("a")[0];
    const image = x.attributes["href"].nodeValue;
    localStorage.setItem("ex12_img",image);
    console.log(localStorage.getItem("ex12_img"));
    div.innerHTML = "<img src="+image+"></img>";
};
window.onload = function (){
    const dl = document.getElementsByTagName("button")[0];
    async function api() {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await reponse.json();
        const link = document.createElement("a");
        // console.log(post);
        var blob = new Blob([JSON.stringify(post, null, 2)], {
            type: "application/octet-stream"
        });
        var url = URL.createObjectURL(blob);
        link.href = url;
        link.download = "post.txt";
        link.click();
        URL.revokeObjectURL(url)
    };
    dl.addEventListener("click", () => {
        api()
    });
}


var xdta;
var xreq = new XMLHttpRequest();
xreq.open('GET', 'jjs/dtt/news.json');
xreq.onload = function(){
    xdta = JSON.parse(xreq.responseText);
};
xreq.send();

function news_slot(){
    for (let index = 1; index < 6; index++) {
        const slt = document.querySelector(".slot_");
        const d = slt.cloneNode(true);
        document.querySelector(".news_").appendChild(d);
        document.querySelector(".news_").children[index + 1].children[1].innerHTML= xdta[index].Name;
        document.querySelector(".news_").children[index + 1].children[0].src= xdta[index].UrlImage;
    }
    document.querySelector(".news_").children[1].children[1].innerHTML= xdta[0].Name;
    document.querySelector(".news_").children[1].children[0].src= xdta[0].UrlImage;
}




function controle(){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" + document.getElementById("input").value,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "e4f7e7645bmshfcf4b4dbd194897p1f0e4djsnfd5aeb1a55fa"
        }
    }
    var vari = document.getElementById("input").value;

$.ajax(settings).done(function (response) {

    document.write('<h2><b>'+ response[0].name + '</b></h2><br>')

    var img = new Image();
    if (response[1] === undefined) {
    img.src = response[0].img;
    } else {
        img.src = response[1].img;
    }
    document.body.appendChild(img);

    document.write('<input type="button" value="Retour" onclick=window.location.href="index.html";>')  

})};




const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}
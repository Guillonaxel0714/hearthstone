
var btn = document.getElementById('bouton');
btn.onclick = controle;

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
        document.write('<h2><b>Caractéristiques :</b></h2><br>') 
        if (response[0].attack === undefined){
        document.write('<p>Attaque : ' + response[1].attack + '</p>');
        } else {
        document.write('<p>Attaque : ' + response[0].attack + '</p>');
        }

        if (response[0].health === undefined){
            document.write('<p>HP : ' + response[1].health + '</p>');
            } else {
            document.write('<p>HP : ' + response[0].health + '</p>');
            }


        if (response[0].cost === undefined){
            document.write('<p>Mana : ' + response[1].cost + '</p>');
            } else {
            document.write('<p>Mana : ' + response[0].cost + '</p>');
            }


        document.write('<br><input type="button" value="Retour" onclick=window.location.href="index.html";>')  
    })
 
};




// animation de titre

const text = document.querySelector(".fancy");
// récupère les éléments
const strText = text.textContent;   
// split le text lettre par lettre               
const splitText = strText.split("");               
text.textContent = ""; 
// met chaque lettre dans un span pour les separer
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



// animation au scroll

const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }else{

        }
    })
}

// Permet d'observer tout les objets avec la classe reveal

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
})

// ScrollBar

const body = document.querySelector('body');
const scrollBar = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100);
    scrollBar.style.width = scrollPercent + '%';
})


//Animation texte et delete

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {

    loop: true,
    deleteSpeed: 30

})
.changeDelay(50)
.typeString('<strong>Hearthstone</strong>, ')
.pauseFor(300)
.typeString('présent sur ')
.pause(1000)
.typeString('<span style="color: midnightblue">Microsoft Windows</span>')
.pauseFor(1000)
.deleteChars(17)
.typeString('<span style="color: #981cb4"> IOS</span>')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color:  midnightblue"> Android</span>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #981cb4"> Mac OS X</span>')
.pauseFor(1000)
.start()
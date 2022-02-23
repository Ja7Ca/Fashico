function showNavigator(){
    var nav = document.getElementById("page");

    if(nav.style.opacity == 0){
        nav.style.opacity = 100;
        nav.style.transitionDuration = "0.5s";
        // nav.translateZ = "2px";
    } else {
        nav.style.opacity = 00;
        nav.style.transitionDuration = "0.5s";
        // nav.translateZ = "-2px";
    }
}

let myEmoji = [
    "😝",
    "😙",
    "🤑",
    "😴",
    "🥵",
    "🥶",
    "🤢",
    "😵",
    ];

// let urlAnimated = () => {
//     window.location.hash = myEmoji[Math.floor((Date.now() / 100) % myEmoji.length)];
//     setTimeout(urlAnimated, 70);
// }

// urlAnimated();
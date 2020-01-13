document.addEventListener('keydown', logKey);

let boxTop = 200;
let boxLeft = 200;


function logKey(event) {
    if (event.keyCode === 40 ) {
        document.getElementById("box").style.top = (boxTop += 10) + "px";
    } else if (event.keyCode === 38) {
        document.getElementById("box").style.top = (boxTop -= 10) + "px";
    } else if (event.keyCode === 37) {
        document.getElementById("box").style.left = (boxLeft -= 10) + "px";
    } else if (event.keyCode === 39) {
        document.getElementById("box").style.left = (boxLeft += 10) + "px";
    }
}


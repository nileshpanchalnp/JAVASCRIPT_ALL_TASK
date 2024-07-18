let sec = 0;
let min = 0;
let hours = 0;

function msg() {
    sec++;
    if (sec == 60) {
        addminutes();
        sec = 0;
    }

    if (min == 60) {
        addhours();
        min = 0;
    }

    if (hours == 12) {
        hours = 0;
    }

    sec = (sec < 10) ? "0" + sec : sec;
    document.getElementById("sec").innerHTML = sec;
}

function addminutes() {
    min++;
    min = (min < 10) ? "0" + min : min;
    document.getElementById("min").innerHTML = min;
}

function addhours() {
    hours++;
    hours = (hours < 10) ? "0" + hours : hours;
    document.getElementById("hours").innerHTML = hours;
}
setInterval(msg, 1000)

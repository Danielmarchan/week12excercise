var numArr = [1.23, 2.42, 5.39, 0.45, 6.83];
var roundArr = numArr.map(num => Math.round(num));

var randNumArr = [];
for (let i = 0; i < 100; i++) {
    randNumArr.push(Math.floor(Math.random() * (101 - 1) + 1));
}

var myH1 = document.getElementById("my-h1");

function now() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let currentTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let currentDate = formatTime(day) + "/" + formatTime(month + 1) + "/" + year;
    return currentDate + " " + currentTime;
}

function formatTime(x) {
    if (x > 9) {
        return "${x}", x;
    }
    else {
        return "0" + x;
    }
}

setInterval(function(){
        myH1.textContent = now();
}, 100);
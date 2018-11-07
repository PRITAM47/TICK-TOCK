var date, hour, minute, second, clock, color;

function Timeclock() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();


if ( hour <= 9) {
    hour = '0' + hour;
}
if ( minute <= 9) {
    minute = '0' + minute;
}
if ( second <= 9) {
    second = '0' + second;
}

clock = hour + ":" + minute + ":" + second;
color = "#" + hour + minute + second;

document.getElementById("clock").innerHTML = clock;
document.body.style.background = color;

setTimeout(Timeclock, 1000);
}

Timeclock();
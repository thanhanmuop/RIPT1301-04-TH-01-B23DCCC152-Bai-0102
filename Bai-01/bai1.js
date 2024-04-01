function showCurrentTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(showCurrentTime,1000);
showCurrentTime();
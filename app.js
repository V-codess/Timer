var endDate = new Date("Sep 25, 2022 23:59:59").getTime();
x = setInterval(() => {
    var startDate = new Date().getTime();
    var time = (endDate - startDate);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
   document.getElementById("day").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
   document.getElementById("text").innerHTML = "";
    if (time < 0) {
clearInterval(x);
document.getElementById("text").innerHTML = "Oops! Next Time!";
document.getElementById("day").innerHTML ='0';
document.getElementById("hours").innerHTML ='0';
document.getElementById("minutes").innerHTML ='0' ; 
document.getElementById("seconds").innerHTML = '0'; }
}, 1000);
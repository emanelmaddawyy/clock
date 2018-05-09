/* global src */

$(document).ready(function () {


new WOW().init();

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
    
        var date = new Date()
    console.log(date);
    let hr =date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("hours : " + hr + " minute : " + min + " seconds :" + sec);
    
    
    let hrPosition =(hr*360/12)+(min*(360/60)/12);
    let minPosition =(min*360/60)+(sec*(360/60)/60);
    let secPosition =sec*360/60;
    
function runClock(){
    
 hrPosition = hrPosition+(3/360);
 minPosition =minPosition +(6/60);
 secPosition= secPosition+6;
  
 hours.setAttribute("transform", "rotate("+ hrPosition + " 100 100)");
    
 minutes.setAttribute("transform", "rotate("+ minPosition +" 100 100)");
     
 seconds.setAttribute("transform", "rotate(" + secPosition +" 100 100)");
}
    var interval = setInterval(runClock,1000);
    
});

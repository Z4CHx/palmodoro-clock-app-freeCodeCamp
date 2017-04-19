$(document).ready(function(){

var screen = $("div#timer-container #countdown");
var startButton =$("div#countdown");
var addButton =$("div#add-time");
var subtractButton =$("div#subtract-time");
var timeLeft = 5;
var display = function(toDisplay){   
    screen.html(toDisplay);
};



var startTimer = function() {
    setInterval(function(){
        if (timeLeft === 0) {
            clearInterval(startTimer);
            
        } else {       
            timeLeft--;
            display(timeLeft);
        }
    }, 1000);
};

display(timeLeft);
startButton.click(startTimer);
addButton.click(function(){
    timeLeft+=5;
    display(timeLeft);
});
subtractButton.click(function(){
    timeLeft-=5;
    display(timeLeft);
});
    
});
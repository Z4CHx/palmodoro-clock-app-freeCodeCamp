$(document).ready(function(){

var screen = $("div#timer-container #countdown");
var startButton = $("div#countdown");
var addButton = $("div#add-time");
var subtractButton = $("div#subtract-time");
var pauseButton =  $("div#pause");
var restartButton =  $("div#reset");
var presetButton = $(".timer-preset");
var display = function(toDisplay){   
    screen.html(toDisplay);
};

var timeLeft = 5;
var t;
var countdown_is_on = 0;

function countdown() {
    display(timeLeft);
    if (timeLeft !== 0) {
        display(timeLeft);
        console.log(timeLeft);
        timeLeft--;
        t = setTimeout(function(){ countdown() }, 1000);
    } else {
        stopCount();
    }
}

function startCountdown() {
    if (!countdown_is_on) {
        countdown_is_on = 1;
        countdown();
    }
}

function stopCount() {
    clearTimeout(t);
    countdown_is_on = 0;
}
    
function startPreset() {
    timeLeft = parseInt(this.innerHTML);
    display(timeLeft);
}    
    
    

display(timeLeft);    
startButton.click(startCountdown);
addButton.click(function(){
    timeLeft+=5;
    display(timeLeft);
});
subtractButton.click(function(){
    timeLeft-=5;
    display(timeLeft);
});
pauseButton.click(stopCount);
restartButton.click(function(){
    timeLeft = 25;
    display(timeLeft);
});
presetButton.click(startPreset)
    
});
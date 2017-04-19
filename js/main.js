$(document).ready(function(){

var screen = $("div#timer-container #countdown");
var startButton =$("div#countdown");
var length = 5;
var display = function(toDisplay){   
    screen.html(toDisplay);
};



var startTimer = function() {
    setInterval(function(){
        if (length === 0) {
            clearInterval(startTimer);
            display("ping!");
        } else {       
            length--;
            display(length);
        }
    }, 1000);
};

display(length);
startButton.click(startTimer);
    
});
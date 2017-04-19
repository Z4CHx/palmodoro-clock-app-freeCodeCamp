$(document).ready(function(){

var screen = $("div#timer-container #countdown");
var startButton =$("div#countdown");
var length = 5;
var display = function(toDisplay){   
    screen.html(toDisplay);
};


var startTimer = function() {
    setInterval(function(){
        if (length !== 0) {
            length--;
            display(length);
        } else {       
            display("ping!");
            clearInterval(startTimer);  
        }
        }, 1000);
};

    
startButton.click(startTimer);
    
});
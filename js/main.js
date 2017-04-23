$(document).ready(function(){

    var screen = $("div#timer-container #countdown");
    var startButton = $("div#countdown");
    var addButton = $("div#add-time");
    var subtractButton = $("div#subtract-time");
    var pauseButton =  $("div#pause");
    var restartButton =  $("div#reset");
    var presetButton = $(".timer-preset");
    var timeLeft = 10;
    var t;
    var countdown_is_on = 0;
    var chosenTime = 10;
    var setChosenTime = function(time){
        console.log("chosen time was " + time);
        chosenTime = time;
    };
    var countdownBar = $("#countdown-bar");

    var finishedNotification = document.createElement('audio');
    finishedNotification.src = './media/timerdone.ogg';


    function countdown() {
        display(timeLeft);
        if (timeLeft !== 0) {
            display(timeLeft);
            console.log(timeLeft);
            timeLeft--;
            t = setTimeout(function(){ countdown() }, 1000);
        } else {
            stopCount();
            finishedNotification.play();
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
        setChosenTime(timeLeft);
        display(timeLeft);
    }    

    var display = function(toDisplay){   
        screen.html(toDisplay);
        console.log(timeLeft/chosenTime * 100);
        countdownBar.css('width', '' + timeLeft/chosenTime * 100 + '%');
    };

    display(timeLeft);

    startButton.click(startCountdown);
    addButton.click(function(){
        timeLeft+=5;
        setChosenTime(timeLeft);
        display(timeLeft);
    });
    subtractButton.click(function(){
        timeLeft-=5;
        setChosenTime(timeLeft);
        display(timeLeft);
    });
    pauseButton.click(stopCount);
    restartButton.click(function(){
        timeLeft = 10;
        setChosenTime(timeLeft);
        display(timeLeft);
    });
    presetButton.click(startPreset);
    
});
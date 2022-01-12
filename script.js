const FORWARD = 38, BACKWARD = 40;
const TIMER_OFF = -1;

function initialize ()
{
    eventOutput = document.getElementById ("evout");

    purpleCar = document.getElementById ("pcar");
    speedInput = document.getElementById ("speedometer");

    keyLogOut = document.getElementById ("log");
    keyLog = "";
    xCoord = 250;
    yCoord = 340;

    counterOut = document.getElementById ("ctrout");
    counter = 0;
    counterTimer = TIMER_OFF;

    countersOut = document.getElementById ("ctrs");
    counterList = [];
}

// function react (e, clr)
// {
//     // console.log ("You Clicked The Mouse.");
//     if (e.type = "contextmenu")
//     {
//         e.preventDefault ();
//     }

//     var str = "(" + e.clientX + ", " + e.clientY + ")<br/>";
//     str += "Target: " + e.target + "<br/>";
//     str += "Button: " + e.button + "<br/>";
//     str += "Type: " + e.type + "<br/>";

//     e.target.style.backgroundColor = clr;

//     eventOutput.innerHTML = str;
// }

function logKey (e)
{
    // var str = "Which: " + e.which + "<br/>";
    // str += "Key: " + e.key + "<br/>";
    // str += "Code: " + e.code + "<br/>";

    // keyLog = str + keyLog;

    var spd = parseInt (speedInput.value);
    var dir = "";

    if (e.which == FORWARD)
    {
        yCoord -= spd;
        dir = "forward";
    }
    else if (e.which == BACKWARD)
    {
        yCoord += spd;
        dir = "backward";
    }

    keyLog = "The car moved " + dir + ".<hr/>" + keyLog;

    display ();
}

function count ()
{
    counter++;
    display ();
}

function startCounter ()
{
    if (counterTimer == TIMER_OFF)
        counterTimer = setInterval (count, 1000);
    console.log (counterTimer);
}

function stopCounter ()
{
    clearInterval (counterTimer);
    counterTimer = TIMER_OFF;
}

function addCounter ()
{
    var tmpCtr = {};
    tmpCtr.counter = 0;
    tmpCtr.started = false;

    tmpCtr.startButton = document.createElement ("button");
    tmpCtr.startButton.innerHTML = "Start Counter";
    tmpCtr.startButton.myCounter = tmpCtr;

    tmpCtr.startButton.addEventListener ("click", function ()
    {
        if (!this.myCounter.started)
        {
            this.myCounter.started = true;
            this.myCounter.timerId = setInterval (function ()
            {
                tmpCtr.counter++;
                display ();
            }, 1000);
        }
    });

    tmpCtr.stopButton = document.createElement ("button");
    tmpCtr.stopButton.innerHTML = "Stop  Counter";
    tmpCtr.stopButton.myCounter = tmpCtr;

    tmpCtr.stopButton.addEventListener ("click", function ()
    {
        clearInterval (this.myCounter.timerId);
        this.myCounter.started = false;
    });

    tmpCtr.counterDisplay = document.createElement ("span");
    tmpCtr.counterDisplay.innerHTML = " " + 0;

    countersOut.appendChild (document.createElement ("hr"));
    countersOut.appendChild (tmpCtr.startButton);
    countersOut.appendChild (tmpCtr.stopButton);
    countersOut.appendChild (tmpCtr.counterDisplay);

    counterList.push (tmpCtr);
}

function display ()
{
    keyLogOut.innerHTML = keyLog;

    purpleCar.style.top = yCoord + "px";
    purpleCar.style.left = xCoord + "px";

    counterOut.innerHTML = counter;

    for (var i = 0; i < counterList.length; i++)
    {
        counterList [i].counterDisplay.innerHTML = " " + counterList [i].counter; 
    }
}

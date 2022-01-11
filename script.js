const FORWARD = 38, BACKWARD = 40;

function initialize ()
{
    eventOutput = document.getElementById ("evout");

    purpleCar = document.getElementById ("pcar");

    keyLogOut = document.getElementById ("log");
    keyLog = "";
    xCoord = 250;
    yCoord = 340;
}

function react (e, clr)
{
    // console.log ("You Clicked The Mouse.");
    if (e.type = "contextmenu")
    {
        e.preventDefault ();
    }

    var str = "(" + e.clientX + ", " + e.clientY + ")<br/>";
    str += "Target: " + e.target + "<br/>";
    str += "Button: " + e.button + "<br/>";
    str += "Type: " + e.type + "<br/>";

    e.target.style.backgroundColor = clr;

    eventOutput.innerHTML = str;
}

function logKey (e)
{
    // var str = "Which: " + e.which + "<br/>";
    // str += "Key: " + e.key + "<br/>";
    // str += "Code: " + e.code + "<br/>";

    // keyLog = str + keyLog;

    var dir = "";

    if (e.which == FORWARD)
    {
        yCoord--;
        dir = "forward";
    }
    else if (e.which == BACKWARD)
    {
        yCoord++;
        dir = "backward";
    }

    keyLog = "The car moved " + dir + ".<hr/>" + keyLog;

    display ();
}

function display ()
{
    keyLogOut.innerHTML = keyLog;

    purpleCar.style.top = yCoord + "px";
    purpleCar.style.left = xCoord + "px";
}
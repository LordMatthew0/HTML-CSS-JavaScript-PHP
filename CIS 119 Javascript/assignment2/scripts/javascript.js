/*
    javascript.js
    Matthew Lord
    CIS119
    1/22/18
    javascript file for the first assignment
*/
"use strict";

function mouseOverSuperman(){
    document.getElementById("replaceImage").src = "imgs/supermanLego.jpg";
}
function clickSuperman(){
    window.location = "imgs/supermanLego.jpg";
}

function mouseOverBatman(){
    document.getElementById("replaceImage").src = "imgs/batmanLego.jpg";
}
function clickBatman(){
    window.location = "imgs/batmanLego.jpg";
}

function mouseOverWonderWoman(){
    document.getElementById("replaceImage").src = "imgs/wonderwomanLego.jpg";
}
function clickWonderWoman(){
    window.location = "imgs/wonderwomanLego.jpg";
}

function mouseOverFlash(){
    document.getElementById("replaceImage").src = "imgs/flashLego.jpg";
}
function clickFlash(){
    window.location = "imgs/flashLego.jpg";
}

function mouseOverGreenLantern(){
    document.getElementById("replaceImage").src = "imgs/GLLego.jpg";
}
function clickGreenLantern(){
    window.location = "imgs/GLLego.jpg";
}

window.onload = function(){
    document.getElementById("superman").addEventListener("mouseover", function(){
        mouseOverSuperman();
    });
    document.getElementById("superman").addEventListener("click", function(){
        clickSuperman();
    });
    
    document.getElementById("batman").addEventListener("mouseover", function(){
        mouseOverBatman();
    });
    document.getElementById("batman").addEventListener("click", function(){
        clickBatman();
    });
    
    document.getElementById("wonderWoman").addEventListener("mouseover", function(){
        mouseOverWonderWoman();
    });
    document.getElementById("wonderWoman").addEventListener("click", function(){
        clickWonderWoman();
    });
    
    document.getElementById("flash").addEventListener("mouseover", function(){
        mouseOverFlash();
    });
    document.getElementById("flash").addEventListener("click", function(){
        clickFlash();
    });
    
    document.getElementById("greenLantern").addEventListener("mouseover", function(){
        mouseOverGreenLantern();
    });
    document.getElementById("greenLantern").addEventListener("click", function(){
        clickGreenLantern();
    });
}

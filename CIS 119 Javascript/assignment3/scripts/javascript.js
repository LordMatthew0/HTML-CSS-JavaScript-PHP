/*
    javascript.js
    Matthew Lord
    CIS119
    2/12/18
    javascript for assignment 3
*/

function half(){
    var x = document.getElementsByClassName("images")[0];
    
    if(x.getElementsByClassName("child")[0].id == "first"){ 
        document.getElementById("first").src = "imgs/2.png";
        document.getElementById("first").id = "second";
    }
    else if(x.getElementsByClassName("child")[0].id == "second"){
        document.getElementById("second").src = "imgs/1.png";
        document.getElementById("second").id = "first";
    }
}
function full(){
    var x = document.getElementsByClassName("images")[0];
    
    if(x.getElementsByClassName("child")[1].id == "third"){
        document.getElementById("third").src = "imgs/4.png";
        document.getElementById("third").id = "fourth";
    }
    else if(x.getElementsByClassName("child")[1].id == "fourth"){
        document.getElementById("fourth").src = "imgs/3.png";
        document.getElementById("fourth").id = "third";
    }
}
function third(){
    var x = document.getElementsByClassName("images")[0];
    
    if(x.getElementsByClassName("child")[2].id == "fifth"){
        document.getElementById("fifth").src = "imgs/6.png";
        document.getElementById("fifth").id = "sixth";
    }
    else if(x.getElementsByClassName("child")[2].id == "sixth"){
        document.getElementById("sixth").src = "imgs/5.png";
        document.getElementById("sixth").id = "fifth";
    }
}

function clickone(){
    var x = document.getElementsByClassName("images")[0];
    if(x.getElementsByClassName("child")[0].id == "first"){ 
        window.location = "imgs/1.png";
    }
    else if(x.getElementsByClassName("child")[0].id == "second"){
        window.location = "imgs/2.png";
    }
}
function clicktwo(){
    var x = document.getElementsByClassName("images")[0];
    if(x.getElementsByClassName("child")[1].id == "third"){
        window.location = "imgs/3.png";
    }
    else if(x.getElementsByClassName("child")[1].id == "fourth"){
        window.location = "imgs/4.png";
    }
}
function clickthree(){
    var x = document.getElementsByClassName("images")[0];
    if(x.getElementsByClassName("child")[2].id == "fifth"){
        window.location = "imgs/5.png";
    }
    else if(x.getElementsByClassName("child")[2].id == "sixth"){
        window.location = "imgs/6.png";
    }
}


window.onload = function(){
    
    window.setInterval(half, 1000);
    window.setInterval(full, 500);
    window.setInterval(third, 3000);
    
    var x = document.getElementsByClassName("images")[0];
    x.getElementsByClassName("child")[0].addEventListener("click", function(){
        clickone();
    });
    x.getElementsByClassName("child")[1].addEventListener("click", function(){
        clicktwo();
    });
    x.getElementsByClassName("child")[2].addEventListener("click", function(){
        clickthree();
    });
}
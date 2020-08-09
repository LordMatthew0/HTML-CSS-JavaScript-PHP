/*
    javascript.js
    Matthew Lord
    CIS119
    1/22/18
    javascript file for the sixth assignment
*/
"use strict";

function $(id) {
    return document.getElementById(id);
}

function validate(){
    let nm = $('txtName').value;
    if (nm.length == 0) {
        alert("Get a name, moron!");
        return false;
    }
    saveCookie('name', nm, 2);
    saveCookie('color', getRadioValue('rb'), 2);
    return true;
}

function killCookies(){
    deleteAllCookies();
    location.reload();
}

window.onload = function(){
    let nm = readCookie('name');
    let color = readCookie('color');
    if (nm == null || color == null) {
        console.log("Didn't find cookie(s)");
        $('noCookie').style.display = "block";
        $('yesCookie').style.display = "none";
    } else {
        console.log("Cookies: " + nm + ", " + color);
        $('noCookie').style.display = "none";
        $('yesCookie').style.display = "block";
        $('name').innerHTML = "Welcome, " + readCookie('name');
        let body = document.getElementsByTagName('body');
        switch (readCookie('color')){
            case 'White':
               // body.style.backgroundColor = "white";
                document.body.style.backgroundColor = "white";
                break;
            case 'Pink':
               // body.style.backgroundColor = "pink";
                document.body.style.backgroundColor = "pink";
                break;
            case 'Yellow':
               // body.style.backgroundColor = "yellow";
                document.body.style.backgroundColor = "yellow";
                break;
            case 'Lime':
                //body.style.backgroundColor = "lime";
                document.body.style.backgroundColor = "lime";
                break;
            case 'Silver':
                //body.style.backgroundColor = "gray";
                document.body.style.backgroundColor = "silver";
                break;
            default:
                 
        }
    }
    $('myform').onsubmit = validate;
    $('getRid').onclick = killCookies;
}
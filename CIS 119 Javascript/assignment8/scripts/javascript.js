/*
    javascript.js
    Matthew Lord
    CIS119
    4/9/18
    javascript file for the 8th assignment
*/

"use strict";

function $(id) {
    return document.getElementById(id);
}

function validate() {
    let counter = 0;
    if (!valName($('txtName').value)) counter++; //if there is no name in text box return false 
    if (!valAge($('txtAge').value)) counter++; 
    if (!valZip($('txtZip').value)) counter++;
    if (!valPass($('txtPass').value)) counter++;
    
    console.log(counter);
    if(counter == 0){
        $('error').style.display = "none";
        return true;
    } else {
        $('error').style.display = "block";
        return false;
        
    }
}

function valName(name){
    let valid = true;
    if (/^.+/.test(name)){ 
        $('nameError').style.display = "none";
        console.log("yes name");
        valid = true;
    } else {
        $('nameError').style.display = "block";
        console.log("no name");
        valid = false;
    }
    return valid;
}

function isInteger(val) {
    return /^\d+$/.test(val);
}

function valAge(age){
    let valid = true;
    if (isInteger(age)) valid = false;

    if ((age >= 16) && (age <= 120)){ //if age is greater then 16 and less then 120 and is an integer    
        valid = true;
         $('ageError').style.display = "none";
        console.log("yes age");
    } else {
        valid = false;
        $('ageError').style.display = "block";
        console.log("no age");
    }
    return valid;
}



function valZip(val){
    let valid = true;
    let len = val.length;
    if(/^\d{5}$/.test(val)) valid = true;
    else if(/^\d{9}$/.test(val)) valid = true;
    else if(/^\d{5}[ -]\d{4}$/.test(val)) valid = true
    else valid = false;
    if(valid){
        $('zipError').style.display = "none";
        console.log("yes zip");
    } else {
        $('zipError').style.display = "block";
        console.log("no zip");
    }
    return valid;
}

function valPass(pass){
    let valid = true;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])[-!"#$%&'()*+,.:;<=>?@[\]^_`{|}~0-9a-zA-Z]{8,16}$/.test(pass)) {
        valid = false;
        $('passError').style.display = "block";
        console.log("password failed");
    } else{
        $('passError').style.display = "none";
        console.log("password good");
    }
    return valid;
}
window.onload = function(){
    $('myform').onsubmit = validate;
};
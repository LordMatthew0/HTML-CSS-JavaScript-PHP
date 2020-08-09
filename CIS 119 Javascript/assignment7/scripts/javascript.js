/*
    javascript.js
    Matthew Lord
    CIS119
    4/2/18
    javascript file for the 7th assignment
*/

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

function validate() {
    /*valName($('txtName').value);
    valAge($('txtAge').value);
    valZip($('txtZip').value);
    valPass($('txtPass').value);
    */
    let counter = 0;
    if (!valName($('txtName').value)) counter++; //if there is no name in text box return false 
    if (!valAge($('txtAge').value)) counter++; //
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
    if (name.length == 0){ 
        $('nameError').style.display = "block";
        console.log("no name");
        valid = false;
    } else {
        $('nameError').style.display = "none";
        console.log("yes name");
        valid = true;
    }
    return valid;
}

function isInteger(val) {
    return isFinite(val) && !isNaN(parseInt(val));
}

function valAge(age){
    let valid = true;
    if (Number.isInteger(age)) valid = false;
    
    if ((age >= 16) && (age <= 120)){ //if age is greater then 16 and less then 120 and is an integer    
        valid = true;
    } else {
        valid = false;
    }
    
    if(valid == false){
        $('ageError').style.display = "block";
        console.log("no age");
    } else {
        $('ageError').style.display = "none";
        console.log("yes age");
    }
    return valid;
}



function valZip(val){
    let valid = true;
    let len = val.length;
    switch (len) {
        case 5:
        case 9:
            valid = isInteger(val)
            break;
        case 10:
            let part1 = val.substr(0,5);
            let part2 = val.substr(6);
            let sep = val.charAt(5);
            valid = isInteger(part1) && isInteger(part2) && (sep === " " || sep === "-");
            break;
        default:
            valid = false;
    }
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
   /* if (pass.length >= 8 && pass.length <= 16){ //if password length is greater or equal to 8 and less then or equal to 16 the password is valid 
        valid = true;
    } else {
        valid = false;
    }*/
    let lowerCounter = 0;
    let upperCounter = 0;
    let numberCounter = 0;
    let characterCounter = 0;
    let characters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
    for(let i=0; i < pass.length; i++){
        let c = pass.charAt(i);
        if (c>='0' && c<='9'){
            numberCounter++;
            console.log("adding to number counter");
        } 
        else if (pass[i] == pass[i].toUpperCase()) {
            upperCounter++;
            console.log("adding to upper counter");
        }
        else if (pass[i] == pass[i].toLowerCase()) {
            lowerCounter++;
            console.log("adding to lower Counter");
        }
        for(let j=0; j < characters.length; j++){
            if(pass[i] == characters[j]){
                characterCounter++;
                console.log("adding to character Counter");
            }
        }
    }
    if(characterCounter > 0 && numberCounter > 0 && upperCounter > 0 && lowerCounter > 0 && pass.length >= 8 && pass.length <= 16){
        valid = true;
        $('passError').style.display = "none";
        console.log("password good");
    } else {
        valid = false;
        $('passError').style.display = "block";
        console.log("password failed");
    }
    return valid;
}
window.onload = function(){
    $('myform').onsubmit = validate;
};
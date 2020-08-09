/*
    javascript.js
    Matthew Lord
    CIS119
    2/26/18
    javascript file for the sixth assignment
*/

window.onload = function(){
    let div = document.getElementById("thing");    
    let currentDate = new Date();
    
    if(currentDate.getHours() < 12){
        document.writeln("<p>" + "Good morning," + "</p>");
    } else if(currentDate.getHours() >= 12 && currentDate.getHours() < 18){
        document.writeln("<p>" + "Good afternoon," + "</p>");
    } else if(currentDate.getHours() > 18){
        document.writeln("<p>" + "Good evening," + "</p>"); 
    }
    document.writeln("<p>" + "Today's date is: " + currentDate.format(" %A, %B %d, %Y") + "</p>");
    document.writeln("<p>" + "The time is: " + currentDate.format("%r"));
    
    let warDay = new Date();
    warDay.setFullYear(2018);
    warDay.setMonth(04);
    warDay.setDate(04);
    document.writeln("<p>" + "Avengers: Infinity War comes out on: " + warDay.format("%A, %B %d, %Y") + "</p>");
    
    let bDay = new Date();
    bDay.setFullYear(1998);
    bDay.setMonth(04);
    bDay.setDate(04);
    document.writeln("<p>" + "I was born on: " + bDay.format("%A, %B %d, %Y") + "</p>"); 
    
   // document.lastModified
    let lM = new Date(document.lastModified);
    
    document.writeln("<p>" + "This document was last modified on: " + lM.format("%A, %B %d, %Y at %r"));
}
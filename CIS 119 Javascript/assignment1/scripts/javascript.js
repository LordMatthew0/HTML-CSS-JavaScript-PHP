/*
    javascript.js
    Matthew Lord
    CIS119
    1/22/18
    javascript file for the first assignment
*/
function myFunction(){
   document.getElementById("replaceMe").innerHTML = "This is content provided by JavaScript";
}

window.onload = function() {
	myFunction();
}

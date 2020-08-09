/*
    javascript.js
    Matthew Lord
    cis119
    2/19/2018
    javascript file for the first assignment
*/

let arr = ["https://www.dccomics.com/comics", "https://www.plex.tv/", "https://enderal.com/", "http://kermit.kish.edu/~mlord"];

function x(){
    let l = document.getElementById("links");
    let ol = document.createElement("ol");
    l.appendChild(ol);
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement("li");
        let a = document.createElement('a');
        let txt = document.createTextNode(arr[i]);
        a.href = arr[i];
        a.appendChild(txt);
        li.appendChild(a);
        ol.appendChild(li);
    }
}

window.onload = function(){
    x();
}
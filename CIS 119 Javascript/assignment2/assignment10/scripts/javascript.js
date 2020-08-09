/*
    javascript.js
    Matthew Lord
    CIS119
    4/23/18
    javascript file for the 10th assignment
*/

function theStuff(){
    switch (getRadioValue('rb')){
        case 'HL':
            console.log("Trying HL");
            new Effect.Highlight($('effect'), { startcolor: '#ffffff', endcolor: '#ff00ff'});
            return false;
            break;
        case 'MB':
            console.log("Trying MB");
            $('effect').morph('width:35em; height:25em;');
            return false;
            break;
        case 'MS':
            console.log("Trying MS");
            $('effect').morph('width:20em; height:10em;')
        case 'MoveUp':
            console.log("Trying Move Up");
            new Effect.Move($('effect'), { x: 0, y: -60 }); 
            return false;
            break;
        case 'MoveDown':
            console.log("Trying Move Down");
            new Effect.Move($('effect'), {x: 0, y: 60});
            break;
        case 'MoveLeft':
            console.log("Trying Move Left");
            new Effect.Move($('effect'), { x: -60, y: 0 }); 
            return false;
            break;
        case 'MoveRight':
            console.log("Trying Move Right");
            new Effect.Move($('effect'), {x: 60, y: 0});
            break;
        case 'OC':
            console.log("Trying OC");
            new Effect.Opacity('effect', { from: 1, to: 0 }); 
            return false;
            break;
        case 'SC':
            console.log("Trying SC");
            new Effect.Shake('effect');
            return false;
            break;
        case 'SquichC':
            console.log("Trying SquichC");
            Effect.Squish('effect');
            return false;
            break;
        default:
             
    }
}

function resetStuff(){
    console.log("Trying reset");
    $('effect').morph('background:#FFFFFF; width:30em; height:20em;'); 
    new Effect.Opacity('effect', { from: 0, to: 1 });
    $('effect').show();
}
window.onload = function(){
    document.getElementById('bClick').onclick = theStuff;
    document.getElementById('bReset').onclick = resetStuff;
    new Draggable('effect');
}; 

function keySound(event) {

    var pressedKey = event.which || event.keyCode;
    var keyLet = String.fromCharCode(pressedKey);
    document.getElementById("demo").innerHTML = "Keypress: " + keyLet;

    $.playSound('./sounds/' + keyLet);

};

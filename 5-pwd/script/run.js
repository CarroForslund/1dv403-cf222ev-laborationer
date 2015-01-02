"use strict";

function newDesktop(){
    var desktop = new Desktop();
    desktop.addApp('images/photo.png');
}

window.onload = function(){
    newDesktop();
};
"use strict";

function newDesktop(){
    var desktop = new Desktop();
    desktop.addApp('Galleri', 'images/photo.png');
}

window.onload = function(){
    newDesktop();
};
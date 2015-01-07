"use strict";

function newDesktop(){
    var desktop = new Desktop();
    desktop.addApp('Gallery', 'images/photo.png');
}

window.onload = function(){
    newDesktop();
};
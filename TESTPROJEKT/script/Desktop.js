'use strict';
function Desktop(){
   this.content = document.querySelector('#wrapper');//public
}

Desktop.prototype.addApp = function(type, imagesrc){
    
    var img = document.createElement('img');
    var a = document.createElement('a');
    var menu = document.querySelector('#menu');
    var zIndex = 0;
    var winMargin = 0;
    
    
    img.setAttribute('src', imagesrc);
    a.setAttribute('href', '#');
    a.setAttribute('class', 'appLink');
    
    menu.appendChild(a);
    a.appendChild(img);
    
    this.desktopWidth = this.content.clientWidth;
    this.desktopHeight = this.content.clientHeight;
    
    
    a.addEventListener('click', function(e){
        e.preventDefault();
        zIndex += 10;
        winMargin += 10;
        var win = new Window(this);
        win.openWindow(type, imagesrc, zIndex, winMargin);
    }.bind(this));
};


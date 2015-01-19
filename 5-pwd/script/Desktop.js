'use strict';
var NS = NS || {};
NS.Desktop = function(){
   this.content = document.querySelector('#wrapper');//public
};

NS.Desktop.prototype.addApp = function(type, imagesrc){
    var img = document.createElement('img');
    var a = document.createElement('a');
    var menu = document.querySelector('#menu');
    var zIndex = 0;
    var winMarginTop;
    var winMarginLeft;
    
    switch (type){
        case 'RSS':
            winMarginTop = 30;
            winMarginLeft = 150;
            break;
        case 'Memory':
            winMarginTop = 30;
            winMarginLeft = 240;
            break;
        default:
            winMarginTop = 30;
            winMarginLeft = 30;
    }
    
    img.setAttribute('src', imagesrc);
    a.setAttribute('href', '#');
    a.setAttribute('class', 'appLink');
    
    menu.appendChild(a);
    a.appendChild(img);
    
    //Skrivbordsytans aka webbläsarfönstrets bredd och höjd
    this.desktopWidth = this.content.clientWidth;
    this.desktopHeight = this.content.clientHeight;
    
    a.addEventListener('click', function(e){
        e.preventDefault();
        winMarginLeft += 10;
        winMarginTop += 10;
        var win = new NS.Window(this);
        win.openWindow(type, imagesrc, zIndex, winMarginTop, winMarginLeft);
    }.bind(this));
};
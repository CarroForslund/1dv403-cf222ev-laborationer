'use strict';
function Desktop(){
   this.content = document.querySelector('#wrapper');//public
}

Desktop.prototype.addApp = function(type, imagesrc){
    var img, a, windowId;
    windowId = 0;
    
    img = document.createElement('img');
    img.setAttribute('src', imagesrc);
    a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'appLink');
    document.querySelector('#menu').appendChild(a);
    a.appendChild(img);
    
    a.addEventListener('click', function(e){
        e.preventDefault();
        windowId = windowId += 1;
        var win = new Window();
        win.openWindow(type, imagesrc, windowId);
    });
};
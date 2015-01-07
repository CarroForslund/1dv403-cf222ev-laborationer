"use strict";
function Window() {
    this.content = document.querySelector('#windowArea');
}

Window.prototype.openWindow = function(type, imagesrc, windowId){
    var windowArea, newWindow, windowHead, windowBody, windowFooter, 
        h1, title, icon, load, close;
        
    if (type = 'Gallery'){
        var gallery = new Gallery();
        gallery.openGallery();
    }

    windowArea = document.getElementById('windowArea');

    newWindow = document.createElement('div');
    newWindow.setAttribute('class', 'newWindow');
    newWindow.setAttribute('id', windowId);

    windowHead = document.createElement('div');
    windowHead.setAttribute('class', 'windowHead');
    
    icon = document.createElement('img');
    icon.setAttribute('src', imagesrc);
    icon.setAttribute('class', 'windowIcon');
    
    h1 = document.createElement('h1');
    h1.setAttribute('class', 'windowTitle');
    title = document.createTextNode(type);
    
    close = document.createElement('img');
    //close.setAttribute('src', '');
    close.setAttribute('class', 'close');
    close.setAttribute('alt', 'X');
    //https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild
    close.addEventListener('click', function(){
        //newWindow.setAttribute('class', 'hidden');
        //e.preventDefault();
        var windowToClose = document.getElementById(windowId);
        var throwawayNode = windowArea.removeChild(windowToClose);
    });
    
    windowBody = document.createElement('div');
    windowBody.setAttribute('class', 'windowBody');
    windowBody.setAttribute('id', 'windowBody');
    
    load = document.createElement('div');
    load.setAttribute('id', 'load');
    load.setAttribute('class', 'load');
    //load.setAttribute('class', 'hidden');
    
    windowFooter = document.createElement('div');
    windowFooter.setAttribute('class', 'windowFooter');
    
    h1.appendChild(title);
    windowHead.appendChild(icon);
    windowHead.appendChild(title);
    windowHead.appendChild(close);
    windowFooter.appendChild(load);
    newWindow.appendChild(windowHead);
    newWindow.appendChild(windowBody);
    newWindow.appendChild(windowFooter);
    windowArea.appendChild(newWindow);
};
"use strict";
//Skapa nytt fönster
//Innehållet beror på vilken app man öppnar
function Window(name, imagesrc) {
    
    var windowArea, newWindow, windowHead, windowBody, windowFooter, 
        icon, load, close;
    
    windowArea = document.getElementById('windowArea');

    newWindow = document.createElement('div');
    newWindow.setAttribute('class', 'newWindow');

    windowHead = document.createElement('div');
    windowHead.setAttribute('class', 'windowHead');
    
    icon = document.createElement('img');
    icon.setAttribute('src', imagesrc);
    icon.setAttribute('class', 'windowIcon');
    
    close = document.createElement('img');
    //close.setAttribute('src', '');
    close.setAttribute('class', 'close');
    close.setAttribute('alt', 'X');
    close.addEventListener('click', function(e){
        newWindow.setAttribute('class', 'hidden');
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
    
    windowHead.appendChild(icon);
    windowHead.appendChild(close);
    windowFooter.appendChild(load);
    newWindow.appendChild(windowHead);
    newWindow.appendChild(windowBody);
    newWindow.appendChild(windowFooter);
    windowArea.appendChild(newWindow);
}
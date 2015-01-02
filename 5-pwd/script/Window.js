"use strict";
//Skapa nytt fönster
//Innehållet beror på vilken app man öppnar
function Window(name, imagesrc) {
    
    var windowArea, newWindow, windowHead, windowBody, windowFooter;
    var img;
    
    windowArea = document.getElementById('windowArea');

    newWindow = document.createElement('div');
    newWindow.setAttribute('class', 'newWindow');

    windowHead = document.createElement('div');
    windowHead.setAttribute('class', 'windowHead');
    
    img = document.createElement('img');
    img.setAttribute('src', imagesrc);
    img.setAttribute('class', 'windowIcon');
    
    windowBody = document.createElement('div');
    windowBody.setAttribute('class', 'windowBody');
    //if (name = 'Bilder') {
    //     var thumb = document.createElement('img')
    // }
    
    windowFooter = document.createElement('div');
    windowFooter.setAttribute('class', 'windowFooter');
    
    windowHead.appendChild(img);
    newWindow.appendChild(windowHead);
    newWindow.appendChild(windowBody);
    newWindow.appendChild(windowFooter);
    windowArea.appendChild(newWindow);
}
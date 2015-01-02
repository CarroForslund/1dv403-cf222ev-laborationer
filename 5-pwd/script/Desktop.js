"use strict";
function Desktop(){
   this.content = document.querySelector('#wrapper');//public
}

Desktop.prototype.addApp = function(imagesrc){
    var img = document.createElement('img');
    img.setAttribute('src', imagesrc);
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'appLink');
    document.querySelector('#menu').appendChild(a);
    a.appendChild(img);
    
    a.addEventListener('click', function(e){
        e.preventDefault();
        var win = new Window('Bilder', 'images/photo.png');
        //Gallery.getImages();
    });
};
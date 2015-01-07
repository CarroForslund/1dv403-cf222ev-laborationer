"use strict";
function Gallery() {
    this.content = document.querySelector('#windowBody');
}

Gallery.prototype.openGallery = function(){
    var url = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
    var xhr = new XMLHttpRequest();
    
    var switchBG = function(thumbLink, imageURL){
        thumbLink.addEventListener('click', function(e){
            //.preventDefault();
            console.log('byt bakgrund på body');
            var body = document.getElementsByTagName("body")[0];
            body.style.backgroundImage = 'url('+imageURL+')';
            //body.setAttribute('background-repeat', 'repeat');
        });
    };
    
    // var maxWidth = 75;
    // var maxHeight = 50;
    
    xhr.onreadystatechange = function(){
        var imageArray, i, thumbLink, thumb, thumbUrl, load, windowBody, imageURL;
        
        if (xhr.readyState === 4){
            console.log('xhr.readyState === 4');
            if (xhr.status === 200){
                imageArray = JSON.parse(xhr.responseText);
                
                for (i = 0; i < imageArray.length; i+=1) {
                    windowBody = document.getElementById('windowBody');
                    imageURL = imageArray[i].URL;
                    thumbUrl = imageArray[i].thumbURL;
                    thumbLink = document.createElement('a');
                    thumbLink.setAttribute('class', 'thumbLink');
                    thumbLink.setAttribute('href', '#');
                    
                    
                    
                    thumb = document.createElement('img');
                    //thumb.setAttribute('width', thumbWidth);
                    //thumb.setAttribute('height', thumbHeight);
                    thumb.setAttribute('src', thumbUrl);
                    thumb.setAttribute('class', 'thumb');
                    
                    // var thumbWidth = imageArray[i].thumbWidth;
                    // var thumbHeight = imageArray[i].thumbHeight;
                    // if (thumbWidth > maxWidth) {
                    //     maxWidth = thumbWidth;
                    // }
                    // if (thumbHeight > maxHeight) {
                    //     maxHeight = thumbHeight;
                    // }
                    // thumbLink.setAttribute('width', maxWidth);
                    // thumbLink.setAttribute('height', maxHeight);
                    
                    windowBody.appendChild(thumbLink);
                    thumbLink.appendChild(thumb);
                    //switchBG(thumbLink, URL);
                    
                    switchBG(thumbLink, imageURL);
                    // thumbLink.addEventListener('click', function(){
                    //     switchBG(imageURL);
                    // });
                }
            }
            else {
                console.log('Läsfel, status: '+xhr.status);
            }
            load = document.getElementById('load');
            load.setAttribute('class', 'hidden');
        }
    };
    xhr.open("GET", url, true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
    xhr.send(null); //Skicka svaret på frågan till servern
};
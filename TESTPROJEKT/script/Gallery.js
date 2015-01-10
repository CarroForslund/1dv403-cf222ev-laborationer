'use strict';
function Gallery(window) {
    this.content = window.content;
    this.footer = window.footer;
}

Gallery.prototype.openGallery = function(){
    var url = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
    var xhr = new XMLHttpRequest();
    
    var switchBG = function(thumbLink, imageURL){
        thumbLink.addEventListener('click', function(e){
            e.preventDefault();
            console.log('byt bakgrund på body');
            var body = document.getElementsByTagName("body")[0];
            body.style.backgroundImage = 'url('+imageURL+')';
        });
    };
    
    xhr.onreadystatechange = function(){
        var imageArray, i, j, thumbLink, thumb, thumbURL, load, windowBody, imageURL;
        var maxWidth = 0;
        var maxHeight = 0;
        var thumbWidth, thumbHeight;
        
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                imageArray = JSON.parse(xhr.responseText);

                for(j = 0; j < imageArray.length; j+=1){
                    thumbWidth = imageArray[j].thumbWidth;
                    thumbHeight = imageArray[j].thumbHeight;
                    if (thumbWidth > maxWidth) {
                        maxWidth = thumbWidth;
                    }
                    if (thumbHeight > maxHeight) {
                        maxHeight = thumbHeight;
                    }
                }
                
                for (i = 0; i < imageArray.length; i+=1) {
                    windowBody = this.content;
                    imageURL = imageArray[i].URL;
                    thumbURL = imageArray[i].thumbURL;
                    
                    thumbLink = document.createElement('a');
                    thumbLink.setAttribute('class', 'thumbLink');
                    thumbLink.setAttribute('href', '#');
                    
                    thumb = document.createElement('img');
                    //thumb.setAttribute('width', thumbWidth);
                    //thumb.setAttribute('height', thumbHeight);
                    thumb.setAttribute('src', thumbURL);
                    thumb.setAttribute('class', 'thumb');

                    thumbLink.style.width = maxWidth+'px';
                    thumbLink.style.height = maxHeight+'px';
                    
                    windowBody.appendChild(thumbLink);
                    thumbLink.appendChild(thumb);
                    
                    switchBG(thumbLink, imageURL);
                }
            }
            else {
                console.log('Läsfel, status: '+xhr.status);
            }
            load = this.footer.querySelector('.load');
            load.setAttribute('class', 'hidden');
        }
    }.bind(this); // gör att jag kan komma åt this uppifrån
    xhr.open("GET", url, true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
    xhr.send(null);
};
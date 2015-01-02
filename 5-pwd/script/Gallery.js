"use strict";

var Gallery = {
    
    url: 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/',
    
    getImages: function (){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                console.log('xhr.readyState === 4');
                if (xhr.status === 200){
                    var imageArray = JSON.parse(xhr.responseText);
                    for (var i = 0; i < imageArray.length; i+=1) {
                        var thumb = document.createElement('img');
                        thumb.setAttribute("src", imageArray[i].thumbURL);
                        
                        console.log(imageArray[i]);
                    }
                }
                else {
                    console.log('Läsfel, status: '+xhr.status);
                }
            }
        };
        
        xhr.open("GET", Gallery.url, true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
        xhr.send(null); //Skicka svaret på frågan till servern
        
    }
};

//Gallery.getImages();
"use strict";

var Gallery = {
    
    url: 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/',
    
    init: function (){
        
        var xhr = new XMLHttpRequest();
        var windowBody = document.getElementById('windowBody');
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                console.log('xhr.readyState === 4');
                if (xhr.status === 200){
                    var imageArray = JSON.parse(xhr.responseText);
                    for (var i = 0; i < imageArray.length; i+=1) {
                        var thumb = document.createElement('img');
                        thumb.setAttribute("src", imageArray[i].thumbURL);
                        windowBody.appendChild(thumb);
                        //console.log(imageArray[i]);
                    }
                }
                else {
                    console.log('Läsfel, status: '+xhr.status);
                }
                var load = document.getElementById('load');
                load.setAttribute('class', 'hidden');
            }
        };
        
        
        xhr.open("GET", Gallery.url, true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
        xhr.send(null); //Skicka svaret på frågan till servern
        
    }
};

//Gallery.init();
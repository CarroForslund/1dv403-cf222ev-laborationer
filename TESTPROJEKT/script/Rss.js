'use strict';
function Rss(window) {
    this.content = window.content;
    this.footer = window.footer;
}

Rss.prototype.openRss = function(){
    var url = 'http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/';
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){

        if (xhr.readyState === 4){
            if (xhr.status === 200){
                var rssFeed = xhr.responseText;
                var windowBody = this.content;
                
                windowBody.innerHTML= rssFeed;
            }
            else {
                console.log('Läsfel, status: '+xhr.status);
            }
            var load = this.footer.querySelector('.load');
            load.setAttribute('class', 'hidden');
        }
    }.bind(this); // gör att jag kan komma åt this uppifrån
    xhr.open("GET", url+'?url='+escape('http://www.dn.se/m/rss/senaste-nytt'), true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
    xhr.send(null);
};
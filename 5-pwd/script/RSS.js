'use strict';
var NS = NS || {};
NS.RSS = function(window) {
    this.content = window.content;
    this.footer = window.footer;
    this.load = this.footer.querySelector('.load');
};

NS.RSS.prototype.openRSS = function(){
    var windowBody = this.content;
    //console.log(this.load);
    console.log('uppdatering av rss - check!');
    var url = 'http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url='+escape('http://www.dn.se/m/rss/senaste-nytt');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                var rssFeed = xhr.responseText;
                windowBody.innerHTML= rssFeed;
            }
            else {
                console.log('Läsfel, status: '+xhr.status);
            }
            this.load.setAttribute('class', 'hidden');
        }
    }.bind(this);
    
    xhr.open("GET", url, true);
    xhr.send(null);

};
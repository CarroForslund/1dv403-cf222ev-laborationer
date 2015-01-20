'use strict';
var NS = NS || {};
NS.Window = function(desktop) {
    var template = document.querySelector('#windowTemplate'); //Hämta huvudtemplate
    var tmp = document.documentMode;
    
    //För att få template att fungera med IE då den inte hanterar content
    var windowTemplate;
    if(tmp){
         windowTemplate = template.querySelector(".window");
    }else{
         windowTemplate = template.content.querySelector(".window");
    }
    
    this.window = windowTemplate.cloneNode(true); //Klonar window
    desktop.content.appendChild(this.window); //Lägg till window till desktop
};

NS.Window.zIndex = 0;

NS.Window.prototype.focus = function(){
    NS.Window.zIndex = NS.Window.zIndex + 1;
};

NS.Window.prototype.openWindow = function(type, imagesrc, zIndex, winMarginTop, winMarginLeft){
    NS.Window.prototype.focus();
    //Hämtar ut element från window
    this.close = this.window.querySelector('.close');
    this.icon = this.window.querySelector('.windowIcon');
    this.header = this.window.querySelector('.windowHeader');
    this.content = this.window.querySelector('.windowBody');
    this.footer = this.window.querySelector('.windowFooter');
    this.title = this.window.querySelector('.windowTitle');

    var title = document.createTextNode(type);
    this.title.appendChild(title);
    this.icon.setAttribute('src', imagesrc);
    this.icon.setAttribute('alt', type);

    this.window.style.zIndex=NS.Window.zIndex;
    this.window.style.marginTop=winMarginTop+'px';
    this.window.style.marginLeft=winMarginLeft+'px';
    
    //Stäng fönstret och kasta bort
    this.close.addEventListener('click', function(e){
        e.preventDefault();
        this.window.parentNode.removeChild(this.window); //kunde ha lagt "var throwAwayNode =" innan
        clearInterval(this.rssUpdate);
    }.bind(this));
    
    //Lyft fram fönster i fokus när man klickar på det
    this.window.addEventListener('click', function(e){
        e.preventDefault();
        NS.Window.prototype.focus();
        this.window.style.zIndex=NS.Window.zIndex;
    }.bind(this));
    
    switch (type) {
        case 'RSS':
            var rss = new NS.RSS(this);
            this.rssUpdate = setInterval(function(){
                rss.openRSS();
            }, 3000);
            break;
        
        case 'Memory':
            var memory = new NS.Memory(this);
            memory.openMemory();
            break;
        
        default:
            var gallery = new NS.Gallery(this);
            gallery.openGallery();
    }
};
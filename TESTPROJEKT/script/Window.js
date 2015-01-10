'use strict';
function Window(desktop) {
    //this.content = document.querySelector('#windowTemplate');
    //var myWindow = document.querySelector('.window');
    //this.windowClone = myWindow.cloneNode(true); //var dupNode = node.cloneNode(deep);
    
    var template = document.querySelector('#windowTemplate'); //Hämta huvudtemplate
    var windowTemplate = template.content.querySelector('.window'); //För att hämta innehållet måste jag använda content
    
    //Klonar window
    this.window = windowTemplate.cloneNode(true);
    //Hämtar ut element från window
    //this.title = this.window.querySelector('.windowTitle');
    this.close = this.window.querySelector('.close');
    //this.header = this.window.querySelector('.windowHeader');
    this.content = this.window.querySelector('.windowBody');
    this.footer = this.window.querySelector('.windowFooter');
    
    //Lägg till window till desktop
    desktop.content.appendChild(this.window);
}

Window.prototype.openWindow = function(type, imagesrc, zIndex, winMargin){
    console.log();
    
    // OBS!!! Fungerar inte korrekt!!!
    // if ((winMargin + this.window.clientHeight) < (desktopHeight + this.window.clientHeight)){
    //     this.window.style.zIndex=zIndex;
    //     this.window.style.margin=winMargin+'px';
    // }
    // else{
    //     zIndex=10;
    //     winMargin=100;
    //     this.window.style.zIndex=zIndex;
    //     this.window.style.margin=winMargin+'px';
    // }
    this.window.style.zIndex=zIndex;
    this.window.style.margin=winMargin+'px';
    
    this.close.addEventListener('click', function(e){
        e.preventDefault();
        var throwAwayNode = this.window.parentNode.removeChild(this.window); //https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild
    }.bind(this));
    
    switch (type) {
        case 'RSS':
            var rss = new Rss(this);
            rss.openRss();
            break;
        
        case 'Memory':
            var memory = new Memory(this);
            memory.openMemory();
            break;
        
        default:
            var gallery = new Gallery(this);
            gallery.openGallery();
    }
    
    // if (type === 'Gallery'){
    //     var gallery = new Gallery(this);
    //     gallery.openGallery();
    // }
    // else if (type === 'RSS'){
    //     //var rss = new Rss(this);
    //     //rss.openRss();
    // }
};
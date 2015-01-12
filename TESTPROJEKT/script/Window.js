'use strict';
function Window(desktop) {
    var template = document.querySelector('#windowTemplate'); //Hämta huvudtemplate
    var tmp = document.documentMode;
    
    //Richard googlade fram denna lösning med if-satsen för att få template att fungera i IE
    //då den inte klarar av att hantera content
    var windowTemplate;
    if(tmp){
         windowTemplate = template.querySelector(".window");
    }else{
         windowTemplate = template.content.querySelector(".window"); //För att hämta innehållet måste jag använda content
    }
    
    this.window = windowTemplate.cloneNode(true); //Klonar window
    desktop.content.appendChild(this.window); //Lägg till window till desktop
}

Window.prototype.openWindow = function(type, imagesrc, zIndex, winMarginTop, winMarginLeft){
    zIndex += 1;
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

    this.window.style.zIndex=zIndex;
    this.window.style.marginTop=winMarginTop+'px';
    this.window.style.marginLeft=winMarginLeft+'px';
    
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
};
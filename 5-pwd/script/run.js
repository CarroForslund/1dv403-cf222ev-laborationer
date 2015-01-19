'use strict';
var NS = NS || {};
NS.run = function(){
    //console.log(window);
    var desktop = new NS.Desktop();
    desktop.addApp('Gallery', 'images/gallery.png');
    desktop.addApp('RSS', 'images/rss.png');
    desktop.addApp('Memory', 'images/memory.png');
};

window.onload = NS.run();
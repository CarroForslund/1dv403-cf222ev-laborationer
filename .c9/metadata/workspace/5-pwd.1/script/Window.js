{"changed":true,"filter":false,"title":"Window.js","tooltip":"/5-pwd.1/script/Window.js","value":"'use strict';\nfunction Window() {\n    var template = document.querySelector('#windowTemplate');\n    var myWindow = document.querySelector('.window');\n    this.windowClone = myWindow.cloneNode(true); //var dupNode = node.cloneNode(deep);\n}\n\nWindow.prototype.openWindow = function(type, imagesrc){\n    var windowArea, close;\n    \n    close.addEventListener('click', function(e){\n        e.preventDefault();\n        var throwAwayNode = template.removeChild(windowClone); //https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild\n    });\n    \n    if (type = 'Gallery'){\n        var gallery = new Gallery(this);\n        gallery.openGallery();\n    }\n};","undoManager":{"mark":-212,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":4,"column":53},"end":{"row":4,"column":54},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":54},"end":{"row":4,"column":55},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":55},"end":{"row":4,"column":56},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":56},"end":{"row":4,"column":57},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":57},"end":{"row":4,"column":58},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":58},"end":{"row":4,"column":59},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":65},"end":{"row":4,"column":66},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":66},"end":{"row":4,"column":67},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":67},"end":{"row":4,"column":68},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":68},"end":{"row":4,"column":103},"action":"insert","lines":["var dupNode = node.cloneNode(deep);"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":95},"action":"remove","lines":["    //this.windowContent = document.querySelector('.windowBody'); //this är här window-objektet"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":61},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":61},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":61},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":58},"end":{"row":3,"column":59},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":57},"end":{"row":3,"column":58},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":56},"end":{"row":3,"column":57},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":55},"end":{"row":3,"column":56},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":54},"end":{"row":3,"column":55},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":53},"end":{"row":3,"column":54},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":52},"end":{"row":3,"column":53},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":51},"end":{"row":3,"column":52},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":50},"end":{"row":3,"column":51},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":49},"end":{"row":3,"column":50},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":48},"end":{"row":3,"column":49},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":30},"action":"remove","lines":["document"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":61},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":19},"end":{"row":3,"column":61},"action":"insert","lines":["document.querySelector('#windowTemplate');"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":50},"end":{"row":3,"column":58},"action":"remove","lines":["Template"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":30},"action":"remove","lines":["template"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":25},"action":"remove","lines":["myW"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":30},"action":"insert","lines":["myWindow"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":49},"end":{"row":12,"column":55},"action":"remove","lines":["window"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":51},"end":{"row":12,"column":52},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":52},"end":{"row":12,"column":53},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":53},"end":{"row":12,"column":54},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":54},"end":{"row":12,"column":55},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":49},"end":{"row":12,"column":55},"action":"remove","lines":["window"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":60},"action":"insert","lines":["windowClone"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["var "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["."]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":5},"end":{"row":18,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1420811364870}
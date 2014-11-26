"use strict";
var MessageBoard = {
    
    
     
    init:function(e){

        var messages = ["mess0", "mess1", "mess2"];
        messages.push("mess3");
        
        var mess = new Message("Testmeddelande", new Date());
        alert(mess); //använder toString för utskrift
        alert(mess.getText()); //Skriver enbart ut texten
        mess.setText("En annan text");
        alert(mess); //Skriver ut meddelandet med ändrad text
        
    }
};

//console.log(MessageBoard.messages[2].getText());
//window.onload = MessageBoard.init;
"use strict";
window.onload = function(){
    var MessageBoard = {
    
        messages: [],
        
        init: function(value){
    
            var mess = new Message(value, new Date());
            MessageBoard.messages.push(mess);
        },
        
        renderMessages: function(){
            //Radera alla meddelanden
            document.getElementById("messagearea1").innerHTML = "";
            
            //Rendera alla meddelanden
            for (var i = 0; i < MessageBoard.messages.length; i += 1){
                MessageBoard.renderMessages(i);
            }
        },
        
        renderMessage: function(messageId){
            //Meddelande
            var text = document.createElement("p");
            text.innerHTML = MessageBoard.messages[messageId -1].getHTMLText();
            
            var div = document.createElement("div");
            div.appendChild(text);
            document.getElementById("messagearea1").appendChild(div);
            
        }
    };
    
    // Kod för att hantera utskrift och inmatning
    var input = document.querySelector("#text");
    var submit = document.querySelector("#send1");
    
    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function(e){
    	e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
    	MessageBoard.init(input.value);
    	MessageBoard.renderMessage(MessageBoard.messages.length);
    	console.log(MessageBoard.messages);
    });

};
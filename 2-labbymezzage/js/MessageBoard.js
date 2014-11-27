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
            var div = document.createElement("div");
            var messArea = document.getElementById("messagearea1");
            var count = document.getElementById("count1");
            
            count.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length
            text.innerHTML = MessageBoard.messages[messageId -1].getHTMLText();
            messArea.appendChild(div);
            div.appendChild(text);
            
            imgClose.alt="Close";
            imgClose.onclick = function(){
                MessageBoard.removeMessage(messageId);
            };
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
    	input.value = "";
    });

};
"use strict";
window.onload = function(){
    var MessageBoard = {
    
        messages: [],
        
        addMess: function(value){
    
            var mess = new Message(value, new Date());
            MessageBoard.messages.push(mess);
            console.log(MessageBoard.messages);
            MessageBoard.renderMessage(MessageBoard.messages.length - 1);
            
        },
        
        renderMessages: function(){
            //Radera alla meddelanden
            document.getElementById("messagearea1").innerHTML = "";
            
            //Rendera alla meddelanden
            for (var i = 0; i < MessageBoard.messages.length; i += 1){
                MessageBoard.renderMessage(i);
            }
        },
        
        renderMessage: function(messageId){
            //Meddelande
            var text = document.createElement("p");
            var time = document.createElement("p");
            var div = document.createElement("div");
            var div2 = document.createElement("div");
            var deleteLink = document.createElement("a");
            var timeLink = document.createElement("a");
            var deleteImg = document.createElement("img");
            var timeImg = document.createElement("img");
            var messArea = document.getElementById("messagearea1");
            
            div.setAttribute("class", "message");
            div2.setAttribute("class", "info");
            
            text.setAttribute("class", "text");
            time.setAttribute("class", "time");
            
            deleteLink.setAttribute("href", "#");
            
            timeLink.setAttribute("href", "#");
            
            deleteImg.setAttribute("src", "img/delete.png");
            deleteImg.setAttribute("alt", "Radera meddelande");
            deleteImg.setAttribute("class", "messImg");
            
            timeImg.setAttribute("src", "img/info.png");
            timeImg.setAttribute("alt", "Meddelande publicerat klockan");
            timeImg.setAttribute("class", "messImg");
            
            deleteLink.onclick = function(){
                MessageBoard.removeMessage(messageId);
            };
            
            timeLink.onclick = function(){
                alert(MessageBoard.messages[messageId].toString());
            };
            
            MessageBoard.messageCount();
            text.innerHTML = MessageBoard.messages[messageId].getHTMLText();
            time.innerHTML = MessageBoard.messages[messageId].getDateText();
            messArea.appendChild(div);
            div.appendChild(div2);
            div.appendChild(text);
            div.appendChild(time);
            div2.appendChild(deleteLink);
            div2.appendChild(timeLink);
            deleteLink.appendChild(deleteImg);
            timeLink.appendChild(timeImg);
        },
        
        removeMessage: function(messageId){
            MessageBoard.messages.splice(messageId, 1);
            MessageBoard.renderMessages();
            MessageBoard.messageCount();
        },
        
        messageCount: function(){
            var count = document.getElementById("count1");
            count.innerHTML = "<p>Antal meddelanden: " + MessageBoard.messages.length +"</p>";
        }
    };
    
    // Kod för att hantera utskrift och inmatning
    var input = document.querySelector("#text");
    var submit = document.querySelector("#send1");
    var messArea = document.querySelector("#text");
    
    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function(e){
    	e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
    	MessageBoard.addMess(input.value);
    	//MessageBoard.renderMessage(MessageBoard.messages.length - 1);
    	input.value = "";
    });
    
    messArea.addEventListener("keypress", function(e){
        if (!e){
            e = window.event;
        }
        if (e.keyCode == 13 && !e.shiftKey){
            e.preventDefault();
            MessageBoard.addMess(input.value);
            //MessageBoard.addMess();
            input.value = "";
        }
    });
};
"use strict";
// OBS! Ta bort S:et i https:  http://1dv403-cf222ev-laborationer-carroforslund.c9.io/4-thequiz/

var Quiz = {
    
    url: "http://vhost3.lnu.se:20080/question/1",
    postURL: null,
    
    init: function(){
        var submit = document.querySelector("#submit");
        Quiz.getQuiz(Quiz.url);
        submit.addEventListener("click", function (e) {   
            e.preventDefault();
                if (document.querySelector("#answer")) {
                Quiz.postQuiz(document.querySelector("#answer").value.trim());
            }
        }, false);
    },
    
    getQuiz: function (url){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    var text = JSON.parse(xhr.responseText);
                    Quiz.question(text.question);
                    console.log(text);
                    Quiz.postURL = text.nextURL;
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
        };
        
        xhr.open("GET", url, true); //Synkront = false (webbapplikation) | Asynkront = true (webbsida)
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null); //Skicka svaret på frågan till servern
        
    },
    
    postQuiz: function (userinput){ //få in svar på frågan + nextURL för att jämföra
    console.log("Quiz.postQuiz");
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    var text = JSON.parse(xhr.responseText);
                    Quiz.question(text.message);
                    Quiz.getQuiz(text.nextURL);
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
        };
        
        var theAnswer = {
            answer: userinput
        };
        
        if (Quiz.postURL){
            xhr.open("POST", Quiz.postURL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(theAnswer)); //Skicka svaret på frågan till servern
        }
    },
    
    question: function(question){
        var questionArea = document.getElementById("question");
        questionArea.innerHTML = "<p>" +question+ "</p>";
    },
};

window.onload = function(){
    Quiz.init();
};
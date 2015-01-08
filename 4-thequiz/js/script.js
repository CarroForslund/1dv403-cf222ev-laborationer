"use strict";
// OBS! Ta bort S:et i https:  http://1dv403-cf222ev-laborationer-carroforslund.c9.io/4-thequiz/

var Quiz = {
    
    url: "http://vhost3.lnu.se:20080/question/1",
    postURL: undefined,
    text: undefined,
    trialArray: [],
    numberOfTrials: 0,
    
    init: function(){
        var submit = document.querySelector("#submit");
        Quiz.getQuiz(Quiz.url);
        submit.addEventListener("click", function (e) {   
            e.preventDefault();
            Quiz.numberOfTrials += 1;
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
                    Quiz.text = JSON.parse(xhr.responseText);
                    Quiz.question(Quiz.text.question);
                    console.log(Quiz.text);
                    Quiz.postURL = Quiz.text.nextURL;
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
        var answer = document.querySelector("#answer");
        answer.value = "";
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    Quiz.text = JSON.parse(xhr.responseText);
                    Quiz.trialArray.push(Quiz.numberOfTrials);
                    Quiz.numberOfTrials = 0;
                    console.log("Rätt svar");
                    var wrong = document.getElementById("wrong");
                    wrong.setAttribute('class', 'hidden');
                    //Quiz.question(text.message);
                    if ("nextURL" in Quiz.text){
                        Quiz.getQuiz(Quiz.text.nextURL);
                    }
                    else {
                        Quiz.trials(Quiz.trialArray);
                        //console.log('Grattis! Du klarade frågorna på ' +Quiz.numberOfTrials+ ' antal försök');
                    }
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                    console.log("fel svar, försök igen");
                    Quiz.wrong(userinput);
                }
                console.log(Quiz.numberOfTrials);
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
        questionArea.innerHTML = "<p>" +question+"</p>";
    },
    
    wrong: function(answer){
        var wrong = document.getElementById("wrong");
        wrong.removeAttribute('class', 'hidden');
        wrong.innerHTML = "<p>" +answer+ " är fel svar. Försök igen.</p>";
    },
    
    trials: function(trialArray){
        var trials = document.getElementById("trials");
        trials.removeAttribute('class', 'hidden');
        trials.innerHTML = "";
        for (var i = 0; i < trialArray.length; i+= 1){
            var p = document.createElement('p');
            p.innerHTML = "Fråga " +(i + 1)+ ": " +trialArray[i]+ " försök.";
            trials.appendChild(p);
        }
    }
};

window.onload = function(){
    Quiz.init();
};
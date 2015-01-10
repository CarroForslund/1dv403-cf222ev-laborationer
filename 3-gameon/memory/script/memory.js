"use strict";
var Memory = {
    
    firstClick : null,
    secondClick : null,
    score : 0,
    maxScore: 0,
    countClick : 0,
    imageLinks: [],

    init: function(){
        var rows = 4;
        var cols = 4;
        var randomNumbers = [];
        Memory.maxScore = rows * cols / 2;
        
        //Memory kan bytas ut mot this
        randomNumbers = RandomGenerator.getPictureArray(rows, cols);
        console.log(""+randomNumbers+"");
        Memory.generateTable(rows, cols, randomNumbers);
    },
    
    generateTable: function(rows, cols, randomNumbers){
        var board1, table, tableBody, tableRow, tableCell, link, image, imageNumber, imageClass;

        board1 = document.getElementById("board1");
        board1.innerHTML = "";
        //Skapa tabellelementen i board1
        table = document.createElement("table");
        tableBody = document.createElement("tbody");
        
        table.appendChild(tableBody);
        board1.appendChild(table);
        
        for(var i = 0; i < cols; i++){
            tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            
            for (var j = 0; j < rows; j++){
                tableCell = document.createElement("td");
                link = document.createElement("a");
                image = document.createElement("img");
                
                imageNumber = ((j * cols) + i);
                imageClass = ""+randomNumbers[imageNumber]+"";
                
                image.setAttribute("src", "pics/9.png");
                image.setAttribute("alt", "?");
                image.setAttribute("class", imageClass);
                image.image = imageClass;
                image.flipped = false;
                link.setAttribute("href", "#");
                
                tableRow.appendChild(tableCell);
                tableCell.appendChild(link);
                link.appendChild(image);
                
                Memory.imageLinks.push(link);

                link.addEventListener('click', Memory.flipCard);
            }
        }
    },
    
    flipCard : function(){ //skriver jag in e som parameter kan jag sedan använda e.target om jag vill
    
        var img = this.firstChild;
        //om if statement = true går man in i loopen. 
        if (!img.flipped){
        
            //Genom att skriva på det här viset kommer jag åt variabeln link i 
            //generateTable även i metod setTimeout
            //var that = this;
            var counter;

            Memory.countClick += 1;
            img.flipped = true;
            console.log(Memory.countClick);
            counter = document.getElementById("count1");
            if (Memory.countClick%2 === 0){
                counter.innerHTML = "<p>Försök: " +(Memory.countClick/2)+ "<br />Poäng: " +Memory.score+ "</p>";
            }
            
            //this (alt e.target) är här motsvarande variablen link i generateTable, 
            //eftersom det är link som kör igång funktionen
            var imageClass = img.getAttribute('class');
            img.setAttribute("src", "pics/"+imageClass+".jpg");
    
            if (Memory.firstClick === null){
                //Tilldela klick 1 ett värde
                Memory.firstClick = img;
                this.removeEventListener('click', Memory.flipCard);
                console.log("firstClick har värdet" +Memory.firstClick.getAttribute('class'));
            }
            else if (Memory.firstClick !== null && Memory.secondClick === null) {
                //Tilldela klick 2 ett värde
                Memory.secondClick = img;
                console.log("secondClick har värdet" +Memory.secondClick.getAttribute('class'));
                
                //Om bilderna är lika ska dom inte vara klickbara längre
                if (Memory.firstClick.getAttribute('class') === Memory.secondClick.getAttribute('class')){
                    console.log("Bra jobbat!");
                    Memory.score += 1;
                    counter.innerHTML = "<p>Antal klick: " +Memory.countClick+ "<br />Poäng: " +Memory.score+ "</p>";
                    if (Memory.score === Memory.maxScore){
                        alert("Grattis! Du klarade spelet på " +(Memory.countClick/2)+ " försök.");
                        //Här ska spelet startas om/sidan laddas om, Memory.init
                    }
                    Memory.clearClickData();
                    this.removeEventListener('click', Memory.flipCard);
                }
                else {
                    console.log("Fel, försök igen");
                    for (var i = 0; i < Memory.imageLinks.length; i++) {
                        Memory.imageLinks[i].removeEventListener('click', Memory.flipCard);
                    }
                    setTimeout(function(){
                        //that hänvisar här till link i generateTable
                        Memory.firstClick.flipped = false;
                        Memory.secondClick.flipped = false;
                        Memory.firstClick.setAttribute("src", "pics/9.png");
                        Memory.secondClick.setAttribute("src", "pics/9.png");
                        console.log("firstClick = " +Memory.firstClick.getAttribute('class') + ", secondClick = " +Memory.secondClick.getAttribute('class'));
                        Memory.firstClick.addEventListener('click', Memory.flipCard);
                        Memory.secondClick.addEventListener('click', Memory.flipCard);
                        if (Memory.firstClick.getAttribute('src') === "pics/9.png" && Memory.secondClick.getAttribute('src') === "pics/9.png") {
                            for (var i = 0; i < Memory.imageLinks.length; i++) {
                                Memory.imageLinks[i].addEventListener('click', Memory.flipCard);
                            }
                        }
                        Memory.clearClickData();
                    }, 1000);
                }
            }
        }
    },
    
    clearClickData: function(){
        Memory.firstClick = null;
        Memory.secondClick = null;
    }
    
};

window.onload = function(){
     var memory1 = Memory.init();
};
"use strict";
var Memory = {
    
    firstClick : null,
    secondClick : null,
    score : 0,
    maxScore: 0,
    // rows: 4,
    // cols: 4,
    // maxScore: Memory.rows * Memory.cols / 2,
    countClick : 0,
    randomNumbers : [],
    imageLinks: [],

    init: function(){
        var rows = 4;
        var cols = 4;
        
        Memory.maxScore = rows * cols / 2;
        
        //Memory kan bytas ut mot this
        Memory.randomNumbers = RandomGenerator.getPictureArray(rows, cols);
        console.log(""+Memory.randomNumbers+"");
        Memory.generateTable(rows, cols, Memory.randomNumbers);
    },
    
    generateTable: function(rows, cols, randomNumbers){
        var board1, table, tableBody, tableRow, tableCell, link, image, imageNumber, imageClass;

        //Hämta board1 från index.html för att kunna manipulera den
        board1 = document.getElementById("board1");
        board1.innerHTML = "";
        //Skapa tabellelementen i board1
        table = document.createElement("table");
        tableBody = document.createElement("tbody");
        
        //Skriv ut Table och Table Body
        table.appendChild(tableBody);
        board1.appendChild(table);
        
        for(var i = 0; i < cols; i++){
            //Skapa och sriv ut tabellrader
            tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            
            for (var j = 0; j < rows; j++){
                //Skapa tabellceller och innehåll
                tableCell = document.createElement("td");
                link = document.createElement("a");
                image = document.createElement("img");
                
                imageNumber = ((j * cols) + i);
                imageClass = ""+Memory.randomNumbers[imageNumber]+"";
                
                //Sätt attribut
                image.setAttribute("src", "pics/0.png");
                image.setAttribute("alt", "?");
                image.setAttribute("class", imageClass);
                image.image = imageClass;
                image.flipped = false;
                link.setAttribute("href", "#");
                
                //Skriv ut tabellceller och deras innehåll
                tableRow.appendChild(tableCell);
                tableCell.appendChild(link);
                link.appendChild(image);
                
                Memory.imageLinks.push(image);
                
                image.addEventListener('click', Memory.flipCard);
            }
        }
    },
    
    flipCard : function(){ //skriver jag in e som parameter kan jag sedan använda e.target om jag vill
        
        //om if statement = true går man in i loopen. 
        if (!this.flipped){
        
            //Genom att skriva på det här viset kommer jag åt variabeln image i 
            //generateTable även i metod setTimeout
            var that = this;
            var counter;
            
            console.log(this);
            
            //Registrera antal klick
            Memory.countClick += 1;
            this.flipped = true;
            console.log(Memory.countClick);
            counter = document.getElementById("count1");
            counter.innerHTML = "<p>Antal klick: " +Memory.countClick+ "<br />Poäng: " +Memory.score+ "</p>";
            
            //this (alt e.target) är här motsvarande variablen image i generateTable, 
            //eftersom det är image som kör igång funktionen
            var imageClass = this.getAttribute('class');
            this.setAttribute("src", "pics/"+imageClass+".png");
    
            //Klick 1, 3, 5, 7, osv.
            if (Memory.firstClick === null){
                //Tilldela klick 1 ett värde
                Memory.firstClick = this;
                this.removeEventListener('click', Memory.flipCard);
                console.log("firstClick har värdet" +Memory.firstClick.getAttribute('class'));
            }
            //Klick 2, 4, 6, 8 osv.
            else if (Memory.firstClick !== null && Memory.secondClick === null) {
                //Tilldela klick 2 ett värde
                Memory.secondClick = this;
                console.log("secondClick har värdet" +Memory.secondClick.getAttribute('class'));
                
                //Om bilderna är lika ska dom inte vara klickbara längre
                if (Memory.firstClick.getAttribute('class') === Memory.secondClick.getAttribute('class')){
                    console.log("Bra jobbat!");
                    Memory.score += 1;
                    counter.innerHTML = "<p>Antal klick: " +Memory.countClick+ "<br />Poäng: " +Memory.score+ "</p>";
                    //Om alla par är hittade är spelet avslutat
                    if (Memory.score === Memory.maxScore){
                        alert("Grattis! Du klarade spelet på " + (Memory.countClick / 2 )+ " försök ("+(Memory.countClick)+" klick).");
                        //Här ska spelet startas om/sidan laddas om
                        //Memory.init();
                    }
                    Memory.clearClickData();
                    this.removeEventListener('click', Memory.flipCard);
                }
                else {
                    console.log("Fel, försök igen");
                    for (var i = 0; i < Memory.imageLinks.length; i++) {
                        Memory.imageLinks[i].removeEventListener('click', Memory.flipCard);
                    }
                    //Vänd tillbaka bilden efter 1 sekund
                    setTimeout(function(){
                        //that hänvisar här till image i generateTable
                        //imageClass = that.getAttribute('class');
                        Memory.firstClick.flipped = false;
                        Memory.secondClick.flipped = false;
                        Memory.firstClick.setAttribute("src", "pics/0.png");
                        Memory.secondClick.setAttribute("src", "pics/0.png");
                        console.log("firstClick = " +Memory.firstClick.getAttribute('class') + ", secondClick = " +Memory.secondClick.getAttribute('class'));
                        Memory.firstClick.addEventListener('click', Memory.flipCard);
                        Memory.secondClick.addEventListener('click', Memory.flipCard);
                        if (Memory.firstClick.getAttribute('src') === "pics/0.png" && Memory.secondClick.getAttribute('src') === "pics/0.png") {
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
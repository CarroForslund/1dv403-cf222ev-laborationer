"use strict";
//Statiskt objekt
var Memory = {
    firstClick : null,
    secondClick : null,
    
    "randomNumbers": [],
    
    "init": function(){
        var rows = 4;
        var cols = 4;
        
        //this hänvisar här till Memory
        this.randomNumbers.push(RandomGenerator.getPictureArray(rows, cols));
        this.generateTable(rows, cols, this.randomNumbers);
        //alert("Testar att skriva ut arrayen randomImages: "+Memory.randomImages);
    },
    
    "generateTable": function(rows, cols, randomNumbers){
        var board1, table, tableBody, tableRow, tableCell, link, image, imageNumber, imageClass;

        //Hämta board1 från index.html för att kunna manipulera den
        board1 = document.getElementById("board1");
        
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
            
            for(var j = 0; j < rows; j++){
                //Skapa tabellceller och innehåll
                tableCell = document.createElement("td");
                link = document.createElement("a");
                image = document.createElement("img");
                
                imageNumber = ((j * rows) + i);
                imageClass = ""+this.randomNumbers[0][imageNumber]+"";
                
                //Sätt attribut
                image.setAttribute("src", "pics/0.png");
                image.setAttribute("alt", "?");
                image.setAttribute("class", imageClass);
                link.setAttribute("href", "#");
                
                //Skriv ut tabellceller och deras innehåll
                tableRow.appendChild(tableCell);
                tableCell.appendChild(link);
                link.appendChild(image);
                
                image.addEventListener('click', this.flipCard);
            }
        }
    },
    
    flipCard : function(){
        //this hänvisar här till image i generateTable
        var imageClass = this.getAttribute('class');
        this.setAttribute("src", "pics/"+imageClass+".png");
    }
};

window.onload = function(){
    var memory1 = Memory.init();
};
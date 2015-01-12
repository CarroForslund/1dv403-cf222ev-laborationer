"use strict";
function Memory(window) {
    this.content = window.content;
    this.footer = window.footer;
    Memory.prototype.openMemory();
}

Memory.prototype.openMemory = function(){

    var windowBody = this.content;
    var counter, load;
    var firstClick = null;
    var secondClick = null;
    var score = 0;
    var maxScore = 0;
    var countClick = 0;
    var imageLinks = [];
    var rows = 4;
    var cols = 4;
    var randomNumbers = [];
    maxScore = rows * cols / 2;
    
    randomNumbers = RandomGenerator.getPictureArray(rows, cols);
    console.log(""+randomNumbers+"");
    generateTable(rows, cols, randomNumbers);
    load = this.footer.querySelector('.load');
    load.setAttribute('class', 'hidden');
    
    function generateTable(rows, cols, randomNumbers){
        var table, tableBody, tableRow, tableCell, link, image, imageNumber, imageClass;
        
        windowBody.innerHTML = ""; //Töm memory
        //Skapa tabellelementen i windowBody
        table = document.createElement("table");
        tableBody = document.createElement("tbody");
        counter = document.createElement("div");
        table.appendChild(tableBody);
        windowBody.appendChild(table);
        windowBody.appendChild(counter);
        
        for(var i = 0; i < cols; i++){
            tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            
            for (var j = 0; j < rows; j++){
                tableCell = document.createElement("td");
                link = document.createElement("a");
                image = document.createElement("img");
                
                imageNumber = ((j * cols) + i);
                imageClass = ""+randomNumbers[imageNumber]+"";
                
                image.setAttribute("src", "images/memory/9.png");
                image.setAttribute("alt", "?");
                image.setAttribute("class", imageClass);
                image.image = imageClass;
                image.flipped = false;
                link.setAttribute("href", "#");
                
                tableRow.appendChild(tableCell);
                tableCell.appendChild(link);
                link.appendChild(image);
                
                //Memory.imageLinks.push(link); //Ordinarie rad
                imageLinks.push(link); //Ersättande rad

                //link.addEventListener('click', Memory.flipCard); //Ordinarie rad
                link.addEventListener('click', flipCard); //Ersättande rad
            }
        }
    }
    function flipCard(){ //skriver jag in e som parameter kan jag sedan använda e.target om jag vill
        var img = this.firstChild;
        //om if statement = true går man in i loopen.
        if (!img.flipped){
            //var counter;
            countClick += 1;
            img.flipped = true;
            console.log('Antal klick '+countClick);
            //counter = document.querySelector("counter");
            //counter = document.createElement("div");
            //windowBody.appendChild(counter);
            if (countClick%2 === 0){
                counter.innerHTML = "<p>Försök: " +(countClick/2)+ "<br />Poäng: " +score+ "</p>";
            }
            var imageClass = img.getAttribute('class');
            img.setAttribute("src", "images/memory/"+imageClass+".png");
            if (firstClick === null){
                //Tilldela klick 1 ett värde
                firstClick = img;
                this.removeEventListener('click', flipCard);
                console.log("firstClick har värdet" +firstClick.getAttribute('class'));
            }
            else if (firstClick !== null && secondClick === null) {
                //Tilldela klick 2 ett värde
                secondClick = img;
                console.log("secondClick har värdet" +secondClick.getAttribute('class'));
                //Om bilderna är lika ska dom inte vara klickbara längre
                if (firstClick.getAttribute('class') === secondClick.getAttribute('class')){
                    console.log("Bra jobbat!");
                    score += 1;
                    counter.innerHTML = "<p>Försök: " +(countClick/2)+ "<br />Poäng: " +score+ "</p>";
                    if (score === maxScore){
                        alert("Grattis! Du klarade spelet på " +(countClick/2)+ " försök.");
                    }
                    clearClickData();
                    this.removeEventListener('click', flipCard);
                }
                else {
                    console.log("Fel, försök igen");
                    for (var i = 0; i < imageLinks.length; i++) {
                        imageLinks[i].removeEventListener('click', flipCard);
                    }
                    setTimeout(function(){
                        firstClick.flipped = false;
                        secondClick.flipped = false;
                        firstClick.setAttribute("src", "images/memory/9.png");
                        secondClick.setAttribute("src", "images/memory/9.png");
                        console.log("firstClick = " +firstClick.getAttribute('class') + ", secondClick = " +secondClick.getAttribute('class'));
                        firstClick.parentNode.addEventListener('click', flipCard);
                        secondClick.parentNode.addEventListener('click', flipCard);
                        if (firstClick.getAttribute('src') === "images/memory/9.png" && secondClick.getAttribute('src') === "images/memory/9.png") {
                            for (var i = 0; i < imageLinks.length; i++) {
                                imageLinks[i].addEventListener('click', flipCard);
                            }
                        }
                        clearClickData();
                    }, 1000);
                }
            }
        }
    }
    function clearClickData(){
        firstClick = null;
        secondClick = null;
    }
};
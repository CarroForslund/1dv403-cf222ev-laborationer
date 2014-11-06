"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		
		if (isNaN(str)){
			//var replaced = "";
			var newStr = "";
			
			for (var i = 0; i < str.length; i++){
				//replaced +=  str[i].replace("a", "#").replace("A", "#");
				
				if(str[i] == str[i].toUpperCase() ){
					newStr += str[i].replace("A", "#").toLowerCase();
				}else{
					newStr += str[i].replace("a", "#").toUpperCase();
				}
			}
			return [newStr];
		}
		else {
			return ["Du måste skriva in något att omvandla och du kan inte skriva enbart siffror."];
		}

				/*if (str.charCodeat(i) >= 65 && str.charCodeat(i) =< 90 || str.charCodeat(i) = 197 || str.charCodeat(i) = 196 || str.charCodeat[i] = 214){
					var newStr = str.charCodeat[i].replace(/A/g, "#").toLowerCase;
				}
				else{
					str.charCodeat[i].replace("a", "#").toUpperCase;
				}*/
				
				
				/*for (var i = 0; i < str.length; i+=1){
				
				var char = str[i];
				
				if (char === "a" || char === "A"){
					var a = char;
					char.replace(a, "#");
				}
			}
			console.log(char);*/
			
			//return [char];


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		//Om inmatat värde är en sträng
		//loopar vi genom varje tecken och byter ut a/A mot #
		//och gör gemener till versaler och vice versa
		//samt därefter skriver ut den modifierade/nya strängen.
		//Om inmatat värde inte är en sträng skrivs ett felmeddelande ut
		if (isNaN(str)){
			var newStr = "";
			
			for (var i = 0; i < str.length; i++){
				
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
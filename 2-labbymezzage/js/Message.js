"use strict";
function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function (_date){
        date = _date;
    };
}

Message.prototype.toString = function(){
    var date, day, month, year;
    month = ["januari", "februari", "mars", "april", "maj", "juni",
    "juli", "augusti", "september", "oktober", "november", "december"];
    
    date = this.getDate();
    day = date.getDate();
    month = month[date.getMonth()];
    year = date.getFullYear();
    
    return "Detta meddelande publicerades " +day+ " " +month+ " " +year+
    " klockan " +this.getDateText();
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "<br />");
};

Message.prototype.getDateText = function(){
    var date = this.getDate();
    var hours, minutes, seconds, time;
    
    hours = Message.twoDigits(date.getHours());
    minutes = Message.twoDigits(date.getMinutes());
    seconds = Message.twoDigits(date.getSeconds());
    time = hours + ":" + minutes + ":" + seconds;
    
    return time.toString();
};

Message.twoDigits = function(digit){
    if(digit < 10){
        digit = "0" + digit;
    }
    return digit;
}
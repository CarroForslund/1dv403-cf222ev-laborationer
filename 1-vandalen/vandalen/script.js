"use strict";

var makePerson = function(persArr){

    var persons;
    
    persons = {
        minAge: function (){
            return Math.min.apply(Math,persArr.map(function(persArr){return persArr.age}));
        },
        maxAge: function (){
            return Math.max.apply(Math,persArr.map(function(persArr){return persArr.age}));
        },
        averageAge: function (){
            return Math.round(persArr.map(function(persArr){return persArr.age}).reduce(function(a, b){return a+b})/persArr.length);
        },
        names: function(){
            return persArr.map(function(persArr){return persArr.name}).sort(function(a,b){return a.localeCompare(b)}).join(", ").toString();
        }
    };
    
    console.log(persons.names());
    return {minAge: persons.minAge(),maxAge: persons.maxAge(),averageAge: persons.averageAge(), names: persons.names()};
};


// var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
// var result = makePerson(data);
// console.log(result);
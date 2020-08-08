"use strict";

function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

const randomNumber = function(){
    let genNumber = Math.random() * (100 - 1) + 1;
    genNumber = Math.round(genNumber);
    console.log('genNumber: ', genNumber);
    let number = prompt("Угадай число от 1 до 100");
    
    function checkNum(number){
        if(number === null)
            return false;
        else if (+number > genNumber){
            alert("Загаданное число меньше");
            number = parseInt(prompt("Угадай число от 1 до 100"));
            checkNum(number);
        } else if (+number < genNumber){
            alert("Загаданное число больше");
            number = parseInt(prompt("Угадай число от 1 до 100"));
            checkNum(number);
        } else if ( isNaN(number) ){
            while( isNaN(number) ){
                alert("Введи число!");
                number = prompt("Угадай число от 1 до 100");
                checkNum(number);
            }
        } else if (+number === genNumber){
            alert("Поздравляю, Вы угадали!!!");
    }
    }
    checkNum(number);
}

randomNumber();
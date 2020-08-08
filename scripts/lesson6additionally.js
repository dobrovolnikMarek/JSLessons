"use strict";

function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

const randomNumber = function(){
    let genNumber = Math.random() * (100 - 1) + 1;
    let attempt = 10;
    genNumber = Math.round(genNumber);
    console.log('genNumber: ', genNumber);
    let number = prompt("Угадай число от 1 до 100");
    
    function checkNum(number){
        if (number === null)
            return false;
        else if (+number > genNumber){
            attempt--;
            checkAttempts(attempt);
            alert("Загаданное число меньше, осталось попыток "+attempt);
            number = parseInt(prompt("Угадай число от 1 до 100"));
            checkNum(number);
        } else if (+number < genNumber){
            attempt--;
            checkAttempts(attempt);
            alert("Загаданное число больше, осталось попыток "+attempt);
            number = parseInt(prompt("Угадай число от 1 до 100"));
            checkNum(number);
        } else if ( isNaN(number) ){
            while ( isNaN(number) ){
                alert("Введи число!");
                number = prompt("Угадай число от 1 до 100");
                checkNum(number);
            }
        } else if (+number === genNumber){
            let answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (answer)
                randomNumber();
        }
    }
    function checkAttempts(attempt){
        if (attempt === 0){
            let answer = confirm("Попытки закончились, хотите сыграть еще?");
            if (answer)
                randomNumber();
        }
    }
    checkNum(number);
}

randomNumber();
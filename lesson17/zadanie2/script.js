"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
    let greeting = document.querySelector("#greeting"),
        dayOfWeek = document.querySelector("#day"),
        time = document.querySelector("#time"),
        newYear = document.querySelector("#newYear");
        function getCurrTime(){
            let date = new Date(),
            hours = date.getHours(),
            day = date.toLocaleString("ua", {weekday : "long"}),
            currTime = date.toLocaleTimeString("ua"),
            daysToNewYear = Math.floor((Date.parse("1 january 2021") - Date.now())/1000/60/60/24);

            dayOfWeek.textContent = `Сегодня: ${day}`;
            time.textContent = `Текущее время: ${currTime}`;
            if(hours >= 4 && hours <= 12){
                greeting.textContent = `Доброе утро`;
            }else if( hours >= 12 && hours <= 16){
                greeting.textContent = `Добрый день`;
            } else if(hours >= 17 && hours <= 23){
                greeting.textContent = `Добрый вечер`;
            } else{
                greeting.textContent = `Доброй ночи`;
            }
            if(daysToNewYear % 10 === 1 ){
                newYear.textContent = `До нового года осталось ${daysToNewYear} день`;
            }else if(daysToNewYear % 10 > 1 && daysToNewYear % 10 < 5){
                newYear.textContent = `До нового года осталось ${daysToNewYear} дня`;
            }else {
                newYear.textContent = `До нового года осталось ${daysToNewYear} дней`;
            }
           
        }
        getCurrTime();
        setInterval(getCurrTime, 1000);
});
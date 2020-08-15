"use strict";



function currTime(){
    let date = new Date();
    let d = date.getDay();
    let m = ["минута", "минут", "минуты"];
    let h = ["час", "часов", "часа"];
    let s = ["секудна", "секунд", "секунды"];
    let format = function(n, arr){
        n %= 10;
        if(n === 0 || (n >= 5 && n <= 9)){
            return arr[1];
        } else if (n>=2 && n < 5){
            return arr[2];
        } else{
            return arr[0];
        }
    }
    let day = function(d){
        let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        return days[d];
    }
    let month = function(m){
        let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        return months[m];
    }

    return "Сегодня "+ day(d) +", "+date.getDate()+" "+month(date.getMonth())+" "+ date.getFullYear()+ " года " + date.getHours()+ " "+ format(date.getHours(), h) + " "+ date.getMinutes() + " "+ format(date.getMinutes(), m)+ " "+ date.getSeconds() + " "+ format(date.getSeconds(), s);
}

console.log('currTime: ', currTime());

let time = document.getElementsByTagName("div")[0];
time.classList.add("time");

setInterval(()=>{
    document.getElementsByClassName("time")[0].innerHTML = currTime();
},1000);




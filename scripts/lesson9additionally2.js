"use strict";

function currTime(){
    let date = new Date();
    if(date.getHours()< 10 && date.getMinutes() < 10 && date.getSeconds() < 10)
        return "0"+date.getHours() +" : "+ "0"+date.getMinutes()+ " : "+ "0"+date.getSeconds();
    if(date.getHours()>= 10 && date.getMinutes() < 10 && date.getSeconds() < 10)
        return date.getHours() +" : "+ "0"+date.getMinutes()+ " : "+ "0"+date.getSeconds();
    if(date.getHours()< 10 && date.getMinutes() >= 10 && date.getSeconds() < 10)
        return "0"+date.getHours() +" : "+ date.getMinutes()+ " : "+ "0"+date.getSeconds();
    if(date.getHours()< 10 && date.getMinutes() < 10 && date.getSeconds() >= 10)
        return "0"+date.getHours() +" : "+ "0"+date.getMinutes()+ " : "+ date.getSeconds();
    if(date.getHours()>= 10 && date.getMinutes() >= 10 && date.getSeconds() < 10)
        return date.getHours() +" : "+ date.getMinutes()+ " : "+ "0"+date.getSeconds();
    if(date.getHours()>= 10 && date.getMinutes() < 10 && date.getSeconds() >= 10)
        return date.getHours() +" : "+ "0"+date.getMinutes()+ " : "+ date.getSeconds();
    if(date.getHours()< 10 && date.getMinutes() >= 10 && date.getSeconds() >= 10)
        return "0"+date.getHours() +" : "+ date.getMinutes()+ " : "+ date.getSeconds();
    return date.getHours() +" : "+date.getMinutes()+ " : "+ date.getSeconds();
}

function currDate(){
    let date = new Date();
    if(date.getDate() < 10 && date.getMonth() < 10)
        return "0"+date.getDate()+"."+ "0"+date.getMonth()+ "."+ date.getFullYear();
    if(date.getDate() < 10 && date.getMonth() >= 10)
        return "0"+date.getDate()+"."+ date.getMonth()+ "."+ date.getFullYear();
    if(date.getDate() >= 10 && date.getMonth() < 10)
        return date.getDate()+"."+ "0"+date.getMonth()+ "."+ date.getFullYear();
    return date.getDate()+"."+ date.getMonth()+ "."+ date.getFullYear();
}

console.log('currTime: ', currTime()+"   "+ currDate());

let time = document.getElementsByTagName("div")[0];
time.classList.add("time");

setInterval(()=>{
    document.getElementsByClassName("time")[0].innerHTML = currTime()+"   "+ currDate();
},1000);

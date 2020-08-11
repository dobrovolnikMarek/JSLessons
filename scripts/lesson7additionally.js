"use strict";

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]; 
let day = new Date();
let curDay = day.getDay() - 1;
for(let i = 0; i < week.length; i++){
        if(week[i] === "Суббота" || week[i] === "Воскресенье"){
            document.write("<div>"+week[i].italics()+ "</div> \n");
        } else if(curDay === i){
            document.write("<div>"+week[i].bold()+ "</div> \n");
        } else if (curDay === -1){
            document.write("<div>"+week[6].bold()+ "</div> \n");
        } else {
            document.write("<div>"+week[i]+ "</div> \n");
        } 
}
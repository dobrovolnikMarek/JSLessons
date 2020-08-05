'use strict';
/*TASK 1*/
let lang = prompt("ru || en?");
let lan = [
    ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"],
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
];
lang === "ru" ? console.log(lan[0].toString()) : console.log(lan[1].toString());
if(lang === "ru"){
    console.log(
        "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
    );
} else {
    console.log(
        "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
}

switch (lang) {
    case "ru":
        console.log(
            "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
        );
        break;
    case "en":
        console.log(
            "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
        );break;      
    default:
        console.log("error/ошибка");
        break;
}

/*TASK 2*/
let namePerson = prompt("Ваше имя?");

console.log(namePerson === "Артем" ? "директор": namePerson === "Максим" ? "преподаватель": "студент");
"use strict";

let books = document.querySelector(".books");
let book = document.querySelectorAll(".book");
let adv = document.querySelector(".adv");
adv.remove();
book[4].querySelector("a").textContent = "Книга 3. this и Прототипы Объектов";
book[2].querySelectorAll("li")[9].textContent = "Глава 8: За пределами ES6";
let newLi = document.createElement("li");
newLi.textContent = "Приложение A: Благодарности!";
document.body.setAttribute("style", "background-image: url(image/you-dont-know-js.jpg)");

let lists = document.querySelectorAll("ul")[2];
lists.appendChild(newLi);

books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[3]);
books.appendChild(book[2]);

let list5 = document.querySelectorAll("ul")[4];
console.log('list5: ', list5);
let items5 = list5.querySelectorAll("li");
console.log('items5: ', items5);
list5.insertBefore(items5[9], items5[2]);
list5.insertBefore(items5[2], items5[5]);
list5.insertBefore(items5[5], items5[8]);

let list2 = document.querySelectorAll("ul")[1];
console.log('list2: ', list2);
let items2 = list2.querySelectorAll("li");
console.log('items2: ', items2);
list2.insertBefore(items2[3], items2[2]);
list2.insertBefore(items2[6], items2[2]);
list2.insertBefore(items2[8], items2[2]);
list2.insertBefore(items2[2], items2[10]);
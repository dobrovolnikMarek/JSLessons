"use strict";


function addLi(){
    let newLi = document.createElement("li");
    let liText = document.querySelector("input").value; 
    newLi.textContent = liText;
    let list = document.querySelector("ul");
    list.appendChild(newLi);
}
"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
   //Timer
   function countTimer(deadline){
        let timerhours = document.querySelector("#timer-hours");
        let timerminutes = document.querySelector("#timer-minutes");
        let timerseconds = document.querySelector("#timer-seconds");

        function getTimerRemaining(){
            
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return {
                hours,
                minutes,
                seconds,
                timeRemaining
            };
        }
        let clock = function updateClock(){
            let timer = getTimerRemaining();
            if (timer.timeRemaining > deadline){
                timerhours.textContent = `00`;
                timerminutes.textContent = `00`;
                timerseconds.textContent = `00`;
                let timerNumbers = document.querySelector(".timer-numbers");
                timerNumbers.style.color = `red`;
            }else{
                timerhours.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
                timerminutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
                timerseconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;
            }
            

            return timer.timeRemaining;
        }
        if(clock()> 0){
            setInterval(clock, 1000);
        } 
        
   }
   countTimer("07 october 2020");

   //Menu
   const toggleMenu = () =>{
        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector("menu"),
            closeBtn = document.querySelector(".close-btn"),
            menuItem = menu.querySelectorAll('ul > li');
        const handlerMenu = () =>{
            menu.classList.toggle("active-menu"); 
        };
        btnMenu.addEventListener("click", handlerMenu);
        closeBtn.addEventListener("click", handlerMenu);

        menuItem.forEach((elem)=>{
            elem.addEventListener("click", handlerMenu);
        })
   };
   toggleMenu();

   //popup
   const togglePopup = () =>{
        const popup = document.querySelector(".popup"),
        popupBtn = document.querySelectorAll(".popup-btn"),
        popupClose= document.querySelector(".popup-close"),
        popupContent = document.querySelector(".popup-content");
        popupBtn.forEach((elem)=>{
            elem.addEventListener("click", ()=>{
                popup.style.display = "block";
                let start = Date.now();
                let timer = setInterval(function () {
                    let timePassed = Date.now() - start;

                    if (timePassed >= 1000) {
                        clearInterval(timer); 
                        return;
                    }
                    draw(timePassed);

                }, 20);
                function draw(timePassed) {
                    popupContent.style.top = timePassed / 10 + 'px';
                }
            });
        });

        popupClose.addEventListener("click", ()=>{
            popup.style.display = "none";
        });

        //popup Animation
       
   };
   togglePopup();
   
});
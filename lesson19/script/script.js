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


        popup.addEventListener("click", (event)=>{
            let target = event.target;

            if(target.classList.contains("popup-close")){
                popup.style.display = "none";
            } else{
                target = target.closest(".popup-content");

                if(!target){
                    popup.style.display = "none";
                }
            }
               

        })

        //popup Animation
       
   };
   togglePopup();
   
   //tabs
   const tabs = () =>{
    const tabHeader = document.querySelector(".service-header"),
        tab = tabHeader.querySelectorAll(".service-header-tab"),
        tabContent = document.querySelectorAll(".service-tab");
    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
            if(index === i){
                tab[i].classList.add("active");
                tabContent[i].classList.remove("d-none");
            } else{
                tabContent[i].classList.add("d-none");
                tab[i].classList.remove("active");
            }
        }
    };
    tabHeader.addEventListener("click", (event) => {
        let target = event.target;  
        target = target.closest(".service-header-tab");
       
            if (target) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        toggleTabContent(index);
                    }
                });

            }
    
   
    })
   };
   tabs();
});
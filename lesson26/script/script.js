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

   //slider
   const slider = ()=>{
       const slide = document.querySelectorAll(".portfolio-item"),
            btn = document.querySelectorAll(".portfolio-btn"),
            slider = document.querySelector(".portfolio-content"),
            portfolioDots = document.querySelector(".portfolio-dots"),
            dots =  new Array(slide.length);
        let currSlide =0,
        interval;

        const CreateDots = ()=>{
            for(let i = 0; i < slide.length; i++){
                dots[i] = (document.createElement("li"));
                dots[i].classList.add("dot");
                portfolioDots.append(dots[i]);
            }
            dots[0].classList.add("dot-active");
        };
        CreateDots();

        const prevSlide = (elem, index, strClass)=>{
            elem[index].classList.remove(strClass);
        };
        
        const nextSlide = (elem, index, strClass)=>{
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () =>{
            prevSlide(slide, currSlide, "portfolio-item-active");
            prevSlide(dots, currSlide, "dot-active");
            currSlide++;
            if(currSlide>= slide.length){
                currSlide = 0;
            }
            nextSlide(slide, currSlide, "portfolio-item-active");
            nextSlide(dots, currSlide, "dot-active");
        };

        const startSlide = (time = 3000)=>{
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = ()=>{
            clearInterval(interval);
        };

        slider.addEventListener("click", (event)=>{
            event.preventDefault();

            let target = event.target;

            if(!target.matches("#arrow-right, #arrow-left, .dot")){
                return; 
            }

            prevSlide(slide, currSlide, "portfolio-item-active");
            prevSlide(dots, currSlide, "dot-active");

            if(target.matches("#arrow-right")){
                currSlide++;
            } else if(target.matches("#arrow-left")){
                currSlide--;
            } else if(target.matches(".dot")){
                dots.forEach((elem, index)=>{
                    if(elem === target){
                        currSlide = index;
                    }
                });
            }

            if(currSlide >= slide.length){
                currSlide=0;
            }

            if(currSlide < 0){
                currSlide = slide.length-1;
            }
            nextSlide(slide, currSlide, "portfolio-item-active");
            nextSlide(dots, currSlide, "dot-active");

        });

        slider.addEventListener("mouseover", (event)=>{
            if(event.target.matches(".portfolio-btn") ||
            event.target.matches(".dot")){
                stopSlide();
            }
        });

        slider.addEventListener("mouseout", (event)=>{
            if(event.target.matches(".portfolio-btn") ||
            event.target.matches(".dot")){
                startSlide();
            }
        });

        startSlide(1500);
   };
   slider();

   //data-img
   const imgChange = ()=>{
        const command = document.querySelectorAll(".command__photo");
        for (let i of command){
            let tmpSrc = i.dataset.img,
                    tmpData = i.src;
            i.addEventListener("mouseenter",()=>{  
                i.src = tmpSrc;
                i.dataset.img = tmpData;
            });
            i.addEventListener("mouseleave",()=>{
                i.src = tmpData;
                i.dataset.img = tmpSrc;
            });
        }
   };
   imgChange();

   //calc
   const calc = (price = 100)=>{
       const calcBlock = document.querySelector(".calc-block"),
           calcType = document.querySelector(".calc-type"),
           calcSquare = document.querySelector(".calc-square"),
           calcDay = document.querySelector(".calc-day"),
           calcCount = document.querySelector(".calc-count"),
           totalValue = document.getElementById("total");
       const countSum = () => {
           let total = 0,
               countValue = 1,
               dayValue = 1;
           const typeValue = calcType.options[calcType.selectedIndex].value,
               squareValue = +calcSquare.value;
           if (calcCount.value > 1) {
               countValue += (calcCount.value - 1) / 10;
           }

           if (calcDay.value && calcDay.value < 5) {
               dayValue *= 2;
           } else if (calcDay.value && calcDay.value < 10) {
               dayValue *= 1.5;
           }

           if (typeValue && squareValue) {
               total = price * typeValue * squareValue * countValue * dayValue;
           }

           totalValue.textContent = total;
       };
       calcBlock.addEventListener("change", (event) => {
           const target = event.target;

           if (target === calcType || target === calcSquare ||
               target === calcDay || target === calcCount) {
               countSum();
           }
       });
   };
   calc(100);

   //send-ajax-form
   const sendForm = () =>{
       console.log(1);
    const errorMsg = "Что то пошло не так...",
        loadMsg =  "Загрузка...",
        successMsg = "Спасибо! Мы скоро с вами свяжемся!";
    const form1 = document.getElementById("form1"),
        form2 = document.getElementById("form2"),
        form3 = document.getElementById("form3");
    const statusMsg = document.createElement("div");
    statusMsg.style.cssText = "font-size: 2rem";

    const forms = (form) =>{
        
        form.appendChild(statusMsg);
      
        statusMsg.style = "color: #fff";
        statusMsg.textContent = loadMsg;
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) =>{
            body[key] = val;
        });
        postData(body)
            .then(response=>{
                console.log('response: ', response);
                if(response.status !== 200){
                    throw new Error(`Error ${response.status}`)
                }
                statusMsg.textContent = successMsg;
            }).catch(error =>{
                statusMsg.textContent = errorMsg;
                console.error(error);
            });            
    };

    const validInputs = (form)=>{
        form.addEventListener("input", ()=>{  
            if(form.id === "form2"){
                if(!form[0].value.match(/[А-Яа-я]/)){
                    form[0].value = "";
                }
                if(!form[3].value.match(/[А-Яа-я]/)){
                    form[3].value = "";
                }
            } else if(!form.querySelector(".form-name").value.match(/[А-Яа-я]/)){
                form.querySelector(".form-name").value = "";
               }     
        });
    };
    validInputs(form1);
    validInputs(form2);
    validInputs(form3);
    form3.addEventListener("submit", (event)=>{
        event.preventDefault();    
        if (!form3.querySelector(".form-phone").value.match(/^\+?\d{10,13}/)){
            form3.querySelector(".form-phone").value = "";
           } else{
            forms(form3);
           }
    });

    form2.addEventListener("submit", (event)=>{  
        event.preventDefault(); 
        if(!form2[2].value.match(/^\+?\d{10,13}/)){
            form2[2].value = "";
        } else{
            forms(form2);
        }
        
    });

    form1.addEventListener("submit", (event)=>{
        event.preventDefault();
        if (!form1.querySelector(".form-phone").value.match(/^\+?\d{10,13}/)){
            form1.querySelector(".form-phone").value = "";
            console.log("error");
           } else{
            forms(form1); 
           }      
    });

    const postData = (body) =>{
           return fetch("./server.php", {
                method: "POST",
                headers : {
                    "Contnt-Type" : "application/json"
                },
                body: JSON.stringify(body)
            });   
    };
   };
   sendForm();
   
});
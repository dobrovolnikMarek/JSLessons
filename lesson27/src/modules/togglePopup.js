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

export default togglePopup;
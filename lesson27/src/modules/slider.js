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

export default slider;
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

export default imgChange;
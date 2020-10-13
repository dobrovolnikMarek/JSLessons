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

export default toggleMenu;
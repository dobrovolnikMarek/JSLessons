let bnt = document.querySelector("#generate")
    header = document.querySelector("#hex");

bnt.addEventListener("click", function(){
    let hex = new Array();
    for(let i = 0; i < 3; i++){
        let tmphex = Math.ceil(Math.random()* 256).toString(16);
        if(tmphex.length === 1){
            tmphex = "0"+tmphex;
        }
        hex[i] = tmphex;
    }
    hex = hex.join("");
    hex = "#"+hex;
    document.body.style.backgroundColor = hex;
    bnt.style.color = hex; 
    header.textContent = hex;
});

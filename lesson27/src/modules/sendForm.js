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

export default sendForm;
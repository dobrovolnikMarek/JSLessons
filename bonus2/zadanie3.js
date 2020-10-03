"use strict";

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let result = document.querySelector(".result");
let selectedCountry = ""
country.addEventListener("change", event =>{
        city.innerHTML = "";
        for (let c in cityArr){
            if(event.target.value === c){

                for(let i = 0; i < cityArr[c].length; i++){
                    let option = document.createElement("option");
                    option.label = cityArr[c][i];
                    option.value = c;
                    city.appendChild(option);
                }
            }  
        }
        for(let i =0; i< country.length; i++){
            if( country[i].value === event.target.value){
                selectedCountry = country[i].textContent;
            }

        }
});

city.addEventListener("change", event =>{
    result.textContent = `${selectedCountry} ${event.target.selectedOptions[0].label}`;
})
"use strict";

const sum = document.querySelector("#sum");
const mult = document.querySelector("#mult");
const res = document.querySelector("#res");
res.disableds = true;
let a =0;
let b =0;
let result = 0;
class Calc {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(){  
        result =this.a + this.b;
    }
    mult(){
        result =this.a * this.b;
    }
    show(){
        res.value = result;
    }

}

sum.addEventListener("click", ()=>{
    a = +document.querySelector("#a").value;
    b = +document.querySelector("#b").value;
    let calc = new Calc(a, b);
    calc.add();
    calc.show();
});

mult.addEventListener("click", ()=>{
    a = +document.querySelector("#a").value;
    b = +document.querySelector("#b").value;
    let calc = new Calc(a, b);
    calc.mult();
    calc.show();
});
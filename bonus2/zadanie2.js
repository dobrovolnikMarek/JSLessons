"use strict";

const getResult = (x, y) =>{
    let result =0;
    let sumRes = 0;
    result = Math.pow(x, y);
    let tmpRes = result.toString();
    for(let i=0; i< tmpRes.length; i++){
        sumRes+= +tmpRes[i];
    }
    result = sumRes;
    return sumRes;
}

console.log(getResult(4,8));
"use strict";

let arr = [34554, 48787, 23354, 125487, 65687, 24548, 98747];

for (let i = 0; i < arr.length; i++){
    if(arr[i].toString()[0] === '2' || arr[i].toString()[0] === '4')
        console.log(arr[i])
}

function isPrime(number) {
    for( let i =2; i< number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return console.log(number+" : Делители этого числа: 1 и "+ number);
}
for (let i = 2; i <= 100; i++){
    isPrime(i);
}
let num = 266219;
let sum = 1;

for (let i = 0; i < num.toString().length; i++) {
    sum*=Number(num.toString()[i]);
}

sum**=3;

console.log(sum);
console.log(sum.toString().substr(0, 2));
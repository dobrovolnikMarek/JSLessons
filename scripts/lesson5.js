'use strict';

let isNum = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;

let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let amount1 = "";
let amount2 = "";
let income = "freelance";
let mission = 500000;
let period = 12;
let expenses1, expenses2;

let start = function (){
    do{
        money = prompt("Ваш месячный доход?");
    } while(!isNum(money));
}

start();

const getExpensesMonth = function () {
    let sum =0;
    let money;
    for (let i = 0; i < 2; i++) {
        if (i === 0){
            expenses1 = prompt("Введите обязательную статью расходов?");
        } else if (i === 1){
            expenses2 = prompt("Введите обязательную статью расходов?");
        }
        money = prompt("Во сколько это обойдется?");
        if (parseFloat(money)){
            sum += parseFloat(money);
        } else{
            continue;
        }    
    }
    console.log('sum: ', sum);
    return sum;
}

let expensesAmount = getExpensesMonth();

console.log('getExpensesMonth: ', expensesAmount);

console.log('addExpenses: ', addExpenses.split(","));

const getAccumulatedMonth = function(money, expensesAmount){
    return money - expensesAmount;
}
console.log('getAccumulatedMonth: ', getAccumulatedMonth(Number(money), expensesAmount));

const getTargetMonth = function(mission, getAccumulatedMonth){
    let result = "";
    if((mission / getAccumulatedMonth) > 0){
        return result = "Цель будет достигнута";
    } else {
        return result = "Цель не будет достигнута";
    }
}
console.log('getTargetMonth: ', getTargetMonth(mission, getAccumulatedMonth(Number(money), expensesAmount)));

let budgetDay = getAccumulatedMonth(Number(money), expensesAmount) / 30;

console.log('budgetDay: ', budgetDay);

const getStatusIncome = function(income){
    return income;
}

console.log('getStatusIncome: ', getStatusIncome(income));
'use strict';

let money = prompt("Ваш месячный доход?");

let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let amount1 = "";
let amount2 = "";
let income = "freelance";
let mission = 500000;
let period = 12;
let expenses1 = prompt("Введите обязательную статью расходов?");
expenses1 !== null ? amount1 = prompt("Во сколько это обойдется?") : null;
let expenses2 = prompt("Введите обязательную статью расходов?");
expenses2 !== null ? amount2 = prompt("Во сколько это обойдется?") : null;

const getExpensesMonth = function (amount1, amount2) {
    return amount1 + amount2;
}

console.log('getExpensesMonth: ', getExpensesMonth(Number(amount1), Number(amount2)));

console.log('addExpenses: ', addExpenses.split(","));

const getAccumulatedMonth = function(money, getExpensesMonth){
    return money - getExpensesMonth;
}
console.log('getAccumulatedMonth: ', getAccumulatedMonth(Number(money), getExpensesMonth(Number(amount1), Number(amount2))));

const getTargetMonth = function(mission, getAccumulatedMonth){
    return mission / getAccumulatedMonth;
}
console.log('getTargetMonth: ', getTargetMonth(mission, getAccumulatedMonth(Number(money), getExpensesMonth(Number(amount1), Number(amount2)))));

let budgetDay = getAccumulatedMonth(Number(money), getExpensesMonth(Number(amount1), Number(amount2))) / 30;

console.log('budgetDay: ', budgetDay);

const getStatusIncome = function(income){
    return income;
}

console.log('getStatusIncome: ', getStatusIncome(income));
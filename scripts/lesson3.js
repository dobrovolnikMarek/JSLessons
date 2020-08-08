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
let budgetMonth = Number(money - amount1 - amount2);
let budgetDay = budgetMonth / 30;
let goal = Math.ceil(mission / budgetMonth);

console.log('money: ', money);
console.log('budgetMonth: ', budgetMonth);
console.log('goal: ', goal);
console.log('budgetDay: ', budgetDay);

switch (true) {
    case budgetDay >= 1200:
        console.log("У вас высокий уровень дохода");
        break;
    case budgetDay >= 600 && budgetDay < 1200:
        console.log("У вас средний уровень дохода");
        break;
    case budgetDay < 600:
        console.log("К сожалению у вас уровень дохода ниже среднего");
        break;
    case budgetDay <= 0:
        console.log("Что то пошло не так");
        break;
}
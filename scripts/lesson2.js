let money = 10;
let income = "freelance";
let addExpenses = "Internet, Taxi, Payment of communal apartment";
let deposit = false;
let mission = 1000;
let period = 12;
let budgetDay = money / 30;

console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);
console.log('addExpenses: ', addExpenses.length);
console.log("The period is "+ period + " months");
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetDay: ', budgetDay);
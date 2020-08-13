"use strict";

let isNum = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let amount1 = "";
let amount2 = "";
let expenses, expenses2;
let start = function (){
    do{
        money = prompt("Ваш месячный доход?");
    } while(!isNum(money));
}

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function(){

        if(confirm("Есть ли у вас дополнительный источник заработчка?")){
            let itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            if(isNum(Number(itemIncome))){
                while(isNum(Number(itemIncome))){
                    itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
                }
            }
            let cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
            if(!isNum(Number(cashIncome))){
                while(!isNum(Number(cashIncome))){
                    cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
                }
            }
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.split(", ")
        console.log('appData.addExpenses: ', appData.addExpenses);
        for(let i = 0; i < appData.addExpenses.length; i++){
            appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase()+ appData.addExpenses[i].substr(1, appData.addExpenses[i].length-1);
            console.log('appData.addExpenses[i][0]: ', appData.addExpenses[i]);
        }
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        for (let i = 0; i < 2; i++) {
        
            expenses = prompt("Введите обязательную статью расходов?");
            if(isNum(Number(expenses))){
                while(isNum(Number(expenses))){
                    expenses = prompt("Введите обязательную статью расходов?");
                }
            }
            appData.expenses[expenses] = +prompt("Во сколько это обойдется?");
           
            if(!isNum(appData.expenses[expenses])){
                do{
                    appData.expenses[expenses] = +prompt("Во сколько это обойдется?");
                } while(!isNum(appData.expenses[expenses]));
            }  
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        return appData.expensesMonth;
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetDay;
    },
    getTargetMonth: function(getAccumulatedMonth){
        let result = "";
        if((appData.mission / getAccumulatedMonth) > 0){
            return result = "Цель будет достигнута в "+(appData.mission / appData.budgetMonth) + " мес.";
        } else {
            return result = "Цель не будет достигнута";
        }
    },
    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            appData.addIncome = "У вас высокий уровень дохода";
            return appData.addIncome;
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
            appData.addIncome = "У вас средний уровень дохода";
            return appData.addIncome;
        } else if (appData.budgetDay < 600){
            appData.addIncome = "К сожалению у вас уровень дохода ниже среднего";
            return appData.addIncome;
        } else if (appData.budgetDay <= 0){
            appData.addIncome = "Что то пошло не так";
            return appData.addIncome;
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt("Какой годовой процент?", "10");
            if(!isNum(Number(appData.percentDeposit))){
                while(!isNum(Number(appData.percentDeposit))){
                    appData.percentDeposit = prompt("Какой годовой процент?", "10");
                }
            }
            appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            if(!isNum(Number(appData.moneyDeposit))){
                while(!isNum(Number(appData.moneyDeposit))){
                    appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
                }
            }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period
    }
};

appData.asking();
let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmount);
appData.getBudget();
console.log('будет достигнута цель (в месяцах): ', appData.getTargetMonth(appData.getBudget()));
appData.getStatusIncome();
console.log('Уровень дохода:', appData.getStatusIncome());
console.log("Наша программа включает в себя данные:");
for (let i in appData){
    if(typeof appData[i] === 'object'){
        for (let y in appData[i]){
            console.log(i + " : " + appData[i][y]);continue;
        }
    } else if (typeof appData[i] === 'function'){
        console.log(i + " : function");continue;
    } else{
        console.log(i + " : " + appData[i]);
    }
}

appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney())
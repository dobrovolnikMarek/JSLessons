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
    mission: 50000,
    period: 3,
    asking: function(){
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.split(",")
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        for (let i = 0; i < 2; i++) {
        
            expenses = prompt("Введите обязательную статью расходов?");
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
            appData.income['income'] = "У вас высокий уровень дохода";
            return appData.income['income'];
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
            appData.income['income'] = "У вас средний уровень дохода";
            return appData.income['income'];
        } else if (appData.budgetDay < 600){
            appData.income['income'] = "К сожалению у вас уровень дохода ниже среднего";
            return appData.income['income'];
        } else if (appData.budgetDay <= 0){
            appData.income['income'] = "Что то пошло не так";
            return appData.income['income'];
        }
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
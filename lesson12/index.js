"use strict";

let calc = document.getElementById("start");//a
let plus1 = document.getElementsByTagName("button")[0];
let plus2 = document.getElementsByTagName("button")[1];
let checkBox = document.querySelector("#deposit-check");//c
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");//d
let additionalIncomeItem1 = document.querySelectorAll(".additional_income-item")[0];//d
let additionalIncomeItem2 = document.querySelectorAll(".additional_income-item")[1];//d
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
let expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0];
let additionalIncome = document.getElementsByClassName("additional_income-value")[0];
let additionalExpenses = document.getElementsByClassName("additional_expenses-value")[0];
let incomePeriod = document.getElementsByClassName("income_period-value")[0];
let targetMonth = document.getElementsByClassName("target_month-value")[0];
let range = document.querySelector(".period-select");
let target = document.querySelector(".target-amount")
let additionalExpensesItem = document.querySelector(".additional_expenses-item")
let expensesTitle = document.querySelectorAll(".expenses-title")[1];
let expensesItem = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll(".income-items");
let firstIncomeTitle = document.querySelectorAll(".income-title")[1];
let incomeAmount = document.querySelector(".income-amount");
let expensesAmount =  document.querySelector(".expenses-amount");
let salaryAmount = document.querySelector(".salary-amount");
let budgetMonthValue = document.querySelector(".budget_month-value");
let incomeItem = document.querySelectorAll(".income-items");
let periodAmount = document.querySelector(".period-amount");
let cancel = document.querySelector("#cancel");

let setVal = function(event) {
    periodAmount.textContent = event.target.value;
};

let checkSalary= function(){
    if(salaryAmount.value === ""){
        document.querySelector("#start").disabled = true;
    }
}

let numbersOnly = function(i){
    return i.addEventListener("input", function(){
        i.value = i.value.replace(/[^0-9]/,'');
    })
}

let rusLettersOnly = function(i){
    return i.addEventListener("input", function(){
        i.value = i.value.replace(/[^-.,!?\s/а-я]/,'');
    });
}

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start : function (){
        this.budget = +salaryAmount.value;
        this.inputsBlock();
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth()
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    },
    reset: function(){
        budgetMonthValue.value = null;
        budgetDayValue.value = null;
        expensesMonthValue.value = null;
        additionalExpenses.value = null;
        additionalIncome.value = null;
        targetMonth.value = null;
        incomePeriod.value = null;
        let allInputs = document.querySelectorAll("input[type=text]");
        allInputs.forEach(function(i){
            i.value = null;
            i.disabled = false;
        });
        let additionalInputs = document.querySelectorAll(".addField");
        
        additionalInputs.forEach(function(i){
            i.remove();
        })
        plus1.style.display = "block";
        plus2.style.display = "block";
        calc.style.display = "block";
        cancel.style.display = "none"; 
    },
    inputsBlock: function(){
        let inputs = document.querySelectorAll("input[type=text]");
        inputs.forEach(function(i){
            i.disabled = true;
        });
        calc.style.display = "none";
        cancel.style.display = "block"; 
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpenses.value = this.addExpenses.join(", ");
        additionalIncome.value = this.addIncome.join(", ");
        targetMonth.value = Math.ceil(this.getTargetMonth());
        incomePeriod.value = this.calcSavedMoney();
        range.addEventListener("input", function(){
            incomePeriod.value = event.target.value * appData.budgetMonth;
        });
    },
    
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItem[0].cloneNode(true); 
        cloneExpensesItem.childNodes[1].value = null; 
        cloneExpensesItem.childNodes[3].value = null;
        rusLettersOnly(cloneExpensesItem.childNodes[1]);
        numbersOnly(cloneExpensesItem.childNodes[3]);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, plus2);
        expensesItem = document.querySelectorAll('.expenses-items');

        if(expensesItem.length === 3){
            plus2.style.display = "none";
        }
        cloneExpensesItem.classList.add('addField');
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true); 
        cloneIncomeItem.childNodes[1].value = null;
        cloneIncomeItem.childNodes[3].value = null;
        rusLettersOnly(cloneIncomeItem.childNodes[1]);
        numbersOnly(cloneIncomeItem.childNodes[3]);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plus1);
        incomeItems = document.querySelectorAll('income-items');
        if(incomeItems.length === 3){
            plus1.style.display = "none";
        }
        cloneIncomeItem.classList.add('addField');
    },
    getExpenses: function(){
        expensesItem.forEach(function(i){
            let itemExpenses = i.querySelector(".expenses-title").value;
            let cashExpenses = i.querySelector(".expenses-amount").value;

            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItems.forEach(function(i){
            let itemIncome = i.querySelector(".income-title").value;
            let cashIncome = i.querySelector(".income-amount").value;

            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        })
        for( let key in appData.income){
            appData.incomeMonth += +appData.income[key]; 
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ""){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ""){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses){
            this.expensesMonth += +this.expenses[key];
        }
        return this.expensesMonth;
    },
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
        return this.budgetDay;
    },
    getTargetMonth: function(){
        return Number(target.value) / appData.budgetMonth;
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
        return this.budgetMonth * Number(range.value)
    }
};

calc.addEventListener("click", appData.start.bind(appData));
cancel.addEventListener("click", appData.reset.bind(appData));
plus2.addEventListener("click", appData.addExpensesBlock);
plus1.addEventListener("click", appData.addIncomeBlock);
range.addEventListener("input", setVal);
salaryAmount.addEventListener("input", checkSalary);
rusLettersOnly(firstIncomeTitle);
rusLettersOnly(additionalIncomeItem1);
rusLettersOnly(additionalIncomeItem2);
rusLettersOnly(expensesTitle);

numbersOnly(salaryAmount);
numbersOnly(incomeAmount);
numbersOnly(expensesAmount);
numbersOnly(target);
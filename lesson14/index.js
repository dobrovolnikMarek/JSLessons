"use strict";

let calc = document.getElementById("start"); //a
let plus1 = document.getElementsByTagName("button")[0];
let plus2 = document.getElementsByTagName("button")[1];
let additionalIncomeItem = document.querySelectorAll(".additional_income-item"); //d
let additionalIncomeItem1 = document.querySelectorAll(".additional_income-item")[0]; //d
let additionalIncomeItem2 = document.querySelectorAll(".additional_income-item")[1]; //d
let checkBox = document.querySelector("#deposit-check"); //c
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
let expensesAmount = document.querySelector(".expenses-amount");
let salaryAmount = document.querySelector(".salary-amount");
let budgetMonthValue = document.querySelector(".budget_month-value");
let incomeItem = document.querySelectorAll(".income-items");
let periodAmount = document.querySelector(".period-amount");
let cancel = document.querySelector("#cancel");

let setVal = function (event) {
    periodAmount.textContent = event.target.value;
};

let checkSalary = function () {
    if (salaryAmount.value === "") {
        document.querySelector("#start").disabled = true;
    }
}

let numbersOnly = function (i) {
    return i.addEventListener("input", function () {
        i.value = i.value.replace(/[^0-9]/, '');
    })
}

let rusLettersOnly = function (i) {
    return i.addEventListener("input", function () {
        i.value = i.value.replace(/[^-.,!?\s/а-я]/, '');
    });
}

const AppData = function () {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
}

AppData.prototype.start = function () {
    this.budget = +salaryAmount.value;
    this.inputsBlock();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth()
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
};

AppData.prototype.reset = function () {
    budgetMonthValue.value = null;
    budgetDayValue.value = null;
    expensesMonthValue.value = null;
    additionalExpenses.value = null;
    additionalIncome.value = null;
    targetMonth.value = null;
    incomePeriod.value = null;
    let allInputs = document.querySelectorAll("input[type=text]");
    allInputs.forEach(function (i) {
        i.value = null;
        i.disabled = false;
    });
    let additionalInputs = document.querySelectorAll(".addField");

    additionalInputs.forEach(function (i) {
        i.remove();
    })
    plus1.style.display = "block";
    plus2.style.display = "block";
    calc.style.display = "block";
    cancel.style.display = "none";
};

AppData.prototype.inputsBlock = function () {
    let inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(function (i) {
        i.disabled = true;
    });
    calc.style.display = "none";
    cancel.style.display = "block";
};

AppData.prototype.showResult = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpenses.value = this.addExpenses.join(", ");
    additionalIncome.value = this.addIncome.join(", ");
    targetMonth.value = Math.ceil(this.getTargetMonth());
    incomePeriod.value = this.calcSavedMoney();
    range.addEventListener("input", function () {
        incomePeriod.value = event.target.value * appData.budgetMonth;
    });
};

AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItem[0].cloneNode(true);
    cloneExpensesItem.childNodes[1].value = null;
    cloneExpensesItem.childNodes[3].value = null;
    rusLettersOnly(cloneExpensesItem.childNodes[1]);
    numbersOnly(cloneExpensesItem.childNodes[3]);
    expensesItem[0].parentNode.insertBefore(cloneExpensesItem, plus2);
    expensesItem = document.querySelectorAll('.expenses-items');

    if (expensesItem.length === 3) {
        plus2.style.display = "none";
    }
    cloneExpensesItem.classList.add('addField');
};

AppData.prototype.addIncomeBlock = function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.childNodes[1].value = null;
    cloneIncomeItem.childNodes[3].value = null;
    rusLettersOnly(cloneIncomeItem.childNodes[1]);
    numbersOnly(cloneIncomeItem.childNodes[3]);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plus1);
    incomeItems = document.querySelectorAll('income-items');
    if (incomeItems.length === 3) {
        plus1.style.display = "none";
    }
    cloneIncomeItem.classList.add('addField');
};

AppData.prototype.getExpenses = function () {
    expensesItem.forEach(function (i) {
        let itemExpenses = i.querySelector(".expenses-title").value;
        let cashExpenses = i.querySelector(".expenses-amount").value;

        if (itemExpenses !== '' && cashExpenses !== '') {
            appData.expenses[itemExpenses] = cashExpenses;
        }
    });
};

AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItems.forEach(function (i) {
        let itemIncome = i.querySelector(".income-title").value;
        let cashIncome = i.querySelector(".income-amount").value;

        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    })
    for (let key in appData.income) {
        _this.incomeMonth += +_this.income[key];
    }
};

AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== "") {
            _this.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function () {
    const _this = this;
    additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== "") {
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getExpensesMonth = function () {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
};

AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
    return this.budgetDay;
};

AppData.prototype.getTargetMonth = function () {
    return Number(target.value) / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
    if (appData.budgetDay >= 1200) {
        appData.addIncome = "У вас высокий уровень дохода";
        return appData.addIncome;
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
        appData.addIncome = "У вас средний уровень дохода";
        return appData.addIncome;
    } else if (appData.budgetDay < 600) {
        appData.addIncome = "К сожалению у вас уровень дохода ниже среднего";
        return appData.addIncome;
    } else if (appData.budgetDay <= 0) {
        appData.addIncome = "Что то пошло не так";
        return appData.addIncome;
    }
};

AppData.prototype.getInfoDeposit = function () {
    if (appData.deposit) {
        appData.percentDeposit = prompt("Какой годовой процент?", "10");
        if (!isNum(Number(appData.percentDeposit))) {
            while (!isNum(Number(appData.percentDeposit))) {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");
            }
        }
        appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
        if (!isNum(Number(appData.moneyDeposit))) {
            while (!isNum(Number(appData.moneyDeposit))) {
                appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            }
        }
    }
};

AppData.prototype.calcSavedMoney = function () {
    return this.budgetMonth * Number(range.value)
};

AppData.prototype.eventsListeners = function () {
    calc.addEventListener("click", this.start.bind(this));
    cancel.addEventListener("click", this.reset.bind(this));
    plus2.addEventListener("click", this.addExpensesBlock);
    plus1.addEventListener("click", this.addIncomeBlock);
    range.addEventListener("input", setVal);
    salaryAmount.addEventListener("input", checkSalary);
};

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElem = function () {
    let tag;
    if (this.selector[0] === ".") {
        tag = document.createElement("div");
        tag.classList.add(this.selector.slice(1));

    } else if (this.selector[0] === "#") {
        tag = document.createElement("p");
        tag.setAttribute('id', this.selector.slice(1));
    }
    tag.style.cssText = this.height + this.width + this.bg + this.fontSize;
    tag.textContent = "New Element";
    document.body.appendChild(tag);
};

let hex = new Array();
for (let i = 0; i < 3; i++) {
    let tmphex = Math.ceil(Math.random() * 256).toString(16);
    if (tmphex.length === 1) {
        tmphex = "0" + tmphex;
    }
    hex[i] = tmphex;
}
hex = hex.join("");
hex = "#" + hex;
const newElem = new DomElement("#newEl", "height: 300px;", "width: 100%;", "background-color:" + hex + ";", "font-size: 50px;");
newElem.createElem();
const appData = new AppData();
appData.eventsListeners();



rusLettersOnly(firstIncomeTitle);
rusLettersOnly(additionalIncomeItem1);
rusLettersOnly(additionalIncomeItem2);
rusLettersOnly(expensesTitle);

numbersOnly(salaryAmount);
numbersOnly(incomeAmount);
numbersOnly(expensesAmount);
numbersOnly(target);
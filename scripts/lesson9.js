"use strict";

let calc = document.getElementById("start");//a
console.log('calc: ', calc);

let plus1 = document.getElementsByTagName("button")[0];
console.log('plus1: ', plus1);

let plus2 = document.getElementsByTagName("button")[1];
console.log('plus2: ', plus2);

let checkBox = document.querySelector("#deposit-check");//c
console.log('checkBox: ', checkBox);

let additionalIncomeItem1 = document.querySelectorAll(".additional_income-item")[0];//d
console.log('additionalIncomeItem1: ', additionalIncomeItem1);

let additionalIncomeItem2 = document.querySelectorAll(".additional_income-item")[1];//d
console.log('additionalIncomeItem2: ', additionalIncomeItem2);

let budgetDay = document.getElementsByClassName("budget_day-value")[0];
console.log('budgetDay: ', budgetDay);

let expensesMonth = document.getElementsByClassName("expenses_month-value")[0];
console.log('expensesMonth: ', expensesMonth);

let additionalIncome = document.getElementsByClassName("additional_income-value")[0];
console.log('additionalIncome: ', additionalIncome);

let additionalExpenses = document.getElementsByClassName("additional_expenses-value")[0];
console.log('additionalExpenses: ', additionalExpenses);

let incomePeriod = document.getElementsByClassName("income_period-value")[0];
console.log('incomePeriod: ', incomePeriod);

let targetMonth = document.getElementsByClassName("target_month-value")[0];
console.log('targetMonth: ', targetMonth);

let range = document.querySelector(".period-select");
console.log('range: ', range);

let target = document.querySelector(".target-amount")
console.log('target: ', target);

let additionalExpensesItem = document.querySelector(".additional_expenses-item")
console.log('additionalExpensesItem: ', additionalExpensesItem);

let expensesTitle = document.querySelector(".expenses-title");
console.log('expensesTitle: ', expensesTitle);

let expensesAmount = document.querySelector(".expenses-amount");
console.log('expensesAmount: ', expensesAmount);

let incomeTitle = document.querySelector(".income-title");
console.log('incomeTitle: ', incomeTitle);

let incomeAmount = document.querySelector(".income-amount");
console.log('incomeAmount: ', incomeAmount);

let salaryAmount = document.querySelector(".salary-amount");
console.log('salaryAmount: ', salaryAmount);

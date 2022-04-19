"use strict";
// operators.js
// + - * / 
// ** возведение в степень a ** b
// %  взятие остатка от деления

 let a = 20;
 let b = 10;
 let c = 30;
 let squereP = 2*(a*b + b*c + a*c);
console.log(squereP);

let sInfo = ` ПЛОЩАДЬ РАВНФ: ${2*(a*b + b*c + a*c)}`;
console.log(sInfo);


// 3 задача  -  используем для нее только операторы + -
 // let a = 2;
// let b = 5;
// console.log(a,b); // 5,2


// %  остаток от деления 
console.log(9 % 8); // 1
console.log(99 % 10); // 9
console.log(8 % 2); // 0
console.log(9 % 4); // 1
// 4.5 4.5  => 0.5 + 0.5 => 1 для задачи номер 2 ( где ссумму )

// операторы сравнения - возвращают только логический тип
// == равенство 
// === строгое равенство
// !== строгое неравенство

const MIN = 10;
const MAX = 20;
let len = 12;
console.log(MIN > len);

let first = "1200";
let second = 1200;
console.log(first == second); //  true
console.log(first === second); //false, т к типы данных разные

// тернарный оператор
// const MIN = 10;
// const MAX = 20;
let loginLen = 4;
let reasult = loginLen <= MIN ? "Ошибка ввода" : "Логин введен верно";
console.log(reasult);
'use strict'; // 
// однострочный комментарий
/* 
 многострочный комментарий
*/
// Javascript (Спецификация EcmaScript)
// инструкции выполняются последовательно,
// в конце инструкции ставим  ;

// Типы данных:
/*
1. Примитивные типы:
1.1 числа (89, -9,3.12, -67.3 ....)
1.2 строки "" '' ``
1.3 Логический тип (true / false)
1.4 null
1.5 undefined
1.6 bigInt (7897779797979793759363469636493764976n - гигантское число и исключительная ситуация)

2. Ссылочные типы:
*/

// переменные 
/* объявление переменных let / const / var */

let variableName; /*  camelCase*/
 // переменной variableName присвоили значение данные
variableName = "Данные";

let age =  30;
let login = "qwerty", password = "qwerty123";
let isActive, closed = true; // первой переменной значение не присвоили , второй присвоили

age = 27;

 // константы: объявление переменных через const - лучше большими буквами
 //  константам присваивается значение при объявлении
 // значение менять нельзя
const MONDAY_RU = "Понедельник";
const YELLOW = "#fff00"


 age= 25;
 let age2 = 19;
const averageAge = (age + age2) / 2; // значение не известно константы заранее ( до загрузки страницы) - используем camelCase

//  отладка 
console.log("отладка");
console.log(age); // innerHTML  alert(averageAge) не используем; никакого вывода в браузер
console.log(MONDAY_RU, YELLOW);

console.info("информация");
console.warn("предупреждение");
console.error("Здесь ошибка... Исправьте");


// Числа

age = 65; 
age = 65.5;
//кроме обычных чисел, существуют специальные числовые значения
// 1. Infinity
// 2. -Infinity
// 3. NaN - Not a Number

console.log(age / 0); // infinity
console.log(-age / 0); // -infinity
console.log(isFinite(age / 0)); // false
console.log(isFinite(age)); // true
console.log("Возраст" / age); // NaN ошибка вычисления
console.log(isNaN("Возраст" / age)); // true

//строки 
login = 'qwerty';
login = "qwerty";

//обратные кавычки 
let loginInfo = `Логин пользователя: ${login}. 2 + 3 = ${2+3}`;
console.log(loginInfo);

let greeting = "Добро пожаловать в \"Магазин\"";
console.log(greeting);

// Логический тип Boolean
isActive = true;
let stopped = false;
console.log(isActive, stopped);

//undefined - значение не было присвоено
let undefinedValue;
console.log(undefinedValue);

//null - значение неизвестно

let nullValue = null;
console.log(nullValue);
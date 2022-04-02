'use strict';
//
// const MIN = 1990;
// const MAX = 2022;
// let year = 2020;

// /// оператор И &&
// let result = (MAX > year) && (MIN < year) ? "Данные введены верно" : `Год должен быть в диапозоне от ${MIN} до ${MAX}`;
// console.log(result);

// // оператор || или
// let catWeight = 3,
//     catAge = 2;
// result = catAge <= 0 || catWeight <= 0 ? "Возраст и вес должны быть положительными" : "Данные введены верно";
// console.log(result);

// // оператор не ! !операнд
// // 1. преобразует операнд к типу булеан
// // 2. изменит полученное значение на противоположное

// //при преобразовании к типу  boolean в false преобразуются:
// // '', 0 , -0, null, underfined, Nan
// // все остальное преоборазуется в true

// let itemsCount = 2;
// result = !itemsCount ? "Товара нет в наличии" : `Количества товара ${itemsCount}.`;
// console.log(result);

// let userAgeInput = prompt("Введите возраст", '0');
// console.log(userAgeInput);

// // считывает из строки целое число либо вернет NaN
// let userAge = parseInt(userAgeInput); // 34hkhjh parseFloat -число с плавающей точкой
// console.log(userAge);

// // ветвления if, switch 

// const MIN_AGE = 7;
// const MAX_AGE = 17;

// if (userAge < MIN_AGE || userAge > MAX_AGE) {
//     result = 'Поездка недостпуна для указанного возраста'
// } else {
//     result = 'Ребенок может поехать в лагерь';
// }
// console.log(result);

// // если им 15 или 16 они могту быть вожатыми
// // если (возраст меньше минимального 7) или (возраст больше максимального 18)
// if (userAge < MIN_AGE || userAge > MAX_AGE) {
//     result = 'Поездка недостпуна для указанного возраста';
// } else if (userAge === 15 || userAge === 16) {
//     result = 'Поездка доступна  в качестве вожатого';
// }
// //  task1
// let lang = 'php',
//     exp = 3,
//     german = true;
// if (lang === 'javascript') {
//     console.log("Приглашаем вас на собеседвание");
//     if (exp > 5) {
//         console.log("Прибавка к указанной зп 5%");
//     }
//     if (german) {
//         console.log("Компания оплатит проживание");
//     }
// } else {
//     console.log('Не тот язык');
// }

// // switch 
// let ticketNum = prompt('Введите номер билета');
// switch (ticketNum) { // === 
//     case '11111':
//         alert("Приз -дом ");
//         break;
//     case '22222':
//     case '333333':
//         alert('Приз-земельный участок');
//         break;
//     case '444444':
//     case '555555':
//     case '66666':
//         alert('Приз - книга о строительтве');
//         break;
//     default:
//         console.log('Попробуйте в следующий раз'); // выполнится если ничего из интсрукци не совпало
// }

// let month = 1;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         alert('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осень');
//         break;
//     default:
//         alert('Нет такого сезона');
// }
// // for {;;} {} бесконечный цикл for
// // for (инициализация счетчика; условие ; обновление значений переменных) { 
// //    тело цикла }
// // 
// for (let x = 1, y = 12; x <= y; x = x + 1) {
//     if (x % 2 === 0) console.log(x);
// }

// for (let start = 90, end = 0; start > end; start -= 5) {
//     console.log(start);
// }

// ///
// for (let x = 90; x >= 0; x = x - 5) {
//     console.log(x);
// }
// /// область видимости, объявленных через let или const - {}
// {
//     const A = 9; {
//         console.log(A);
//     }
// }
// вывести в консоль первые 20 элементов последовательности  2 3 6  7 
let count = 2;
for (let i = 0; i > 20; i += 2 ) {
console.log(count);
count += i;
}
// решение выше задачи
// инициализация           условие         шаг
  for (let a = 2, i = 1;    i <= 20;     a = a + 2, i = i + 1){
    console.log(a);
}

// оператор присваивания
// = 
let num = 10;
num += 10;
num -= 10;

//  оператор + возращает результат 

let a = 3;
console.log(a++); // 3  постфиксная форма сначала возращает значение текущее  в консоль  и потом увеличивает на 1 
console.log(a); // 4

let b = 3;
console.log(++b); // 4  префиксная форма сначала возращает значение текущее  в консоль  и потом увеличивает на 1 
console.log(b); // 4

// 
num = 7;  // 7  -  8  +  9 - 6
let res = num++ - num++ + num++ - --num; // -1
console.log(res);
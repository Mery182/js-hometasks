 'use strict';
/*
Дана переменная sum - сумма покупки. 
Если сумма покупки больше 100000, 
то вывести в консоль сумму к оплате с учетом скидки в 10%,
 в противном случае вывести в консоль сумму к оплате без скидки.
*/
let sumN = 8000;
let totalSum = (sumN > 700) ? ' (sumN / 100) * 10; ' : ' sumN ';
console.log(totalSum);

// tast 2
let oneN = 57; //  можно подставить любое двухзначное число
let sumAll = oneN % 10 + oneN / 10 ;
console.log (parseInt(sumAll));


// tast 3
let oneNumber = 1;
let twoNumber = 2;
oneNumber = oneNumber + twoNumber; // oneNumber = 3
twoNumber = oneNumber - twoNumber; // twoNumber = 1
oneNumber = oneNumber - twoNumber; // 3 - 1 = 2
console.log(oneNumber,twoNumber);

'use strict';
/*
Дана переменная count. В зависимости от значения 
переменной вывести в консоль слово товар в правильной форме. 
Например, 12 товаров, 33 товара, 21 товар и тд
*/


// 2 3 4 24 34 44 товара
//0 5 6 7 8 9 10  11 12 13 14 15 16  .... 20 товаров
// 

// !1товар! 2товара 3товара 4товара !5товаров 6товаров 7товаров 9товаров
// 10товаров 11товаров 12товаров 13товаров 14товаров 15товаров 16товаров 17товаров
//18товаров 19товаров 20товаров !21товар! 22товара 23товара 24товара !25товаров!


let count = prompt('Введите количество товара:');
let countFormul = count % 100; //   сравниваю по остаткам 
let countFormul2 = count % 10; // по остаткам
let str1 = 'ар';
let str2 = 'аров';
let str3 = 'ара';
if (countFormul == 0 || countFormul2 == 0) {
  console.log(count + ' товаров'); // товаров
} else if (countFormul > 4 && countFormul <= 20 || count == 0) { // ставлю первым из-за 11
  console.log(count + ' товаров'); // товаров
} else if (countFormul2 > 4 && countFormul2 <= 20) { // ставлю первым из-за 11
  console.log(count + ' товаров'); // товаров
} else if (count.endsWith(1) && count.length < 3 || count.endsWith(1) && count.length >= 3) {
  console.log(`${count} тов` + str1); //  товар 1 21 31 1 51 91 
} else if (countFormul.length >= 3 && countFormul >= 3) {
  console.log(count + str3); // товара
} else {
  console.log(count + ' товара'); // товара
}
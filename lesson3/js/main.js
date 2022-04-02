'use strict';
// строки 
// последовательность символов, которая заключается в кавычки
// примитивный тип
// строки храняться в кодировкке utf-16  в виде массива символов
// строки в Javascript неизменны, можно лишь создать новую строку 
// на основе существующей
// нельзя из строчки вырезать букву
// конкатенация строк

let name = 'Глеб', surname = 'Петров';
let fullName = name + ' ' + surname;
console.log(fullName);
//  если один из операндов является строкой, то второй тоже будет преобразован к строке
// потом будет процесс конкатенации
console.log('2' + 2); // 22
// только оператор сложения привод к строкам, все остальные операторы приводят к числам

// методы строк
let string = 'поезд';
string = string.toLowerCase(); 
console.log(string);
// создается строковый объект поверх строк, 
// у которого есть методы - у самих примитивов нет методов
string = string.toUpperCase();
console.log(string);

string = ' javascript    ';
console.log(string.length); // 18  length - это свойство 

string = string.trim(); //  это метод убираем пробелы с начала и конца строки
console.log(string.length); // 10

// includes / startsWith / endsWidth - это методы возвражают булевое значение

console.log(string.includes('ava')); // true 
console.log(string.startsWith('Ja')); // false так как регистры разные
console.log(string.endsWith('script')); // true

// javascript
// 


console.log(string[0]); // j
console.log(string[4]); // s

// indexOf - lastIndexOf
// индекс первого вхождения последовательности в строку
// или -1, если символ не найден

console.log(string.indexOf('a')); // 1

string = 'javascript'; 
let letter = 'a';
let count = 0;
for (let i = 0; i < string.length; i++) {
 if(string[i] === letter){
    count +=1;
 }
}
console.log(count);

 // замена 

//  let data = '12-04-2021';
//  date = date.replace('-' , '.');
//  console.log(data);
//  date = date.replaceAll('-' , '.'); //  все

//  let str1 = 'html';
//  let str2 = 'Нtml';
//  console.log(str1 === str2); // false
//  console.log(str1 !== str2); // true


// let compareRes = str1.localеCompare(str2, undefined,{sensitivity: 'accent'}); // сравнивает без учета регистра

// метод
// 0 - вернет если строки равны
// отрицательное число - если  str1 < str2
// положительное число - если  str1 > str2

// console.log(compareRes); // -1

string = 'javascript';
// последний символ  string.length - 1 
string = string.substring(2, 5); // substring(2) только от 
console.log(string); // vas

// slice() / substring() 

//
while(true){
let userT = prompt('Введите строку');
if(userT === null || userT === "0"){
    break;
}
userT = userT[0].toUpperCase() + userT.substring(1).toLowerCase();
console.log(userT);
}

// даны переменные min и max
// вывести в консоль true если размер строки которую вводит пользователь 
// попадет диапозан от min до max и  false, если нет
let min, max;

// дана переменная  count 
// в зависимости от значения переменной
// вывестив консоль  слово товар в правильной форме
// 12 товаров, 33 товара, 21 товар и тд окончания..... 




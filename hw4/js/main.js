'use strict';
/*
Задача на цикл for of
Создать массив из целых чисел. 
Отрицательные элементы массива перенести в новый массив.
*/

let price = [1, -2, 10, 2, -5];
let forNumbers = []; // пока пустой массив обозначили
for (let item of price) {
    if (item < 0) {
        forNumbers.push(item);
    }
}
console.log(forNumbers);

/*
Задача на цикл for
Создать массив из целых чисел,
заполнить массив семью рандомными значениями в диапазоне [5; 300).
Поменять элементы с максимальным и минимальным значениями местами.
*/
let newM = [4, 6, 6, 3, 5, 66, 7]; // создали пустой массив
console.log(newM);
let minN;
let maxN;
for (let i = 0; i < newM.length; i++) {
    newM[i] = Math.floor(Math.random() * (300 - 5) + 5); // присваимаем новые рандомные значения от 5 до 300 (округляя к низу)
   
}
console.log(newM);
newM = newM.sort((a, b) => a - b); // сортируем методом по возрастанию
console.log(newM);
minN = newM[0]; // знаем min значение
maxN = newM[newM.length - 1 ]; // знаем max значение
//  let sumN = (minN + maxN) - maxN;
newM[0] = maxN;
newM[newM.length - 1] = minN;
console.log(newM);

 /// не знаю что делать дальше без 

/*
Задача на цикл while и метод массива
Дан массив и строка. 
Значение строки необходимо получать от пользователя 
в цикле while и добавлять в массив, если такой строки
 в нем еще не существует. 0 для выхода из цикла.
 */

let animals = ['cat', 'dog', 'bear'];
let stringA;
while(true) {
    let stringA = prompt('Введите название животного:');
    if ( stringA == '0' || stringA == '' || stringA == null) { // проверяем на валидность данных
        break;
    } 
    if (animals.includes(stringA)){
        continue; // на новую итерацию отправляемся
    } 
        animals.push(stringA)
    console.log(animals);
}
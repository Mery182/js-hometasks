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
console.log(newM); // новый массив с  рандомными значениями
let newM2 = newM.slice(); // клонировали  тот массив в этот
console.log(newM2);
newM2.sort((a, b) => a - b); // сортируем методом по возрастанию для получения max и min
console.log(newM2); // смотрим результат
minN = newM2[0]; // знаем min значение
maxN = newM2[newM2.length - 1 ]; // знаем max значение
console.log(minN);
console.log(maxN);

//  let sumN = (minN + maxN) - maxN;
for ( let i=0 ; i < newM.length;i++){
    for( let j=0;j < newM2.length; j++){
        if (newM[i] == minN){
            newM[i] = maxN;
        }
        if (newM[i] == maxN){
             newM[i] = minN;
        }

    }
}
console.log(newM);


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
<<<<<<< HEAD
    } 
    if (animals.includes(stringA)){
        continue; // на новую итерацию отправляемся
    } 
        animals.push(stringA)
=======
    } else if (animals.includes(stringA)){
        continue; // на новую итерацию отправляемся
    } else {
        animals.push(stringA)
        }
>>>>>>> 060351a8a8ac187e6767153db581c417bd8dcfd4
    console.log(animals);
}
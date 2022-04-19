'use strict';

/*
Задача 1 на метод sort()
Дан массив, необходимо отсортировать его по возрастанию длин вложенных массивов
*/

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
numbers.sort((a, b) => a.length - b.length);
console.log(numbers);


/*

Задача 2 на методы sort() и Math.random()
Необходимо случайным образом изменить порядок элементов в массиве.

*/
let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
// function randomPresents (){
//     return Math.random() - 0.5;
// }
// presents.sort(randomPresents);
presents.sort((a, b) => 0.5 - Math.random()) // сокращенный способ написания
console.log(presents);

/*
Задача 3 на методы filter() и includes()
Создать массив из пересечений массива first и second.

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

В итоге должен быть создан массив: ["Октябрь", "Май"]

*/

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
let result = [];
result.push((first.filter(i => i.includes('Октябрь'))));
result.push(second.filter(j => j.includes('Май')));
// console.log(result);
console.log(result.flat()); // использую спец.метод для преобразования вложенного массива в одноуровневый

/*
Задача 4 на метод some()
Дан массив температур. Необходимо выяснить, поднималась ли температура выше 500, вывести информацию об этом в консоль.
*/

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

function chech1(a) {
    for (let i of a) {
        if (i > 500) {
            return true;
        }
    }
    return false;
};
console.log(temperatures.some(chech1));
'use strict';

// ссылочные типы (объекты)
// у объектов могут быть свойства и метода
// набор свойств и методов каждого конкретного оббъекта зависит от типа объекта
// массив - объект типа Array 
// массивы это работа с упорядоченным набором данных 

// объявление массива
let numbers = new Array(); // пустой массив
numbers = new Array(3); // это длинна (размер) первоночального массива
console.log(numbers);
let ints = []; // пустой массив 
ints = [5, 10, -7];
console.log(ints);

//длинна массива - для  js это последний индекс плюс + 1, а по количеству элементов!!!
console.log(ints.length);

//разряженный массив  c пропусками элементов - длиянна ммасива расчитывается по количеству эллементов
ints = [4, 6, , -10, 0, , , 66, , 7];
console.log(ints);
console.log(ints.length);

let colors = ['blue', 'red', 'yellow', 'pink'];
console.log(colors);

//доступ к элементам массива осуществляется через []
console.log(colors[0]);
console.log(colors[colors.length - 2]);

//присвоение новго значения 
colors[0] = 'black';
colors[100] = 90;
console.log(colors);
console.log(colors[100]);
console.log(colors[200]); //  выдаст indefined
ints = [3, 6, 9];

//  многомерный массив
ints = [
    [34, 67, 12],
    [-90, 55, 3],
    [1, 44, -100]
]; // это двухмерный массив
console.log(ints[2][3]);
console.log(ints[2].length);



numbers = [5, 7, -12, -90, 11, -45];
// for of циклом удобно перебирать циклы
for (let element of numbers) {
    if (element > 0) console.log(element);
}

// увеличить каждый элемент массива умножить на 2
numbers = [5, 7, -12, -90, 11, -45];

for (let i = 0; i > numbers.length; i++) {
    //   console.log(numbers[i]*2);
    numbers[i] *= 2; //numbers = numbers * 2
}
console.log(numbers);

console.log(numbers[0] *= 2);
console.log(numbers[1] *= 2);

colors = ['blue', 'red', 'yellow', 'black', 'pink', 'brown'];
let letter = 'B';
let bColors = [];
for (let color of colors) { //   если не надо менять сам масси используем for of
    if (color.startsWith(letter.toLowerCase())) {
            bColors.push(color); // добавление одного или нескольких элементов в конец массива
        }
    }
    console.log(bColors);

ints = [[34, 67, 12],[-90, 55, 3], [1, 44, -100]];
let sum;
for( let arr of ints) {
 for(let int of arr){ // это новый массиы
 sum += intы[1][j]; 
}
}
console.log(sum);
////

colors = ['blue', 'red', 'yellow', 'black', 'pink', 'brown'];
letter = 'В';
//   удалить из массива цвета? которые не начинаются на letter
// без учета регистра

for( let i = colors.length - 1; i >= 0; i--){ // при удалении элементов -  перебор с конца так как индксы будут меняться 
    if(!colors[i].toLowerCase().startsWith(letter.toLowerCase())){ // если не начинается
         сolors.splice(i, 1) //нначиная с индекса 5 удаляет 1 элемент/ для удаления элементов по индексу в опрделеном количестве
    }
}
// 
colors = ['blue', 'red', 'yellow', 'black', 'pink', 'brown'];
colors.pop(); // удаляет и возвращет последний элемент массива
let lastElem = colors.pop(); // удаляет 
let firstElem = colors.shift();
colors.unshift('purple', 'orange'); // добавляет один или несколько элементов в начало массива
// индекс / количество / элементы для добавления
colors.splice(1, 2, 'greenyellow', 'silver');

// slice
// includes
// concat
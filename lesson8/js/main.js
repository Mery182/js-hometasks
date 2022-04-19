'use strict';

//

'use strict';
// ссылочны и примитивные типы
// передача по ссылке и копирование


let x = 12; //  в памяти  12 - x
let y = x; //  в памяти  x - y
x += 20;
console.log(x);
console.log(y);

let nums = [3, 7, 90];
for(let num of nums){
    num += 10;
}


let xArr = [2, 7, 90]; //   ссылочный тип массв
let yArr = xArr; // теперь к одному объекты мы можем обратиться по двум пееменным
for (let i = 0; i < xArr.length; i++) {
    xArr[i] += 2;
}
console.log(xArr); // один и тот же  массив что и ниже
console.log(yArr); // тут  тоже самое

function changeArgs(number, obj) {
    // number = 0;
    number += 10;
    obj.title = obj.title.toUpperCase();
}

let num = 0;
let book = {
    title: "Название книги"
};
changeArgs(num, book);
console.log(num);
console.log(book);

// последовательность выполнения кода - сначала объявляются все функции поименованные ( они высплывают function declaration)
common();

function aFn(){
    console.log("aFn");
}

function common(){
    aFn();
    cFn();
}

function bFn(){
    return "bFn";
}

function cFn(){
    console.log(bFn());
}

// всплытие (hoisting) функций — это механизм в JavaScript,
// в котором переменные и объявления функций,
// передвигаются вверх своей области видимости перед тем, как код будет выполнен.

// до выполнения кода интерпретатор JavaScript загружает в память функции,
// объявленные как function declaration (именованные),
// в результате функцию function declaration (именованные) можно вызвать ещё до того,
// как до неё дойдёт построчное выполнение кода.

// область видимости function declaration (именованных) - функция

// Переменные, объявленные через var:
// 1. ключевое слово var используется для объявления переменных
// 2. область видимости var переменных - функция
// 3. объявления var всплывают (само объявление, значение при этом равно undefined),
// те можно обратиться к var переменной до ее объявления,
// например:
a = 45;
var a; //  cначала всплывает  и покажет undefined
console.log(a);

// arguments - псевдомассив (можно итерировать, элементы хранятся по индексу, но нельзя использовать методы массивов)
// аргументов функций

// 1. В JavaScript любая функция может быть вызвана с произвольным количеством аргументов
// 2. Доступ к аргументам, которые передаются в функцию может осуществляться через псевдомассив arguments
// 3. В современном стандарте arguments отделены от локальных переменных функции
// (нельзя изменить значение локальной переменной через arguments[индекс])
printAll(6, 8, 90, 12 );  // они все передаются в функция, даже если она не готова их применять
function printAll(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);

    // нельзя изменить значение локальных переменных через arguments,
    // те инструкция
    arguments[0] = "новое значение для первого аргумента"; // не повлияет на значение a
// agruments - собирает все переданный значения, и он не имеет методов массива
    console.log("a = " + a);

    for (let arg of arguments) {
        console.log(arg);
    }
}

printAll(45, 89, 34, -1);

// this - контекст вызова функции
let itemInfo = {
    id: 125,
    title: "Букет",
    price: 3200,
 //   printInfo: function({}),  то же самое
    printInfo(){
        console.log(`Название товара: '${this.title}'. Стоимость: ${this.price} руб.`);
    }
};

itemInfo.printInfo();
// здесь ниже мы теряем контекст - так как функция принимает метод объекта (потеря контекста)
setTimeout(itemInfo.printInfo, 300);
// теперь привязываем контекст  ( this)
// у функции JS   есть свойства lexicalEnvironment, scope
// а методы функции - bind, call, apply 
                              /// bind метод 
setTimeout(itemInfo.printInfo.bind(itemInfo), 700);
     //// вызываем метод bind функции у метода printInfo объекта itemInfo
// стрелочные функции не имеют своего this и arguments

// в чем отличие метода foreach от цикла for?
// в чем отличие цикла for от цикла for of?
// в чем отличие цикла for of от цикла for in?
// что будет, если перебрать массив циклом fot in?

// что такое замыкание?
 let someArr = [3, 8, 10];
 for (let propName in someArr){
     console.log('propName' + someArr[propName]);
     console.log('propName' + propName);
 }
 


 //  объекты map set 

 let apple = { // 20
    name: "Яблоко",
    "calorific value": 47,
    carbohydrates: 10,
};
let mushroom = { // 30
    name: "Белый гриб",
    "calorific value": 34,
    carbohydrates: 1.1,
};
let water = {
    name: "Вода",
    "calorific value": 0,
    carbohydrates: 0,
};

///  map 
let food = new Map();
// добавление данных
food.set(apple, 20)
    .set(mushroom, 30)
    .set(water, 2);

if (food.has(apple)) {
    console.log("Информация о яблоках известна");
}
// удаление по ключу
food.delete(water);

if (food.has(water)) {
    console.log("Информация о воде известна");
}
// получить значение по ключу
console.log(food.get(apple));

// размер Map
console.log(food.size);

// перебор ключей
// {apple}, 20
// {mushroom}, 30
for (let key of food.keys()) {
    console.log(key.name);
}
// перебор значений
let portionsCount = 0;
for (let value of food.values()) {
    portionsCount += value;
}
console.log(portionsCount);

// перебор пар
for (let pair of food.entries()) { // food
    console.log(pair[0].name, pair[1]);
}

water = {
    name: "Вода",
    "calorific value": 0,
    carbohydrates: 0,
};

// Map из объекта
// [[name, Вода], [calorific value, 0], [carbohydrates, 0]]
let waterMap = new Map(Object.entries(water));
console.log(waterMap.get('carbohydrates')); // 0

// объект из Map
let foodObject = Object.fromEntries(food);
console.log(foodObject);

// SET - множество уникальных значений
let uniqueFood = new Set();
uniqueFood
    .add(apple)
    .add(apple)
    .add(water)
    .add(mushroom);

console.log(uniqueFood.size);

// перебор set for...of
for (let elem of uniqueFood) {
    console.log(elem.name);
}

// массив из ключей / значений мапы, сета
let arr = Array.from(food.keys());
console.log(arr);

arr = Array.from(food.values());
console.log(arr);

arr = Array.from(uniqueFood);
console.log(arr);

arr = [56, 89, 22, 22, 67, 11, 90, 90];
let numsSet = new Set(arr);
arr = Array.from(numsSet);
console.log(arr);
'use strict';

// именнованные

function getSum(a, b) { // объявление фунции и она принимает 2 переменные  -  значения на входде
    return a + b; // возвращает реузльтат работы функции и прерывает работу функции как break для цикла
    // return  - undefined
}
//вызов функции
getSum(3, 67);

let res = getSum(3, 67);
console.log(res);

let x = 90,
    y = 7;
res = getSum(x, y);
console.log(res);

let xx = 10;
let yy = 20;

function newN(x, y) {
    //  if (xx > yy)  return yy;
    //  return b;

    return xx > yy ? yy : xx; // через тернарный оператор
}

function paintBody(color = 'red') { // значения аргументов по умолчанию
    document.body.style.backgroundColor = color;
}
paintBody('black');
paintBody();


function all(age, name = 'Гость') { // снасала идут обязательные аргуементы, потом идут необязательные со значениями
    // name = name || 'Гость'; // так можно передать занчение по умолчению
    if (age < 7 || age > 200) {
        return `${name} , пользователь вашего возраста не может войти на сайт`;
    }
    if (age < 18) {
        return `${name} , пользователь вашего возраста не может совершать покупки`;
    }
    return `${name} , весь функционал сайта доступен`;
}
console.log(all(45));
console.log(all(45, 'Мария'));

function getAvg(...nums) { // это значит функция принимает на вход много переменных
    let sum = 0; // область видимости внутри функции
    for (elem of avgRes) { // используем for of если массив не меняем!!!!
        sum += elem;
    }
    return sum / nums.length;
}
// let avgRes = getAvg(34);
// avgRes = getAvg(34, 56, 12);
// avgRes = getAvg(7, 12, 8, 44, 1, 0, 45);


// обязательные, необязательные, ...переменное количество
// анонимные функции можно вызвать только после объеявления;
let lessZero = function (x) {
    // return x < 0 ? true : false;
    return x < 0;
}
// вызов анонимных функций 
if (lessZero(-90)) {
    console.log('Отрицательное число');
}

function createArr(fn, ...elem) {
    let arr = []
    for (let elem of elems) {
        if (fn(elem)) {
            arr.push(elem);
        }
    }
    return arr;
}

let arr = createArr(lessZero, 4, -90, 22, 1, 0, -4, -2);
arr = createArr(function (x) {
        return x < 0
    },
    4, -90, 22, 1, 0, -4, -2);

// замыкание 
function add(x){
    // lixicalEnvironment - хранит переменные, объявленные в функции
    // scope - хранит ссылку на то лексическое окружение, в котором была объявлена функция
    let addValue = x;
    return function (num) {
        return  addValue + num;
}
}

let add1 = add(1); // вызываем функцию в объявленной переменной
console.log(add1(56)); //

// домашняя работа
// 
function range (start, end, i = '1' ){
    i = i || 'Гость'; 
    let масисив = [];



    return massiv;
}

// ананимные стрелочные

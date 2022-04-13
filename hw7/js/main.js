'use strict';

/*
Написать функцию, которая принимает на вход три аргумента:

obj - объект, например, items,
from - число,
to - число.
Функция формирует и возвращает новый ОБЪЕКТ с объектами, 
значения свойств price которых лежат в диапазоне от значения 
from до значения to, не включая to.
*/

let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function creatObject(obj, from, to) {
    let newArr = {};

    for (let proP in obj) { //  значения получаем и перебираем
        if (obj[proP].price <= from || obj[proP].price > to || obj[proP].price == to) {
            delete obj[proP];

        }
        newArr = obj;
    }
    return newArr;
};
let check = creatObject(items, 0, 3000);
console.log(check);

/*
Написать функцию, которая принимает на вход три аргумента:

obj - объект, например, items,
itemTitle - строка, название товара, который хочет приобрести пользователь,
countToCart - число, количество товара, который хочет приобрести пользователь.
Функция должна найти товар с указанным в itemTitle названием и:

если количество позволяет, то уменьшить значение
свойства count в переданном объекте на countToCart вернуть true,

если количество не позволяет, то вывести информацию об этом в консоль и вернуть false.
*/

function seachFn(objec, itemTitle, countToCart) {
    for (let propName in objec) {
        //   console.log(propName); // имя свойства 
        // console.log(objec[propName]); // значение свойства
        //  console.log(objec[propName][price]); // динамическое изменение свойства
        //  console.log(objec[propName].title); // значение свойства
        if (objec[propName].title == itemTitle) {
            console.log(objec[propName]);
        }
        if (objec[propName].count > countToCart) {
          objec[propName].count = objec[propName].count - countToCart;
          console.log(objec[propName]) // смотрим вычитает ли или нет
            return true;
        } else if (objec[propName].count == countToCart) {
            return true;
        }   else {
            console.log('Количество не позволяет!')
            return false;
        }
    }

};


let findResult = seachFn(items, 'Гитара', 60);
console.log(findResult);

/*
Отсортировать массив books по значению свойства title вложенных объектов
*/
let books = [{
        author: "Толстой",
        title: "Война и мир"
    },
    {
        author: "Пушкин",
        title: "Пир во время чумы"
    },
    {
        author: "Лермонтов",
        title: "Тамань"
    },
    {
        author: "Гончаров",
        title: "Обломов"
    },
    {
        author: "Лермонтов",
        title: "Герой нашего времени"
    },
    {
        author: "Пушкин",
        title: "Руслан и Людмила"
    },
    {
        author: "Лермонтов",
        title: "И скучно, и грустно"
    },
];
let resultABC = books.sort((a, b) => a.title > b.title ? 1 : -1); // сортируем 
console.log(resultABC);
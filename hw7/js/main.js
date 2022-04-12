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

// это новый ОБЪЕКТ, в котором будут лежать объекты
function creatObject(obj, from, to){
    let min = from;
    let max = to - 1;
    let sum1 = Math.floor(Math.random() * (max - min) + min); // случайное число в заданном диапазоне
    let sum2 = Math.floor(Math.random() * (max - min) + min);
    let sum3 = Math.floor(Math.random() * (max - min) + min);
  //  console.log(sum);
let newobj;
    return newobj = {

        obj1: {
            price: `${sum1}`,
        },
        obj2: {
            price: `${sum2}`,
        },
        obj3: {
            price: `${sum3}`,
        },
    };
};
let iteMS = new Object();
let check = creatObject(iteMS, 1, 6);
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

function seachFn(objec, itemTitle, countToCart) {
    let res;
    for (let i in objec) {
         res = objec[i];
      }
      // не понимаю как работать с такими вложенностями
    return res;
}


 let findResult = seachFn(items, 'Гитара', 1);
 console.log(findResult);

/*
Отсортировать массив books по значению свойства title вложенных объектов
*/
let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];
let resultABC = books.sort((a, b) => a.title > b.title ? 1 : -1); // сортируем 
console.log(resultABC);
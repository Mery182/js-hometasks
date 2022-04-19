'use strict';

// анонимные функции

let oldSqrt = function(x){
    return x * x;
};
let oldDouble = function(x){
    return x * 2;
};

// анонимные стрелочные функции
// если функция принимает 1 аргумент, круглые скобки можно не ставить
// стрелочные функции не имеют this  и arguments в отличии от именованных и обычных анонимных

let sqrt = x => x * x;
let double = x => x * 2;
let printTitle = (element, text) => {
    if (text.length < 3 ) return;
    element.innerText = text.toUpperCase();
};
printTitle(document.body,`sqrt 3 = ${sqrt(3)}, double 4 = ${double(4)}`);

// Методы массивов filter

let images = ['flowers.png', 'cat.svg', 'elephant.jpg','tree.svg'];
let checkF = function (param){
    return param.endsWith('.svg');
};
checkF = param => param.endsWith('.svg');
let svgImages = images.filter(checkF); // здесь filterу передаем ссылку на функцию
svgImages = images.filter(param => param.endsWith('.svg'));
console.log(svgImages);

// cтрелочный синтаксис

let element = [ , 'flowers.png', NaN, 'cat.svg', null, 'elephant.jpg', 0, '', 'tree.svg', false];
let checkF2 = function(param){
    return !param == false;
};
let clearArr = element.filter(checkF2);
console.log(clearArr);

let logins = ['rewr','xcvvx','fdg','sdsg'];
//  function newF(i){
//     return i.toUpperCase();
// };
let checkUpper = logins.map( i => i.toUpperCase());
console.log(checkUpper);

let prices = [900, 3500, 10400, 750, 3600, 2100];

let checkF22 = prices.map( x => x * 0.9 + ' p.');
console.log(checkF22);

// задачи на  every(func)

let mas = ['cat.svg', 'elephant.svg','tree.svg'];
let checkF223 = mas.every(v => v.endsWith('svg'));
console.log(checkF223);

let mas1 = [ 21, 33, 30];
let checkF2232 = mas1.every(w => w < 35 && w > 18 );
console.log(checkF2232);

// some

let ages = [23, 21, 34, 18, 90, 44, 50];
let check1 = ages.every(g => g >= 18);
let check2 = ages.some(f => f > 40);
if (check1 === check2){
console.log('Группа может отправляться в поход');
}
// forEeach

let names = ['aPle','MicROsoft', 'Sony'];
let capitalizeFn = function(element, index, arr){
console.log(`Элемент:${element} , индекс${index}. Из массива${arr}` )
let first = element[0].toUpperCase();
let last = element[element.length - 1].toUpperCase();
let middle = element.substring(1, element.length -1).toLowerCase();
arr[index] = first + middle + last;
}
names.forEach(capitalizeFn);
console.log(names);

// sort - принимает на вход 2 аргумента

let temps = [307, 412, -12];
function sortTemps( a,b){
    if(a === b) return 0;
    if(a > b) return -1;
    return 1;
}
temps.sort(sortTemps);
console.log(temps);
// let checkz = temps.sort((a,b) => a - b );
// console.log(checkz);
'use strict';

//объекта типа object

let userDate = {};

userDate.name = 'Paul';

userDate.age = 23;
userDate['favourite colors'] = ['red', 'orange', 'yellow'];
console.log(userDate.age);
console.log(userDate.name);

let a  = userDate.age + userDate.name;
console.log(a);
userDate['favourite colors'].forEach(color => console.log(userDate['favourite colors']));

document.body.style.backgroundColor = 
userDate['favourite colors'][Math.floor(Math.random() * userDate['favourite colors'].length)];


let jsBook = {
 title : 'JavaScript',
 pageCount : 780
};
let cssBook = {
    title : 'CSS 3',
    pageCount : 1200
};
// присваиваем массиву два объекта - без кавычек!
userDate.favouriteBooks = [ jsBook, cssBook ];
console.log(userDate.favouriteBooks);

console.log(userDate);
//cssBook.favouriteBooks[1][1];
let books = userDate.favouriteBooks;
console.log(books[books.length - 1].pageCount);

for(let elem of userDate.favouriteBooks){
    if (elem.pageCount > 1000 ) console.log(elem.title);
};
// сокращенный вариант с использование forEach
 userDate.favouriteBooks.forEach((elem,index,arr) => {
    if (elem.pageCount > 1000 ) console.log(elem.title);
 });
// обращение к несуществующему свойству
 console.log(userDate.photo); // undefined

 // проверка на наличие свойст в объекте
// 1. сравнить с undefined

if (userDate.photo == undefined){
    userDate.photo = 'default.svg';
}
// 2.  использовать оператор in
console.log('githubLink' in userDate);


if(!('githubLink'in userDate)){
    userDate.githubLink = null;
}


// удаление свойства 

delete userDate.githubLink;

// методы для объектов 
//  массив ключей
let userDataKey = Object.keys(userDate);
console.log (userDataKey);
console.log (Object.values(cssBook));

let cssBookEntries = Object.entries(cssBook);
console.log(cssBookEntries);

// перебор объектов циклом for in
// в i оказывается навзвание свойства
cssBook = {
    title : 'CSS 3',
    pageCount : 1200
};
for(let propName in cssBook){
    console.log(propName); // свойство
    console.log(cssBook[propName]); // значениея
}
let propName = 'title';
console.log(propName);
console.log(cssBook['title']);

// вычисляемые свойства

let property = prompt('Введите color,tkcb [jnbnt bpvtybnm' +  'цвет текста');
let color = prompt('Введите цвет');

let setting = {};
setting[property] = color;  // обращаемся к объекту
// setting {
//     [property] = color
// };

// сокращенная запись свойство из перемнной

function getUnit(health, attack){
    if(health < 10 || attack < 10) {
        return;
    }
    return { // если все ок  возвращаем объескт
        type: 'batle unit',
       // health: health,
       // atatck: attack
        health,
        attack
    }
}
 let unit = getUnit( 34, 78 );
 console.log(unit.health);
 console.log(unit.attack);

 // деструктуризация объекта

 cssBook = {
    title : 'CSS 3',
    pageCount : 1200,
    price: 3000,
};

let {title, pageCount, bookPrice} = cssBook;
console.log(title); // css 3 значение будет присвоено, так как лючи совпадают 
console.log(pageCount); // 1200 потому что названия совпали
console.log(bookPrice);  // undefined
// или можно так записать
console.log(title, pageCount, bookPrice);

let {title: cssTitle, cover: cssCover = 'default.png', ...others} = cssBook;
console.log(cssTitle, cssCover, others);
// до деструктуризации 
let element = {
    height: 44,
    width:100,
    color:'red',
    border:'orange'
};

function getPerimeter(block){
    return 2*(block.height + block.width);
};
console.log(getPerimeter(element));
//  ипользование деструктуризации парметров c тем же примером 
function getPerimeter({height, width}){
    return 2*(height + width);
};
console.log(getPerimeter(element));

//методы объекта - функция, обяъвленная в объекте

let settings = {
color: 'red',
'background-color': 'orange',
// paintElem: functon (){
    
// }, то же самое
paintElem(elem){
//  elem.style.color = settings.color;
//  elem.style.backgroundColor = setting['background-color'];
elem.style.color = this.color;
elem.style.backgroindColor = this['background-color'];
},
};
// вызов  метода объекта
//ес
settings.paintElem(document.body);


console.log(userDate);
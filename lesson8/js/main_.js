'use strict';


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

function valueFn(someObj){
    let res;
    // for (let x in someObj)    x - это ключ объектов
    for (let x in someObj){ // piano  равно строки
  //  someObj.x - х это имя свойства
 //   someObj[x] - х это пеерменная 
 // someObj[x] - т/е/  это возвражает объект это уже title price count
     res = someObj[x].price *= 1.1;
 }
  return console.log(res);
 };

 valueFn(items);


 let it = {
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
 console.log(it.flute.price); // 900
 console.log(it['flute'].price); 
 console.log(it.harp.title); //900
 console.log(it['flute'].title);  //тоже самое

 let someVar= 'fruit';
 // console.log(it[someVar].price); // сюда подсавляется значение свойства

 let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];

function creatN (someOb){
   for( let res of someOb){ // находится в res сами объекты 
        console.log(res);
        res.price = 200;
      //  someOb[] // в массивы можно вкладывать в квадратных скобках только число
   }
return   console.log();
}
creatN(books);
console.log(books);

function fnC (ob, whrite){

    return ob.filter( x => x.whrite === whrite);
    
}
fnC(books);
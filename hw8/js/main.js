'use strict';

/*

1) Создать Map
2) Добавить в Map несколько пар, где ключ - логин пользователя, значение - название города, в котором живет
   пользователь
3) Написать функцию, которая принимает на вход Map и название города. Функция должна создать и вернуть массив
   логинов, которые соответствуют переданному городу

*/
let baseUser = new Map();
baseUser.set('sdc6md', 'Москва')
        .set('hw324bns', 'Cпб')
         .set('hw324bs', 'Краснодар')
       .set('dsd3wfd', 'Псков');

function checkUser(object, town) {

   for ( let elem of object){ 
  //    console.log(elem); //  elem - это пары  ['sdc6md', 'Москва']
   if (elem[1] == town){  //  elem[1] - это 'Москва'
      return elem;
   }    
   }
};

let res = checkUser(baseUser, 'Краснодар');
 console.log(res);

 /*
Задача 2
Написать функцию, которая принимает на вход массив слов и
возвращает количество одинаковых слов с массиве в виде Map
(ключ - слово, значение - количество повторений слова)
 */

let arrLetter  = [ 'собака', 'кот', 'конь' , 'мышь', 'конь'];

function creatObject(arr){
 let object = new Map();

  //console.log(arrLetter);
  for(let i of arr){
     if( i == i ){
        object.set(i);
     }
  
  }
 return object;

}
let result = creatObject(arrLetter);
console.log(result);


/*
Дана Map, ключи - id пользователей,
значение - объект и информацией о пользователе, например:

     let customerMap = new Map();
     customerMap.set(45, {name: "Павел", id: 45, age: 23});
     customerMap.set(87, {name: "Олег", id: 87, age: 45});
     customerMap.set(91, {name: "Максим", id: 91, age: 18});
     customerMap.set(99, {name: "Евгения", id: 99, age: 66});
     customerMap.set(101, {name: "Алексей", id: 101, age: 34});
     customerMap.set(112, {name: "Клара", id: 112, age: 39});

Написать функцию, которая принимает на вход Map, ageFrom и ageTo. 
Функция должна создать и вернуть новую Map, в которую войдут все покупатели, 
возраст которых находится в диапазоне от from до to (не включая to)

*/
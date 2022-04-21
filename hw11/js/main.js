'use strict';


/*
Написать функцию generateField(n) по генерации поля размером n x n.
Значение n не может быть меньше 3. Для 3х ячеек поля
(для выбора ячейки использовать random) добавить атрибут prise.
 Значение атрибута prise - значение из объекта prises. 
 Пример того, что должно получиться при n равным 4 и генерации поля 4 Х 4: 

*/
/*
Задача 1
Добавить функционал к задаче из task9 - генерация поля:

Пользователю дается несколько попыток на то, чтобы найти приз, спрятанный на поле.
Игра должна закончится, если пользователь нашел приз или у его закончилось количество попыток.
*/

let squere = document.getElementById('square_blok');
let n_blok = document.createElement('table');
let text = document.querySelector('.info');
let p = document.createElement('p');
p.style.fontSize = '20px';
p.innerHTML = 'У вас две попытки';
text.before(p);


let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n) {
    let row = [];
    let cell = [];
    if (n < 3) {
        return; // если меньше прерываем функцию
    }
    // генерируем ячейки и ряды
    for (let i = 0; i < n; i++) {
        row = n_blok.insertRow(); //  ряд
        for (let k = 0; k < n; k++) {
            cell = row.insertCell(); //ячейки
            // создаем массив ячеек
            cell.innerHTML = '?';
        }
    }
    // к массиву ячеей обращаться и рандомным трем
    let new_cell = document.querySelectorAll('td');
    console.log(new_cell);
    for (let w = 0; w < 3; w++) {
        let rand = Math.floor(Math.random() * new_cell.length);
        new_cell[rand].setAttribute('price', Object.values(prises)[w]);
    }
};

squere.append(n_blok);
let result = generateField(3);
////////////////
// for(i=0 ; i<squere.length ; i++){
//     squere[i].addEventListener("click", findDiscount, false);
//   }

n_blok.addEventListener('click', findDiscount);
let allD = []; // создаем массив для подсчета кликов
function findDiscount(e) {
    let discount = e.target; // получаем целевое событие
    console.log(discount); // видим его при нажатии
    allD.push(discount); // собираем в массив количество кликов, чтобы сравнивать по длине
    discount.style.cssText =
        `background-color:black;
         color:white;`;
    let find = discount.hasAttribute('price');
    console.log(discount.hasAttribute('price'));
    let x = document.querySelector('.info');
    console.log(x);
    if (find == true) {
        console.log('find Discount');
        let infoPrice = discount.getAttribute('price');
        p.innerHTML = 'Поздравляем! Вам oоочень повезло!';
        discount.innerHTML = `Вы нашли! <br> Ваш подарок: <br> ${infoPrice}`;
        this.removeEventListener('click', findDiscount);
    } else if (find == false && allD.length < 2) {
        p.innerHTML = 'Осталась одна попытка';
        discount.innerHTML = "Удача впереди!";
    } else if (allD.length == 2) {
        console.log('Попыток больше нет');
        // x.innerHTML = 'У тебя нет больше попыток';
       p.innerHTML = 'Увы...попыток больше нет';
       this.removeEventListener('click', findDiscount);
    }
    
}
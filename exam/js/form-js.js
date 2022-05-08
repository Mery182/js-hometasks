'use strict';


// <form name="add_task" novalidate></form>
// <input name="name_tast" type="text" placeholder="Введите название задачи" required></input>

let allForm = document.forms.add_task; // вся форма 
let nameInput = allForm.elements.name_tast; // значение поля name
let textArea = allForm.elements.text; // значение textArea
let timeInput = allForm.elements.time; // поле Data

let persone = document.getElementsByName('pers'); // поле для ввода участников
let persone2 =[];

let t = document.getElementById('error_name');
let s = document.getElementById('success_message');
let v = document.getElementById('error_data');
let e = document.getElementById('enough');
let sectionAdd = document.getElementById('add');
let alltrGet = [];
console.log(sectionAdd);
let add = document.getElementById('add-person');
console.log(add);

/// 
add.addEventListener('click', function (e) {  // добавление участника
    e.preventDefault();
    let allbl = document.createElement('div');
    let l = document.createElement('input');
    l.classList.add('this-input');
    let inI = document.querySelector('.this-input');
     if(persone.length > 2){  // больше трех добавить нельзя
      add.removeEventListener();
      allbl.append(e);
      e.innerHTML ='Больше трех добавить нельзя';      
     };

    l.setAttribute('placeholder', 'Введите имя участника')
    l.setAttribute('name', 'pers');
    l.setAttribute('type', 'text');
    let d = document.createElement('span'); // добавяем крестик
    d.classList.add('close');

    // alltrGet.push(trGet);
    sectionAdd.append(allbl);
    allbl.prepend(l, d);
    d.addEventListener('click', function (e) {
        this.parentElement.remove(); // удаляемродителя в который крестик вложен
    });
})

/////

console.log(v);
let objectInput = {}; // создаем объект пустой
 
allForm.addEventListener('submit', function (e) {  // отправка формы
     e.preventDefault();
     persone.forEach(el =>{
       
         if(!(el == '')){
            persone2.push(el.value);
         } 
     })
    

    let nowTime = new Date(); // получаем текущее время
    let nowTimeParse = Date.parse(nowTime); // преобразовываем текущее время в милисекунды

    let p = timeInput.valueAsNumber; // время вверденное пользователем в милисек
    console.log(p);


    function checkForm() { // проверка первой формы
        if (nameInput.value.length < 2 || nameInput.value.length > 20) {
            t.innerHTML = 'Значение должно быть в диапозоне от 2 до 20!';
            return false;
        } else {
            return true;
        }
    }

    function checkData() { // проверка даты
        if (nowTimeParse > p) {
            v.innerHTML = 'Дата не может быть в прошлом';
            return false;
        } else if (timeInput.value === '') {
            v.innerHTML = 'Дата обязательна';
            return false;
        } else return true;
    }

    let xForm = localStorage.getItem('xForm'); // создаем переменную получаем данные по ключу
    if ((checkForm() === true) && (checkData() === true)) {
        s.innerHTML = 'Задача была успешно добавлена';
        v.innerHTML = '';
        t.innerHTML = '';

        objectInput = {
            title: `${nameInput.value}`,
            description: `${textArea.value}`,
            date: `${timeInput.value}`,
           man: persone2
    };
        console.log(objectInput);
        if (xForm) { // если есть данные
            xForm = JSON.parse(xForm); // преобразовавыаем
        } else { // если равен null
            xForm = []; // создаем массив 
        }
        xForm.push(objectInput); // собираем в хранилище все данные  сформ
        //  console.log(xForm[0].title);
        localStorage.setItem('xForm', JSON.stringify(xForm)); // сохраняем ключ xForm  и преобразуем значение JavaScript в строку JSON,
    }
    // теперь создаем localStorage    



});
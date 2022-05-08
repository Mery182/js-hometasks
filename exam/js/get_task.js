'use strict';

// добавление объекта на страницу

let creatNewSection = document.getElementById('sectionformInfo');
let getFormInfo = localStorage.getItem('xForm'); // получили весь массив
getFormInfo = JSON.parse(getFormInfo);
console.log(getFormInfo);
let blok, h, txt, spn, spn22; // объявляем пермееные - это будущие теги в html
let blokClick = []; // создаем массив 
let getClass = [];
let newArr = [];

if (!getFormInfo.length) { // если пуст LocalStorage
  creatNewSection.innerHTML = 'Нет задач';
  document.querySelector('.delete_button').remove();
} else {

  for (let x of getFormInfo) { //  перебираем 
    let g = x.date; // 1 задача description

    console.log(x); //  получаем точную дату
    blok = document.createElement('div'); //  создаем div
    h = document.createElement('h4'); // создаем заголовок
    txt = document.createElement('p'); // создаем параграф
    spn = document.createElement('span'); // создаем span
    console.log(x.date.slice(0,10));
    spn.innerHTML = `Выполнить к: ${x.date.slice(0,10)}`;
    txt.innerHTML = x.description;
    h.innerHTML = x.title;

    blok.classList.add('task_blok');
    creatNewSection.prepend(blok); // добавляем в самое начало 
    blok.append(h, txt, spn);

    if(x.man != ""){
      spn22 = document.createElement('span'); // создаем span
      spn22.innerHTML = `Участники: ${x.man}`;
      blok.append(spn22); // добавляем в конец самый
      }

    blok.addEventListener('click', function (e) {
      let click = e.currentTarget; // получаем событие
      this.classList.toggle('bg_color'); // добавляем или удаляем при нажатии    
      getClass = document.querySelectorAll('.bg_color');
      getClass = Array.from(document.querySelectorAll('.bg_color'));
    });


  }
  // теперь по клику удаляем элементы div
  let but = document.querySelector('.delete_button');
  but.addEventListener('click', function (e) {
    for (let elem of getClass) {
      elem.remove();
      blokClick.push(elem.children[0].textContent); // получаем Текст задачи - и проверяем совпадения если описание дублируется
    }

    console.log(blokClick); // ловит клик и вынимает текст title блока
    for (let el of blokClick) {
      newArr = getFormInfo.filter(item => item.title == el);

      for (let i = 0; i < getFormInfo.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
          if (newArr[j] == getFormInfo[i]) {
            getFormInfo.splice(i, 1);

            localStorage.setItem('xForm', JSON.stringify(getFormInfo));

          }
        }
      }
    }
  })
}
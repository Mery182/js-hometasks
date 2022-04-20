"use strict";

let sales = () => {
    return {
        a15d25e1: 10, // в процентах
        d137d16e: 15, // в процентах
        "936b4763": 30, // в процентах
    }
};

// TODO (1) при нажатии на контейнер отображать скидку и удалять обработчик события
let container = document.getElementById('sale_container');
container.addEventListener('click', showSale);


function showSale(event) /* ({target})  */ { // здесь event - это событие this 
    let clickElem = event.target; //  // let clickElem = target;     так получаем целовой элемент
    console.log(clickElem);
   
    let saleCode = clickElem.dataset.sale; // получаем конкретный атрибут d137d16e
    console.log(saleCode);
    console.log(sales());
    if(saleCode !== undefined){ // значит клик прошел на p
     // отобразить размер скидки
     clickElem.innerText = sales()[saleCode] + '%'; // это значение ключа обекта
     clickElem.style.cssText = 
       `
       background-color:black;
       color:white;`;
    this.removeEventListener('click', showSale); // так функция отработает один раз по одному клику
    }
    //  удаление обработчика события - используют 
       

};



// TODO (2) менять цвет фона body на выбранный пользователем
//  значение цвета - значение атрибута value радиокнопок

let colorsRadio = document.forms['change-color'].elements.color; // name="color" 
console.log(colorsRadio);
for(let btn of colorsRadio){ // перебираем список кнопок 
     btn.addEventListener('focus', function(){
      document.body.style.backgroundColor = this.value; //btn.value
     });
}

/* TODO (3) разблокировать поле, если чекбокс был отмечен */
let x = document.forms.lesson.elements['add-info'];
let y = document.forms.lesson.elements['info'];
x.addEventListener('click', check);
console.log(x);
function check(){
    if(x.checked){
        document.forms.lesson.elements.info.disabled = false;
    } else {
        document.forms.lesson.elements.info.disabled = true;
    }
};
//   document.forms.lesson.elements.info.disabled = !x.checked;

/* TODO (4) собрать выбранные языки и страны в массив */
document.forms.lesson.addEventListener('submit', function(e){
e.preventDefault();

let langs=[]; //  масси сюда собираем языки которые выбрал пользователь
let countries = []; // сюда страны
// lesons этщ this 
for(let langInput of this.elements['lang[]']){ // this - это форма
 if(langInput.checked) langs.push(langInput.value);
}
//
for(let option of this.elements.countries){
    if(option.selected) countries.push(option.value);
}
console.log(langs,countries);
});
/* TODO (5) реализовать валидацию данных, вводимых пользователем в режиме реального времени */


'use strict';

//

let userInfo = () => {
    return {
        name: 'Глеб',
        img: 'https://picsum.photos/200/300?random=1'
    }
};
function addComments(e) { // функции присвоен объет события
    e.preventDefault(); // отменяет действия, привязанные к событию
    let textArea = document.querySelector('#comment-text');
    let textAreaValue = textArea.value.trim(); // пользовательствкий ввод значение
    // если значение textArea.value выходит за диапазон от 1 до 300
    if (textAreaValue.length < 1 || textAreaValue.length > 300) { // 
        let error = document.getElementById('error');
        error.innerText = 'Размер сообщения не может быть меньше 1 или больше 300';
        return;
    }
    let user = userInfo(); //  получили верхнуюю let  это объект 
    let commentContainer = document.createElement('div');
    commentContainer.innerHTML =
        `<img src='${user.img}' alt='${user.name}'>
    <div>
        <span>${user.name}</span>
        <span>${textAreaValue}</span>
    </div>`;
    document.querySelector('.comments').append(commentContainer);
    this.reset(); // при обработки собитий this  это то у которого был вызван addEventListening
};

// 1. элемент, на котором происходит событие
// 2. само событие
// 3. какая функция должна быть вызвана при наступлении события
// получаем форму
// name ='comment-form';
let form = document.querySelector('form');
// form = document.forms['comment-form']; есть такое событие у объекта document
// submit -> addComment
// добавить  обработчик события
form.addEventListener('submit', addComments); //  при нажатии на  submit вызовется функция addComment


// color-container

let colors = ['red', 'white' , 'green' , 'black'];
// function changeColor (){
//   this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// }
// document.getElementById('color-container').addEventListener('click', changeColor);

// function changeColor (){
//   this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// }
document.getElementById('color-container').addEventListener('click', function(){
    let random = Math.floor(Math.random() * colors.length);
    this.style.backgroundColor = colors[random];
});

//// 
document.querySelectorAll('.article p:first-child')
.forEach( titlesP => {
  titlesP.addEventListener('click', () =>      
      titlesP.nextElementSibling.classList.toggle('open')      
  )
});

'use strict';


/// новая 

let booksByGenre = [{
        genreName: "Crafts",
        books: [{
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [{
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];
console.log(booksByGenre);

let booksSection = document.querySelector('.books-section');
console.log(booksByGenre.books);
for (let x of booksByGenre) { // перебираем массив
    console.log(x);
    let blok = document.createElement('div'); // это будет div
    blok.classList.add('all_ganre');
    //теперь создаем  h2

    let name = document.createElement('h2');
    // теперь в  h2 поместить нужно текст
    name.innerText = x.genreName; // 
    console.log(x.genreName); //  Имя книги
    console.log(x.books);

    let blok2 = document.createElement('div');
    blok2.classList.add('books');

    for (let item of x.books) { // перебираем  внутренности
        //  console.log(item);
        //  console.log(item.title);
        let artic = document.createElement('article');
        artic.innerHTML = `<span>${item.title}</span>
                         <img src='${item.img}'>
                         <p>${item.description}</p>
                          <a href=''>Читать</a>`;
        blok2.append(artic);
    }
    booksSection.append(blok, name, blok2);
    blok.append(name, blok2);

};

/*
Написать функцию generateTable, которая принимает на вход
 массив объектов и создает таблицу. Функция не должна быть
  привязана к конкретным названиям свойств. Заголовки ячеек - 
  названия свойств в верхнем регистре. Пример того, что должно получиться на изображении
*/
let articles = [{
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];
let goods = [{
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },

];
console.log(goods);
let tab = document.getElementById('sq')

let tableArea = document.createElement("table-block");
let table = document.createElement("table");

function generateTable(arr) {
    let row;
    let cell;
    // let title = Object.keys(arr[0]);
    // let firstRow = table.insertRow();
    // for(let title of title){
    //     let cell = firstRow.insertCell();
    //     cell.innerText = title;
    // }
    // for (let elem of arr) {
    //  let  row = table.insertRow();
    //  for(let prop in elem){
    // let cell = row.insertCell();
    //  cell.innerHTML = elem[prop];

    //  }
    // }
 // 
    let row1 = table.insertRow(); // это первый заголов без циклов - он статичный
    let keys = Object.keys(arr[0])  // это самый первый жлемент массивва
    let firstRow = table.insertRow();
    console.log(keys);
    for (let key of keys) {
      let cell = firstRow.insertCell();
        cell.innerText = key.toUpperCase();
    }
//  конец заголовка
    for (let i = 0; i < arr.length; i++) { 
        row = table.insertRow(); //  ряд (строка)        
        for (let k = 0; k < Object.values(arr[i]).length; k++) {
            cell = row.insertCell(); // количество ячейки определяется количеством значений 
            cell.innerText = Object.values(arr[i])[k];

            // for (let artic in arr) {
            //     for (let m in arr[artic]) {
            //         for (let l = 0; l < arr.length; l++) {
            //     cell.innerHTML = `${arr[artic][m]}`;   
            //         }    
            //     }   
            //    }   
        }
    }

    // // dcfs 
    // for (var i = 0; i < arr.length; i++) {
    //     for (let artic in arr) {
    //      cell.innerHTML = `${artic.title}`;

    //     }
    // }
    // //ljlk


};
tab.append(table);

let res = generateTable(articles);
/*
Написать функцию generateField(n) по генерации поля размером n x n.
Значение n не может быть меньше 3. Для 3х ячеек поля
(для выбора ячейки использовать random) добавить атрибут prise.
 Значение атрибута prise - значение из объекта prises. 
 Пример того, что должно получиться при n равным 4 и генерации поля 4 Х 4: 

*/
let squere = document.getElementById('square_blok');
let n_blok = document.createElement('table');
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

        }
    }
   
    // к массиву ячеей обращаться и рандомным трем
    let new_cell = document.querySelectorAll('td');
    console.log(new_cell);
    for(let w = 0; w <3; w++){
        let rand = Math.floor(Math.random() * new_cell.length);
        console.log(prises);
        new_cell[rand].innerHTML = Object.values(prises)[w];
    }
    
};
squere.append(n_blok);


let result = generateField(4);



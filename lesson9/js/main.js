'use strict';

let images = [
    'https://picsum.photos/1000/1000?random=1',
    'https://picsum.photos/1000/1000?random=1',
    'https://picsum.photos/1000/1000?random=1'
];

// получить все элементы  с классом

// let itemTitle = document.getElementsByClassName('item_title');
let itemTitle = document.querySelectorAll('.item_title'); // тоже самое но как в css
console.log(itemTitle);

for (let i = 0; i < itemTitle.length; i++) {
    console.log(itemTitle[i]) // это отдельные элементы
    // создание html элемента
    let img = document.createElement('img'); //  создаем img
    // но в html его еще не сущесвтует
    console.log(img);
    // теgерь добавление атрибутов элементу
    img.setAttribute('src', images[i]);
    // теперь добавление элемеенты в html 
    itemTitle[i].after(img);
}

// новая задача 
//  element.innerText - для получения/ добавления текста метод
document.querySelectorAll('.item__price')
    .forEach(element => element.innerText = parseInt(element.innerText) / 2)


// новая задача  ниже 

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/328/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/300"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/300"
    }
};

let cardsSection = document.querySelector('.cards-section');
// console.log(Object.values(goods)); // вынимает значения их объекта - будет массив с подобъектами
for (let x of Object.values(goods)) {
    console.log(x); // это объект один для которого мы и создаем  div и т/д
    let card = document.createElement('div'); // это будет div
    card.classList.add('card'); // появится div  c классом card
    //теперь создаем  h2
    let title = document.createElement('h2');
    // теперь в  h2 поместить нужно текст
    title.innerText = x.title; // обращаемся к названию объекта title

    let img = document.createElement('img');
    img.classList.add('card__image');
    img.setAttribute('src', x.img); // у элемента img есть свойство src img.src = x.img

    //   теперь стоимость создаем
    let price = document.createElement('p');
    price.innerText = x.price;

    let count = document.createElement('div'); // создаем div
    count.classList.add('card__count-info'); // присваиваем этому div class
    if (x.count > 0) {
        count.innerHTML =
            `<button>-</button>
    <span>${x.count}</span>
    <button>+</button>`;
    } else {
        count.innerHTML = `<span>Товара нет в наличии</span>`
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}

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
                          <a>Читать</a>`;
       blok2.append(artic);
    }
    booksSection.append(blok, name,blok2);
    blok.append(name,blok2);
    
};
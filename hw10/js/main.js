"use strict";


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
        img: "https://picsum.photos/id/988/300"
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
///////////


let startCount;
///////////
let cardsSection = document.querySelector(".cards-section");
for (let x of Object.values(goods)) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = x.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img);

    let price = document.createElement("p");
    price.innerText = x.price;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    console.log(x.count);
    if (x.count > 0) {
        count.innerHTML =
            `<button class='decrease'>-</button> 
             <span class='totalCount'>${x.count}</span> 
             <button class='increase'>+</button>`;

    } else {
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }

    card.append(title, img, price, count);
    cardsSection.append(card);
}
// count 
let dd = document.querySelectorAll('.decrease'); // уменьшаем
console.log(dd); // NodeList
dd.forEach((elem) => { // перебор всей коллекции
    console.log(elem); // каждая кнопка с минусом 
    let max = elem.nextElementSibling.innerHTML;
    console.log(max);
     elem.addEventListener('click', function () { // назначаем каждому элементу коллекции событие click
        if(!(elem.nextElementSibling.innerHTML == 0)){ //  пока ${x.count} не равно 0 можно уменьшать
        elem.nextElementSibling.innerHTML--;
        }
    });
    console.log(max);
    
});
let yy = document.querySelectorAll('.increase'); // уменьшаем
console.log(yy); // NodeList
yy.forEach((elem) => { // перебор всей коллекции
    console.log(elem); // каждая кнопка с плюсом 
  //  let max2 = elem.nextElementSibling.innerHTML;
  let y = elem.previousElementSibling.innerHTML;
console.log(y);
     elem.addEventListener('click', function () { // назначаем каждому элементу коллекции событие click
        if(elem.previousElementSibling.innerHTML < y){
        elem.previousElementSibling.innerHTML++;
       }
    });
});

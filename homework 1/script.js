"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinks = document.getElementsByClassName("card-link");
for (let card of cardLinks) {
	card.textContent = "ссылка";
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardLinksInBody = document.querySelectorAll(".card-body .card-link");
console.log(cardLinksInBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.

const title = document.title;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitles = document.getElementsByClassName("card-title");
for (let cardTitle of cardTitles) {
	const parentNode = cardTitle.parentNode;
	console.log(parentNode);
}
const cardTitle = document.querySelector(".card-title");
const parentNode = cardTitle.parentNode;
console.log(parentNode);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const p = document.createElement("p");
p.textContent = "Привет";
const card = document.querySelector(".card");
card.prepend(p);

// 8. Удалите тег h6 на странице.

document.querySelector("h6").remove();

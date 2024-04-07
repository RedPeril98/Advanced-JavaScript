"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
	console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = () => {
	console.log("страница загрузилась");
};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", (event) => {
	const target = event.target;
	const className = target.className;
	const tagName = target.tagName.toLowerCase();

	if (className === "super_element") {
		console.log(`Класс "${className}" присутствует в элементе "${tagName}"`);
	} else {
		console.log(`Класс "${className}" не присутствует в элементе "${tagName}"`);
	}
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", (_event) => {
	console.log("Вы навели на textarea");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан
// внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// const list = document.querySelectorAll("ul button");
// list.forEach((btn) => {
// 	btn.addEventListener("click", (event) => {
// 		console.log(event.target.textContent);
// 	});
// });

const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		console.log(event.target.textContent);
	}
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы
// кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

/*
Потому что элемент `document` находится на выше элемента `ul`. В JS eventListener идёт от младшего, до старшего элемента.
*/

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
	if (i % 2 === 0) {
		items[i].style.backgroundColor = "red";
	}
}
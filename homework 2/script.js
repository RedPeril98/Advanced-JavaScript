"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
	item.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
	btn.classList.toggle("btn-secondary");
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menus = document.querySelectorAll(".menu");
menus.forEach((menu) => {
	menu.classList.remove("dropdown-menu");
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
	dropdown.insertAdjacentHTML("afterend", "<a href='#'>link</a>");
});

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownMenuButton = document.getElementById("dropdownMenuButton");
dropdownMenuButton.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const dropdownMenuButtons = document.querySelectorAll(
	"[aria-labelledby=dropdownMenuButton]"
);
dropdownMenuButtons.forEach((btn) => {
	btn.dataset.dd = "3";
});

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");  
dropdownToggles.forEach((toggle) => {
	toggle.removeAttribute("type");
});

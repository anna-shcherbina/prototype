'use strict';

//Задание 1

/*1) Создать функцию-конструктор DomElement, который содержит свойства
- selector,
- height,
- width,
- bg,
- fontSize
содержит метод, который создает элемент на странице в зависимости от условия:
- если строка selector начинается с точки, создаем div с классом
- если строка selector начинается с решетки # то создаем параграф с id*/

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function () {
        let element;
        /*if () {

        } else if () {

        };*/

    }
}

'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function (str) {

        let selector;
        if (selector = str.charAt(0) === ".") {
            this.tag = document.createElement('div'); //создали элемент в памяти, на который ссылается переменная tag
            this.tag.classList.add(str.slice(1)); // добавили класс " " в ваш созданный div

        } else if (selector = str.charAt(0) === "#") {
            this.tag = document.createElement('p'); //создали элемент в памяти, на который ссылается переменная tag
            this.tag.setAttribute('id', str.slice(1)); //создать атрибут id со значением " "
        }

        this.tag.textContent = "Привет, я твой новый тег!"; // создали текстовый узел, а также вставили его в div
        this.tag.style.cssText = `height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        fontSize: ${this.fontSize};`

        document.body.append(this.tag); //поместили элемент на страницу
    }
};

let newElement = new DomElement("#block", "100px", "100px", "red", "10px");
newElement.createElement(newElement.selector);
console.log(newElement);
console.log(DomElement.isPrototypeOf(newElement));
'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function () {
        if (this.selector.charAt(0) === ".") { //если первый символ селектора введен "."
            this.tag = document.createElement('div'); //создали элемент в памяти, на который ссылается переменная tag
            this.tag.classList.add(this.selector.slice(1)); // добавили класс " " в созданный div, без первоо символа

        } else if (this.selector.charAt(0) === "#") {
            this.tag = document.createElement('p'); //создаем параграф в памяти, на который ссылается переменная tag
            this.tag.setAttribute('id', this.selector.slice(1)); //создать атрибут id со значением " "
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
newElement.createElement();

console.log(DomElement.prototype.isPrototypeOf(newElement));
console.log(newElement instanceof DomElement);
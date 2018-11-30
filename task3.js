'use strict';

Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния.
 Метод valueOf() должен возвращать текущий периметр.*/
 function Rectangle(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
};
Rectangle.prototype.toString = function(){
	alert('this x1 = '+ this.x1);
	alert('this y1 = '+ this.y1);
};
Rectangle.prototype.valueOf = function(){
	alert('rectangle perimeter = '+ this.x1);
};

var r = new Rectangle(1,3,5,7);
r.toString();
console.log(Rectangle.toString);
console.log(r.toString);

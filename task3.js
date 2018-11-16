'use strict';

/*Задание №1. Функциональное наследование
Напишите конструктор объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. 
Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого конструктора создайте два новых (наследники) – Прямоугольник и Круг.
 В этих конструкторах определите особые приватные свойства. 
 (Например, длина диагонали для Квадрата и радиус для Круга). 
 В каждый из конструкторов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.*/

function GeoFigura (){
	var _x0;
	var _y0;
	this.setX = function(x0){
		if (!x0){
			console.log (_x0)
		};
		_x0 = x0;

	};
	this.setY = function(y0){
		if (!y0){
			console.log (_y0)
		};
		_y0 = y0;
	};
	this.info = function (){
		console.log(_x0);
		console.log(_y0);
	}
};

function Rectangle () {
	GeoFigura.call(this);
	var _diagonal = 'd';
	this.setD = function(diagonal){
		if (!diagonal){
			console.log (_diagonal)
		};
		_diagonal = diagonal;
	};
	var parentInfo = this.info
	this.info = function (){
		parentInfo.call(this);
		console.log(_diagonal)
	};
};
function Circle (){
	GeoFigura.call(this);
	var _radius = 'r';
	this.setR = function(radius){
		if (!radius){
			console.log (_radius)
		};
		_radius = radius;
	};
	var parentInfo = this.info
	this.info = function (){
		parentInfo.call(this);
		console.log(_radius)
	};
};
var g = new GeoFigura();
var r = new Rectangle();
var c = new Circle();
g.setX(7);
g.setY(8);
g.info();

r.setX(9);
r.setY(10);
r.setD(17)
r.info();

c.setX(11);
c.setY(12);
c.setR('DDR')
c.info()

/*Задание №2. Функциональное наследование. Полиморфизм
Напишите конструктор объектов Квадрат, определите защищенное свойство для хранения значения стороны. 
Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, 
который возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

function Square (){
	this._length;
	this.setLength = function(length){
		if (!length){
			console.log (_length)
		};
		if(typeof length === 'number' && length>0){
			_length = length;	
		}
		};
	this.perimeter = function(){
			return _length * 4;
		}
	};	
var s = new Square ();
s.setLength(81);
s.setLength();
console.log(s.perimeter());
function Cube (){
	Square.call(this);
	var parentPerimeter = this.perimeter;
	this.perimeter = function(){
		return parentPerimeter.call(this)*2.5;
		}
};
var cube = new Cube();
cube.setLength(111);
cube.setLength();
console.log(cube.perimeter());
function Cube1 (){
	Square.call(this);
	this.perimeter = function(){
		return _length * 10;
		}
};
var cube1 = new Cube1();
cube1.setLength(222);
cube1.setLength();
console.log(cube1.perimeter());

/*Задание №3. Прототипы. Типы объектов на прототипах
Создайте тип объектов MP3 при помощи прототипов.*/

/*Задание №4. Прототипное наследование
В Задание №1. Функциональное наследование измените наследование на прототипное.*/

/*Задание №5. Прототипное наследование. Полиморфизм
В Задание №2. Функциональное наследование. Полиморфизм измените наследование на прототипное.*/

	 












































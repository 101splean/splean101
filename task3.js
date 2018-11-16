'use strict';

/*var array = [];

while(t === Number){
	var t = Number(prompt('?',''));
	var sum = 0;
	for(var k=0; k<=array.length; k++){
		sum += array[k]
	if (t === '' || t !== Number || t === Null) {
		break
	}else{
		array[i] = t;
	}
	 
	}
	console.log(sum);
}
 console.log(array);*/

 /*var arr1=[];
 var sum = 0;
for(var i=0; i !== false; i++){
 var c = Number(prompt("value",""));
 if (c ==="" || isNaN(c) || c === null){
  break;
 }else{
	arr1[i]= c;
	sum += arr1[i];
 }
 };
console.log(sum);

console.log(arr1);*/

//Есть объект salaries с зарплатами. Напишите код, который выведет среднее значение всех зарплат. Код должен работать с различным количеством зарплат в объекте.
//Примеры salaries:
/*var salaries1 = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};
function avs (salaries){
	var sum = 0;
	var i = 0;
	for(var key in salaries){
		sum += salaries[key];
		i++;
	};
	return sum/i;
}
//avs (salaries1);
console.log(avs (salaries2));*/


/*function mp3 (brand, model) {
	return {
		brand: brand,
		model: model,
		play: function(){
			console.log('mp3 '+ this.model + ' playing');
		}
	}
};

var MP3 = mp3('sony', 'walkman');
MP3.play();*/

/*Задание №3. Объекты в функциях
Напишите функцию, которая принимает в качестве параметра объект salaries с зарплатами и возвращает значение максимальной из зарплат.
Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:*/
/*var salaries1 = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};
function max(salaries){
	var Max = 0;
	for(var key in salaries){
		if(salaries[key] > Max){
			Max = salaries[key];
		};
	};
	return Max;
};

console.log(max(salaries1));
console.log(max(salaries2));*/

/*Задание №4. Конструкторы объектов
Создайте тип объектов MP3 при помощи конструкторов объектов.*/
/*function Mp3 (brand, model) {
	this.brand = brand,
	this.model = model,
	this.play = function(){
			console.log('mp3 '+ this.model + ' playing');
		}
};
var myMp3 = new Mp3('apple', 'ipod');
myMp3.play();*/

/*Задание №5. Функция как объект
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.*/
/*function mul() {
  var res = 1;
   for(var i = 0; i < arguments.length; i++){
	   if(typeof arguments[i] === 'number' && arguments[i] !== 0){
		res *= arguments[i];
	   };
   };
   if(res === 1){
	   return 0;
   }else{
	return res;
   };
   
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0*/

/*Задание №6. Функция как объект. Явное указание this
Есть следующий код:*/
/*var country = {
   name: "Украина",
   language: "украинский",
   capital: {
      name: "Киев",
      population: 2907817,
      area: 847.66
   }
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']']); // "[Украина]"
//format.call(...); // ""Киев""
//format.apply(...); // "Киев"
//Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

/*Задание №1. Привязка контекста
Есть следующий код:*/
/*var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
/*Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/

/*Задание №2. Привязка контекста
Есть следующий код:*/
/*function mul(a, b) {
   return a * b;
}
var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20*/
/*Используя функцию mul() и карринг создайте две функции doubleMul() и qadraMul(),
 которые умножают числа на 2 и на 4 соответственно.*/

/*Задание №3. Привязка контекста
Напишите аналог метода bind():*/
/*function bind(func, context) {
   return func();
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"*/

/*Задание №4. Инкапсуляция
Напишите конструктор для объектов Аудиоплеер, в котором есть приватное свойство
 громкость звука, для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер. 
Громкость может быть в диапазоне от 0 до 100.*/

/*Задание №5. Инкапсуляция
Напишите конструктор для объектов Сумматор, со следующим функционалом:
1. Приватное свойство firstNumber;
2. Приватное свойство secondNumber;
3. Публичное свойство result;
4. Приватный метод calc(), который записывает в result сумму свойств firstNumber и secondNumber;
5. Единые методы геттер-сеттер для свойств firstNumber и secondNumber, во время работы методов
 как сеттер, должна происходить валидация (устанавливать можно только значения типа Number),
  если валидация происходит успешно, должен вызываться метод calc(). Получается, что при
   успешной установке либо firstNumber либо secondNumber, происходит перерасчет result.
*/
/*function sum (firstNumber, secondNumber){
	var _firstNumber, _secondNumber;
	this.result = 0;
	function calc (){
	   result =_firstNumber + _secondNumber;
	   return result;
	};
	function firstNumberValidation(firstNumber){
		if (typeof firstNumber === 'number' ){
			_firstNumber = firstNumber;
		};
	};
	function secondNumberValidation(secondNumber){
		if (typeof secondNumber === 'number'){
			_secondNumber = secondNumber;
		};
	};
	
	firstNumberValidation(firstNumber);
	secondNumberValidation(secondNumber);
	
	this._firstNumber = function (firstNumber) {
   if (!firstNumber) {
	  return _firstNumber;
	};
		firstNumberValidation(firstNumber);
		if(firstNumberValidation){
			return calc();
		};
	};
	
	this._secondNumber = function (secondNumber) {
	  if(!secondNumber){
	  return _secondNumber;
	};
		secondNumberValidation(secondNumber);
		if(secondNumberValidation){
			return calc();
		};
	};
	//console.log(result + '!!!');
	//console.log(this.result + '!!!');
 };
 var obj = new sum(3, 5);
console.log(obj._secondNumber());
console.log(obj._firstNumber());
console.log(obj.result);
obj._secondNumber(101);
console.log(obj._secondNumber());
console.log(obj.result);*/
/*Задание №6. Модули
Напишите код для "безопасного" вычисления периметра и площади прямоугольника в виде модуля.
Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных
	 нельзя устанавливать), значение которого, строго больше 0.*/
	 /*var moduleName = (function  () {
		var lenght;
		var height;
		function perimeter (){
			return 2*lenght + 2*height;
		}
		function square (){
			return lenght*height;
		}
		return {
			setLength: function (number){
				if (typeof number === 'number' && number > 0){
					lenght = number;
				}
			},
			setHeight: function (number){
				if (typeof number === 'number' && number > 0){
					height = number;
				}
			},
			perimeter: perimeter,
			square: square
		};
	 }());
	 
//window.moduleName = moduleName;*/

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
	this.info = function (){
		for(var key in Rectangle){
		console.log(key + Rectangle[key])
		};
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
};
var g = new GeoFigura();
var r = new Rectangle();
var c = new Circle();
g.setX(7);
g.setY(8);

r.setX(9);
r.setY(10);
r.setD(17)
r.info();

c.setX(11);
c.setY(12);
c.setR(30)
//c.info()


//console.log(GeoFigura);
//console.log(Rectangle);
//console.log(Circle);

/*Задание №2. Функциональное наследование. Полиморфизм
Напишите конструктор объектов Квадрат, определите защищенное свойство для хранения значения стороны. 
Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, 
который возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

/*Задание №3. Прототипы. Типы объектов на прототипах
Создайте тип объектов MP3 при помощи прототипов.*/

/*Задание №4. Прототипное наследование
В Задание №1. Функциональное наследование измените наследование на прототипное.*/

/*Задание №5. Прототипное наследование. Полиморфизм
В Задание №2. Функциональное наследование. Полиморфизм измените наследование на прототипное.*/

	 












































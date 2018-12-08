'use strict';

/*Разработайте регулярные выражения для поиска в тексте телефонных номеров.
Допустимые форматы телефонного номера +38(057)707-43-56 0(800)500-75-00
Напишите функцию, которая принимает строку и ищет в данной строке телефонные номера'
*/
var str = 'Допустимые форматы телефонного номера +38(057)707-43-56 0(800)500-75-00';
var regExp1 = /\+\d\d\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
var regExp2 = /\d\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
function acc (string){
	if(string.match(regExp1) !== null || string.match(regExp2) !== null){
		console.log('There are all numbers ' + string.match(regExp1) + string.match(regExp2));
	}else{
		console.log('No numbers')};
};
acc(str);

'use strict';

/*Задание №1. Исключения
Напишите функцию sumSliceArray(arr, first, second), которая принимает массив arr и два числа 
(first и second) – порядковые номера элементов массива, которые необходимо суммировать. 
Например, если ввели 3 и 5 – суммируются 3-й и 5-й элементы.
Функция должна генерировать исключения если были введены не числа, и когда одно из чисел, 
или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите обработку возможных исключений.*/

function sumSliceArray(arr, first, second){
	if (typeof first !== 'number' && typeof second !== 'number' && first > arr.length && second > arr.length){
		throw new RangeError('change one of numbers!');
	}else{
	return arr[first-1] + arr[second-1];
	};
};
var mass = [1,2,3,4,56,67,7,8,8,9,9,11];

try{
	console.log(sumSliceArray(mass, 'r', true));
	
}catch(error){
	console.dir(error)
};
/*Задание №2. Исключения
Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и напишите код, 
который ее использует, но перед самим использованием проверяет все параметры на правильность. 
Таким образом, никогда не должны генерироваться исключения, которые есть внутри данной функции.*/

function sumSliceArray (arr, first, second) {
	while(typeof first !== 'number'|| first > arr.length || isNaN(first)){
			first = Number(prompt('enter number',''));
	};
	while (typeof second !== 'number' || second > arr.length || isNaN(second)){
		second = Number(prompt('enter number',''));
	};
	if (typeof first !== 'number' || typeof second !== 'number' || first > arr.length || second > arr.length){
		throw new RangeError('change one of numbers!');
	}else{
	return arr[first-1] + arr[second-1];
	};
};
var mass = [1,2,3,4,56,67,7,8,8,9,9,11];
console.log(sumSliceArray(mass, false, null));

'use strict';

var arr = [];
for (var i = 0; i >= 0; i++){
	var temp = prompt('put your string', '');
	if( temp !== 'end'){
		arr[i] = temp;
	}else{
		break
		};
};
console.log(arr);

var arr1 = arr;
for (var key in arr1){
	if (isNaN( arr1[key])){
		arr1[key] = 'No numbers: ' + arr1[key];
	}else{
		arr1[key] = 'Numbers: ' + arr1[key];
	};
};
console.log(arr1);

for (var j = 0; j < arr.length; j++){
	console.log(arr[j] + ' ' + arr1[j]);
};

/*
 *
*/


// ## 2. Задание 2 (Максимальное число в массиве). Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.
let getMaxNumber = function(arr) {
		return Math.max.apply(this, arr)
	}
// console.log(getMaxNumber([1, 30, 40, 2, 7])); // 40
// console.log(getMaxNumber([1, 15, -20, 2, -7])); // 15


// ## 3. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: webmaster
// Expected Output: abeemrstw
// Assume punctuation and numbers symbols are not included in the passed string.
let sortedString = function(str) {
	return str.split('').sort().join('');
}
// console.log(sortedString('webmaster'));


// ## Задание 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: the quick brown fox
// Expected Output: The Quick Brown Fox
let titleCase = function(str) {
	let arr = str.split(' ');
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i][0].toUpperCase() + arr[i].slice(1));
	}
	return temp.join(' ');
}
// console.log(titleCase('the quick brown fox'))


// ## Задание 5. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: Web Development Tutorial
// Expected Output: Development
let longestStr = function(str) {
	let arr = str.split(' ');
	return  arr.reduce(function(a, b){
		return (a.length > b.length) ? a.length + ' cool': b.length + ' feels bad man'
	})
}
// console.log(longestStr('Web Development Tutorial'))
// Or
let longestStr2 = function(str) {
	let arr = str.split(' ');
	let longestWord = '';
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > longestWord.length) {
			longestWord = arr[i];
		}
	}
	return longestWord;
}


// ## Задание 6. Write a JavaScript function which accepts an argument 
//    and returns the type.Note: There are six possible values that typeof 
//    returns: object, boolean, function, number, string, and undefined.
let definesType = (arg) => {
	return typeof arg;
}
// console.log(definesType(true))


// ## Задание 7. Write a function suffle(arr) to shuffle an array.
let shuffle = (arr) => {
	return arr.sort(function() {
		return Math.round(Math.random() * arr.length);
	});
}
// console.log(shuffle(['s', 'a', 'b', 'c', 'o', 'n']))
// OR
function shuffle1(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		let randomIndex = Math.floor(Math.random() * (i+1));
		let itemIndex = arr[randomIndex];
		arr[randomIndex] = arr[i];
		arr[i] = itemIndex;
	}
	return arr;
}


// ## Задание 8 (Уникальные css классы).Имеется массив css классов со старницы.
// var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
// Необходимо из этого массива получить массив с уникальными именами классов(без повторений) отсортированный по частоте использования(наиболее часто используемые - впереди).
// Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
// result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
let uniqueClass = function(arr) {
	let temp = arr.filter(function(elem, i) {
		return arr.indexOf(elem) === i;
	});
	return temp;
}
// console.log(uniqueClass( ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'] ))
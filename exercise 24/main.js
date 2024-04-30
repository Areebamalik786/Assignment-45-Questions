"use strict";
const string1 = "hello";
const string2 = "world";
console.log(string1 == string2); //false
console.log(string1 !== string2); //true
const upperCase = "Hello";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase);
const number1 = 10;
const number2 = 20;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z);
;
console.log(x > y || y < z);
const array1 = [1, 2, 3, 4, 5];
const itemToFind = 3;
console.log(array1.indexOf(itemToFind) == -1);
console.log(array1.indexOf(10) === -1);

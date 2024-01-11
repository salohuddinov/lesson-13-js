// 1.trim → trm

// let exampleString = "Muhammadali , Yusupov";

// String.prototype.trm = function () {
//     return this.replace(/^\s+|\s+$/g, '');
// };

// let trimmedString = exampleString.trm();

// console.log(trimmedString);


// 2 toUpperCase → upperCase

// String.prototype.upperCase = function () {
//     return this.toUpperCase();
// };

// let exampleString = "Muhammadali , Yusupov";
// let upperCaseString = exampleString.upperCase();

// console.log(upperCaseString);


// 3 includes → has

// String.prototype.has = function (substring) {
//     return this.includes(substring);
// };

// let exampleString = "Muhammadali , Yusupov";
// let containsHello = exampleString.has("Hello");

// console.log(containsHello);


// 4 slice → cut


// 5 repeat → rpt

// String.prototype.rpt = function (count) {
//     return this.repeat(count);
// };

// let exampleString = "Muhammadali , Yusupov";
// let repeatedText = exampleString.rpt(3);

// console.log(repeatedText);


// 6 toFixed → fixed

// Number.prototype.fixed = function (digits) {
//     return this.toFixed(digits);
// };

// let exampleNumber = 123.456789;
// let formattedNumber = exampleNumber.fixed(2);

// console.log(formattedNumber);


// 7 round 4.567 → 5, 10.102 → 10



// 8 isSquare 10 → false, 16 → true



// 9 count 



// 10 sum 

// let arr1 = [10, 20, 30];

// Array.prototype.sum = function () {
//     let sum = 0;
//     for (let el of this) {
//         sum += el;
//     }
//     return sum;
// };

// let res1 = arr1.sum();

// console.log(res1);


// 11 map → customMap

// Array.prototype.customMap = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// };

// const exampleArray = [10, 25, 6, 21, 5];
// const squaredArray = exampleArray.customMap((num) => num * num);

// console.log(squaredArray);


// 12 every → customEvery

// Array.prototype.customEvery = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (!callback(this[i], i, this)) {
//             return false;
//         }
//     }
//     return true;
// };

// const exampleArray = [6, 2, 7, 3, 10];
// const isAllEven = exampleArray.customEvery((num) => num % 2 === 0);

// console.log(isAllEven);


// 13 reduce → customReduce


// 14 findIndex → customFindIndex

// Array.prototype.customFindIndex = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             return i;
//         }
//     }
//     return -1;
// };

// const exampleArray = [10, 20, 30, 40, 50];
// const index = exampleArray.customFindIndex((element) => element > 25);

// console.log(index);


// 15 splice 


// 16 Animal

// function Animal(name, speed, limitAge) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
// }

// Animal.prototype.info = function () {
//     return `Name: ${this.name}, Speed: ${this.speed} km, Limit Age: ${this.limitAge} years`;
// };

// const tiger = new Animal('dog', 10, 7);
// console.log(tiger.info());

// 17 Student

// function Student(name, course, years, university) {
//     this.name = name;
//     this.course = course;
//     this.years = years;
//     this.university = university;
// }

// Student.prototype.leftYears = function () {
//     return this.years > this.course ? this.years - this.course : 0;
// };

// const john = new Student('Yusupov, Muhammadali', 2, 4, 'Example University');
// console.log(john.leftYears());


// 18 Person

// function Person(name, age, currentYear) {
//     this.name = name;
//     this.age = age;
//     this.currentYear = currentYear;
// }

// Person.prototype.getBirthYear = function () {
//     return this.currentYear - this.age;
// };

// const alice = new Person('Yusupov, Muhammadali', 16, 2023);
// console.log(alice.getBirthYear());


// 19 Employee


// 20 Rectangle
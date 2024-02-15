console.log("start");

// Datatypes

console.log("_____________DATATYPES_____________");

// Numbers
let number = 5;
number = 10;
console.log(number);

const sum = 8;
console.log(sum);

// Strings
let text = "some text";
console.log(text);

let a = 5;
let b = "5";
console.log(a, b);
console.log(a + b);

let c = 5;
let d = 5;
console.log(c, d);
console.log(c + d);

// True/false
let logic = true;
console.log(logic);

// Array
let arr = []; // - standart form for array
let newArr = [1, 2, 3, "Javascript", []];
console.log(newArr);

console.log(newArr[3]);

// Object
const obj = {}; // - standart form for object
const newObject = {
  name: "Kate", // - key: value
  height: 168,
};
console.log(newObject.name);
console.log(newObject["height"]);

// Pop-up window
// alert("You should learn JS");

// const confirmAge = confirm("Are you 18?");
// console.log(confirmAge);

// const answer = +prompt("How old are you?");
// console.log(answer);
// console.log(typeof answer);

// Operators
console.log("_____________OPERATORS_____________");

const userName = "Kate";
console.log("Hello " + userName);
// Interpolation
console.log(`Hello ${userName}`);

// const userName = oleg;
// console.log(`https://facebook.com/${userName}`)

let aNum = 2;
let bNum = 2;
aNum++;
bNum--;
console.log(aNum);
console.log(bNum);

console.log(2 * 8 == 16);
console.log(2 * 8 == "16");
console.log(2 * 8 === "16");
console.log(2 * 2 != 5);

const isChecked1 = false;
const isChecked2 = true;
console.log(isChecked1 && isChecked2); // both element should be true
console.log(isChecked1 || isChecked2); // one of the elements must be true

// Conditions
console.log("_____________CONDITIONS_____________");

// const answer = +prompt("How old are you?", "");
// console.log(answer);

// if (answer >= 18) {
//   console.log("You're welcome!");
// } else if (answer < 18) {
//   console.log("Access is denied");
// } else {
//   console.log("You can write only numbers");
// }

// Cycles
// let num = 1;
// while (num < 100) {
//   console.log(num);
// } ---> eternal cycle

// let num = 1;
// while (num < 100) {
//   console.log(num);
//   num++;
// }

for (i = 1; i < 5; i++) {
  console.log(i);
}

// Functions
console.log("_____________FUNCTIONS_____________");

function functionName() {} // Standart form for function

function sayHello() {
  console.log(`Hello ${userName}`);
}
sayHello();

// function calc(a, b) {
//   console.log(a + b);
// }
// calc(2, 5);
let someNum = 3;

function calc(a, b) {
  return a + b + someNum;
}

let sumNum = calc(2, 5);
console.log(sumNum);

const sayHi = function () {
  console.log("Hello");
};
// Non-standart function (we can call this function only if it's written after function)
sayHi();

const numSum = (c, d) => {
  c - d;
};

numSum(2, 1);

// Methods
console.log("_____________METHODS_____________");

const test = "My name is Kate";
console.log(test.length);
console.log(test.toUpperCase());
console.log(test.toLowerCase());
console.log(test.indexOf("Kate"));
console.log(test.indexOf("surname"));
if (test.indexOf("Kate")) {
  console.log("Hi, Kate");
} else {
  console.log("You are not Kate");
}
console.log(test.slice(11, 13));

const testarr = [1, 2, 3];
console.log(testarr.length);

// Callback functions
console.log("_____________CALLBACK FUNCTIONS_____________");

function first() {
  console.log("first part");
}

function second() {
  console.log("second part");
}

first();
second();

second();
first();

function firstCallback(callback) {
  console.log("first part");
  callback();
}

firstCallback(second);

// Objects methods
console.log("_____________OBJECTS METHODS_____________");

const object = {
  name: "Katerina",
  age: 27,
};

// delete object.age;
// console.log(object);

for (let key in object) {
  console.log(`Value of ${key} is ${object[key]}`);
}

console.log(Object.keys(object));
console.log(Object.keys(object).length);

const { name } = object;
console.log(name);

// Arrays
console.log("_____________ARRAYS_____________");

const arr1 = [1, 2, 3, 4, 5];
arr1.push(10);
console.log(arr1);

arr1.pop();
console.log(arr1);

console.log(arr1.join(", "));

// For creating independent coppy of array:
// V1:
const arr2 = arr1.slice();
arr2.push(20, 30);
console.log(arr1, arr2);
// V2:
const arr3 = [...arr1];
arr3.push("copied array");
console.log(arr1, arr3);

// For union array:
const unArr = [...arr1, ...arr2, ...arr3];
console.log(unArr);

// Objects (prototype)
console.log("_____________OBJECTS PROTOTYPES_____________");

// Prototype:
const box = {
  color: "white",
  produced: "China",
};

const boxM1 = {
  height: 12,
};

const boxM2 = {
  height: 40,
};

const boxM3 = {
  height: 5,
  color: "black",
};

// Object.setPrototypeOf(who we want to receive the prototype, prototype we chose)
Object.setPrototypeOf(boxM1, box);
console.log(boxM1);
console.log(boxM1.color);

// const allObjects = (boxM1, boxM2, boxM3);
// Object.setPrototypeOf(allObjects, box);
// console.log(allObjects.color);

Object.setPrototypeOf(boxM3, box);
console.log(boxM3);
console.log(boxM3.color);

// --
console.log("_____________--_____________");

let numb = 10;

// from number to string
console.log(numb + "");
console.log(numb + "px");
console.log(parseInt("5px", 10));

// from string to number
console.log(+"10");

// Complex function
console.log("_____________COMPLEX FUNCTION_____________");
// Name of this function is important to make from capital letter
function User(name, id, age) {
  this.name = name;
  this.id = id;
  this.age = age;
  this.admin = false;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
// we saying this name id the name from () in the beggining of the function

const john = new User("John", 2, 20);
console.log(john);
console.log(john.hello());

User.prototype.exit = function () {
  console.log(`See you soon ${this.name}`);
};

console.log(john.exit());

// Classes
console.log("_____________CLASSES_____________");
// Names of classes start ALWAYS with capital letter

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcRectangle() {
    return this.height * this.width;
  }
}

const square = new Rectangle(2, 2);
console.log(square);
console.log(square.calcRectangle());

// Methods for arrays
console.log("_____________METHODS FOR ARRAYS_____________");
// N

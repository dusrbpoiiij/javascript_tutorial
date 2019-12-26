//console.log('hello');

// Variables
var b = 'smoothie';
//console.log(b);

var someNumber = 45;
//console.log(someNumber);



//var age = prompt('What is your age?');  // User에게 묻는 것 프롬프트창 띄워서 
//document.getElementById('someText').innerHTML = age;


/*
 * Chapter 3 Numbers in Javascript
 */
var num1 = 10;

//Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
//console.log(num1);

// Divide /, multiply *, reminder %  
//console.log(num1 % 6);

// Increment/Decrement by any number you want
num1 += 10;
//console.log(num1);


/*
 * Chapter 4 Function
 * 1. Create a function 
 * 2. Call the function
 */

 // Create 
function fun() {
    console.log('this is a function');
}
// Call
//fun();

// Let's create a function that take in a name and says hello followed by your name 
function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);
}
// greeting(); 

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumber(num1,num2) {
    var result = num1+num2;
    console.log(result);
}

//sumNumber(5,10);
//greeting('Yeonkyu');


/*
 * Chapter 5 Loop (while,for)
 */

 // while Loops 

 /*
 var num = 0;
 while(num < 100) {
     num +=1;
     console.log(num);
 }*/ 

 // For loop 
 /*for (let num = 0; num <= 100; num++) {
     console.log(num);
 }*/

 /*
 * Chapter 6 Data Types
 */
let yourAge = 18; //number
let yourName = 'Bob'; // string 
let name = {first: 'Jane', last: 'Doe'};   // Object (Dictionary) 
let truth = false; // boolean
let groceries = ['apple','banana','orange']; // array
let random; // undefined
let nothing = null; // value null

 /*
 * Chapter 7 String in Javascript (common methods)
 */
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\napple';     // new line (/n)
console.log(moreFruit);
console.log(fruit.length);           // length of string 
console.log(fruit.indexOf('na'));    // 해당 문자의 위치 찾기  없으면 -1 
console.log(fruit.slice(2,4));       // 해당 문자 2~3까지만 자르기 
console.log(fruit.replace('ban','123'))  // 문자 대체 
console.log(fruit.toUpperCase());   // 대문자 
console.log(fruit.toLowerCase());   // 소문자
console.log(fruit.charAt(2))        // 2번 위치에 해당하는 문자 가져오기 
console.log(fruit[2]);              // 2번 위치에 해당하는 문자 가져오기 
console.log(fruit.split(','));       // split by a comma



/*
 * Chapter 8 Array
 */
let fruits = ['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');

console.log(fruits[1]);  // access valeu at index 2nd 

fruits[0] = "pear";
console.log(fruits[0]);

for (var i=0 ; i<fruits.length; i++) {
    console.log(fruits[i]);
}


// array common methods 
console.log('to String', fruits.toString());
console.log(fruits.join(' - '));  // 각 아이템 사이에 - 들어감 
console.log(fruits,fruits.pop(),fruits);  // pop : 마지막에 들어간 element 빼냄 (사라짐)
console.log(fruits.push('blackberry'),fruits);  // push : 마지막에 element 추가 
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift();   // remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);
let vegetables = ['asparagus','tomato','borocoli'];
let allGroceries = fruits.concat(vegetables);    // fruits array에 vegerables array 추가 
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());   // array 거꾸로 
console.log(allGroceries.sort());   // 사전 순으로 정렬 

let someNumbers = [5,10,2,25,3,255,1,2,5,334,13,23];
console.log(someNumbers.sort(function(a,b) {return a-b}));   // a-b : 오름차순  b-a : 내림차순 
console.log(someNumbers.sort(function(a,b) {return b-a}));

let emptyArray = new Array();
console.log(emptyArray);
for(let num=0; num<10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);


/*
 * Chapter 9 Object (Dictionary)
 */
let student = {
    first:'Kim',
    last:'yeonkyu',
    age:30, 
    heigth:170,
    studentInfo: function () {
        return this.first + '\n' +this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
student.first='notKim';   // change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());



/*
 * Chapter 10 If statement
 */
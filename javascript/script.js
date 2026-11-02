console.log("hello world"); //it is used to test the error

//VARIABLES
// hoisting this change the position of variable declaration to the top of the code.
var name = "John";
let age = 30;
const PI = 3.14;
num=10;
console.log(name, age, PI, num);

//var keyword is a oldest keyword.
// its golobal scope and function scope.
console.log(name);
function sum(){
    console.log(name);
    var innername = "inner John"; //it is function scope variable. it can be accessed only inside the function.
    console.log(innername);
}


sum();
console.log(innername); // it will give error because innername is function scope

name ="updated John"; // (reassignment) we can update the value of var variable
console.log(name);

var name = "new John"; // (redeclaration) we can redeclare the var variable
console.log(name);

//LET KEYWORD
// it is block scope variable. it can be accessed only inside the block.
let client = "Alice";
console.log(client);
{
    let innerClient = "inner Alice"; // it is block scope variable. it can be accessed only inside the block.
    console.log(innerClient);
}
console.log(innerClient); // it will give error because innerClient is block scope

let client = "new Alice"; // (redeclaration) we cannot redeclare the let variable

// const KEYWORD
// it is block scope variable. it can be accessed only inside the block.
//reassignment and redeclaration is not allowed for const variable.

//variable naming rules
//1. variable name can contain letters, digits, underscores, and dollar signs.
//2. variable name must begin with a letter, underscore, or dollar sign.
//3. variable name cannot be a reserved keyword.
//4. variable name is case sensitive

//data types
//1. primitive data types 2. non-primitive data types

//primitive data types
//1. string 2. number 3. boolean 4. null 5. undefined 6. symbol

//non-primitive data types
//1. object 2. array 3. function

let str = "Hello World"; 
//string methods
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[0]);
console.log(str.at(0));
console.log(str.charCodeAt(0)); // it will give the unicode of the character at the given index
console.log(str.charAt(0)); // it will give the character at the given index


let num1 = prompt("Enter your age: "); // it will take input from the user
console.log(num1);
if(num1 >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

for(let i=1; i<10; i++){
    console.log(i);
    if(i==5){
        break; // it will break the loop when i is 5
    }
}
for(let i=1; i<10; i++){
    console.log(i);
    if(i==5){
        continue; // it will skip the current iteration  when i is 5
    }
}
for(let i=1; i<10; i++){
    if(i==5){
        continue; // it will skip the current iteration  when i is 5
    }
    console.log(i);
    
}
//while loop
let x=10;
while(x){
    console.log(x);
    x--;
}
//count digit 
const number = 12345;
let count = 0;
let temp = number;
while(temp > 0){
    temp = Math.floor(temp / 10);
    count++;
}
console.log(count);

let y=1;
do{
    console.log(y);
    y--;
}while(y==10);

//pattern

for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        document.write("i");
    }
    document.write("<br>");

}
for(let i=0;i<=9;i++){
    for(let j=1;j<=9;j++){
        if(i==1 || i==9 || j==1 ||j==9){
            document.write("*");
        }
        else{
            document.write()
        }
    }
}
//write a digit count function
function countDigits(num) {
    let count = 0;  
    while(num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
function main(fn) {
    let result = fn(12345);
    console.log(result);
}
function main(fn) {
    console.log("calculation start here");
    let k =0;
    for(let i=0;i<1000000000;i++){
        k++;
    }
    console.log("calculation end here");
    fn(k)
}
function callback(a){
    console.log("callback function called");
    console.log(a);
}
main(callback);

//arrow function
const arrowFunction = () => {
    console.log("Arrow function called");
}
arrowFunction();
//let result=()
let result=(){
    console.log("start")
    return "result";

}
function sum(...c){
    console.log(c);
}
sum(1,2,3,4,5,6,7,8,9,10);

function main(){
    console.log(count);
    let count = 0
    return function(){
        count++;
        console.log(count);
    }
}
let run = main();

let user = "John";
function run(){
    console.log(user);
    let user = "John";
    
}
run(); // it will give error because user is not defined in the function scope

var user1 = "John";
function run(){
    console.log(user1);
    var user1 = "John";
    
}
run();// it will give undefined because user1 is hoisted to the top of the function scope but not initialized yet

//IIFE function is a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope.
(function(){
    let private = "secret";
    console.log("IIFE Function",private);
})()

//strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". It was introduced in ECMAScript 5. It helps in catching common coding bloopers, preventing, or throwing errors when relatively "unsafe" actions are taken (such as gaining access to the global object). It also disables features that are confusing or poorly thought out.
p=10;
console.log(p); // it will give error because p is not defined in strict mode

function sum(a,a){
    console.log(a);
}
//array is the collection of similar data types. it is used to store multiple values in a single variable. it is an object in javascript.
let arr = [1,2,3,4,5];
console.log(arr);
document.write(arr);
//array methods
console.log(arr.length);


//find and filter
console.log("find":- ,Array.find((a)=>{
    console.log(a);
    return a%2==0;
    //return a%5==0;
})
);

//filter method is used to filter the array based on the condition. it returns a new array with the elements that satisfy the condition.
console.log("filter":- ,array.filter((a)=>{
    console.log(a);
    return a%2==0;
    //return a%5==0;
})
);
//slice method is used to extract a portion of an array and returns a new array. it does not modify the original array.
let arr1 = [1,2,3,4,5];
let newArr = arr1.slice(1,4);
console.log(newArr);
//splice method is used to add or remove elements from an array. it modifies the original array.
let arr2 = [1,2,3,4,5];
arr2.splice(1,2);

//delete method is used to delete an element from an array. it does not modify the original array.
let arr3 = [1,2,3,4,5];
delete arr3[1];
console.log(arr3);
array.splice(5,4); // it will remove 4 elements from index 5
console.log(array); // it will print the array after removing the elements
//replace element in array
array[0] = "new value";
array.splice(3,1,100); // it will replace the element at index 3 with 100
console.log(array); // it will print the array after replacing the element
//MAP method is used to create a new array with the results of calling a provided function on every element in the calling array. it does not modify the original array.
let arr4 = [1,2,3,4,5];
let newArr1 = arr4.map((a)=>{
    return a*2;
})
console.log(newArr1);
let data = ["John", "Alice", "Bob", "Charlie"];
data.map((v, i)=>{
    document.write("<h1>" + v + "</h1>");
    document.write(`<div class="card"><h1>${v}</h1><p>${i}</p></div>`);
    console.log(v, i);
};

//reduce method is used to reduce the array to a single value. it does not modify the original array.
let arr5 = [1,2,3,4,5];
let sum = arr5.reduce((acc, curr)=>{
    return acc + curr;
}, 0);
console.log(sum);
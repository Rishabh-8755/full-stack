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
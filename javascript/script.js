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
let age = 30;
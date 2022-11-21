// alert, prompt and confirm are functions that return something
//prompt and confirm return whatever the user enters in the text prompt
alert("Lets do some experiment with prompt and confirm !");
var confirmResult = confirm("Are you ready ?");
var promptResult = prompt (" Enter  your confirmation (yes/ no)");
console.log(`confirmResult : ${confirmResult}`);
console.log(`promptResult : ${promptResult}`);

//To display the typeof of the result in the console
console.log(`The value of confirmResult is ${confirmResult} and it's type is ${typeof confirmResult}`);
console.log(`The value of promptResult is ${promptResult} and it's type is ${typeof promptResult}`);

//Reading input
//You can check without parseInt !! The '+' operator will do the concatenation :)
var a=parseInt( prompt("Enter first Number"));
var b=parseInt(prompt("Enter Second Number"));
//Arithmetic operators
console.log("===============================");
console.log("  ARITHMETIC OPERATIONS        ");
console.log("===============================");
//Addition
console.log(`${a} + ${b} = ${a+b}`);
//Subtraction
console.log(`${a} - ${b} = ${a-b}`);
//Division
console.log(`${a} / ${b} = ${a/b}`);
//Multiplication
console.log(`${a} * ${b} = ${a*b}`);
//Finding Remainder
console.log(`${a} % ${b} = ${a%b}`);
console.log("===============================");

var c=parseInt(prompt("Enter first Input"));
var d=prompt("Enter Second Input");   
console.log("  COMPARISON OPERATIONS        ");
console.log("===============================");
//Comparison Operators
console.log(`a= ${c}, b= ${d}, so a==b is ${c==d}`);
console.log(`a= ${c}, b= ${d}, so a!=b is ${c!=d}`);

//Compares equality and types
console.log(`a= ${c}, b= ${d}, so a===b is ${c===d}`);
console.log(`a= ${c}, b= ${d}, so a!==b is ${c!==d}`);

//A shorter method to avoid  repetative  console.log  
const g = console.log. bind(document)
g(c);
g(`a=${c}, b=${d}, so a<b is ${c<d}`);
g(`a=${c}, b=${d}, so a>b is ${c>d}`);
g(`a=${c}, b=${d}, so a<=b is ${c<=d}`);
g(`a=${c}, b=${d}, so a>=b is ${c>=d}`);


//Functions are reusable blocks of code that perform a specific Task.
//This is Function Declaration.
function declareAdd()
{
    console.log("Hello, I am a Function to add 1 and 2");
    console.log("---------------------------------------");
    //return stops the execution of a function
    add=1+2;
    console.log(add);
    //we can also use as "console.log(1+2)" in a single statement
    return;
}

//This is a function expression
var expressSubtract=function()
{
    console.log("Hello, I am a Function to subtract 10 from 20");
    console.log("-----------------------------------------------");
    sub=20-10;
    console.log(sub);
    //we can also use as "console.log(20-10)" in a single statement
    return;
}

var side=2;
function calcArea()
{
    console.log("Hello, I am a Function to find the area");
    console.log("-----------------------------------------");
    //return stops the execution of a function
    area= side * side;
    console.log(area);
    //we can also use as "console.log(side*side)" in a single statement
    //we can also do by passing "side" as a function argument.
    return;
}
//Functions must be called to execute
declareAdd();
expressSubtract();
calcArea();

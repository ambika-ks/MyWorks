//Functions are reusable blocks of code that perform a specific Task.
//This is Function Declaration.
function declareHello()
{
    console.log("Hello, I am a Function Declaration");
    console.log("------------------------------------");
    //return stops the execution of a function
    return;
}

//This is a function expression
var expressHello=function()
{
    console.log("Hello, I am a Function Expression");
    console.log("-----------------------------------");
    return;
}

//Functions must be called to execute
declareHello();
expressHello();

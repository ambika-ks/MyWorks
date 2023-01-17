//Functions are reusable blocks of code that perform a specific Task.
//This is Function Declaration.
function declareEqualorNot(a,b)
{
    console.log("Hello, I am a Function to check whether the function parametrs are equal or not");
    console.log("_______________________________________________________________________________");
    if(a===b)
        console.log(`The two parameters ${a} and ${b} are equal \n\n\n`);
    else
        console.log(`The two parameters ${a} and ${b} are  not equal\n\n\n`);
    //return stops the execution of a function
    return;
}

//This is a function expression
var expressHello=function()
{
    console.log("_________________________________");
    console.log("Hello, I am a Function Expression");
    console.log("_________________________________");
    return;
}
var a=10;
var b=20;
var c=true;
//Functions must be called to execute
console.log("_______________________________________________________________________________");
declareEqualorNot(a,b);
console.log("_______________________________________________________________________________");
declareEqualorNot(a,c);
expressHello();

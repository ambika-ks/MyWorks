// Write Your Code Below


// function that adds 1 and 2 together using Function Declaration
function addition()
{
    console.log(`Sum of 1 and 2 is ${1+2}`);
    return
}


// function that subtracs 10 from 20 using Function Expression
var subtraction=function()
{
    console.log(`Subtracting 10 from 20 gives ${20-10} `);
    return 
}


// function that calculates the area of a square using an outside variable, using either function declaration or expression
var side=20
function area()
{
    var area=side*side;
    console.log(`Area of a square with side 20 is ${area}`);
    return
}



addition();
subtraction();
area();
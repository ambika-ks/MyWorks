//Initializing and assigning values to variables
var one = 24;
var two ="22222222222";
var three = false;
var four = 44.84;
var five = "Jacky Chan!";
var six;

//Print the type of each variable in the console
console.log("Type of variable one: "+typeof one);
console.log("Type of variable two: "+typeof two);
console.log("Type of variable three: "+typeof three);
console.log("Type of variable four: "+typeof four);
console.log("Type of variable five: "+typeof five);
console.log("Type of variable six: "+typeof six);

//Store current type of the variables in another variables for a better display
fo= typeof four;
fi= typeof five;
si= typeof six;

//re assign values to the variables
four = "four";
five = false;
six = 143;

//Check the values again in the console
console.log("The value of the variable four changed from "+fo  ,"to "+typeof four);
console.log("The value of the variable five changed from "+fi,"to "+typeof five);
console.log("The value of the variable six changed from "+si, "to "+typeof six);
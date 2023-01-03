//WRITE YOUR CODE BELOW
// Object customerDrink with three properties
var customerOrder={
    name:"coffee",
    sugars:3,
    isReady:true
};

//logs the entire object
console.log(customerOrder);

//check and output whether the drink is ready

if(customerOrder.isReady) {
    console.log(`Ready for pick-up ${customerOrder.name} with ${customerOrder.sugars} sugars.`);
}
else
{
    console.log(`Still in order queue ${customerOrder.name} with ${customerOrder.sugars} sugars.`);
}
   
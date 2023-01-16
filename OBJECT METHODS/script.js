//WRITE YOUR CODE BELOW
var menu={
    coffee: 4.50,
    latte: 6.50,
    coldBrew: 6,
    motcha:7
};

//Assign menu values to the prices variable
var prices =Object.values(menu);

//Initialize total amount
var total=0;

console.log(Object.keys(menu));

//Print the entire menu
console.log(`Drinks Available, ${Object.keys(menu)}`);

//Find total amount with loop statement
for(let i=0;i<prices.length;i++){
 total+=prices[i];
}

//total cost
console.log(`Total Menu Cost : ${total}`);
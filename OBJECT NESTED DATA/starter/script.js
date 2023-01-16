//WRITE YOUR CODE BELOW
var sizes= ['Small','Medium','Large'];
var milks=['2%','Whole','Oat','Coconut','Soy'];

var coffee={
    name:'Coffee',
    sizes: sizes,
    isIced:false,
    withSugar:false,
    price:4.50
}

var latte={
    name:'latte',
    sizes: sizes,
    isIced:true,
    withSugar:true,
    price:6.50,
    milks:milks
}

var coldBrew={
    name:'Cold Brew',
    sizes: sizes,
    withSugar:false,
    price:6.00
}

var matcha={
    name:'Matcha Latte',
    sizes:sizes,
    isIced:true,
    withSugar:false,
    milks:milks,
    price:7.00
}
var drinks=[coffee,latte,coldBrew,matcha];

var menu={
    drinks:drinks,
    milks:milks,
    sizes:sizes,
    food: ['Bagel','Danish','Muffin']
}


console.log(`_________________________________________________________\n`);
console.log(`             MENU                      `);
console.log(`_________________________________________________________`);
console.log(`The price of a Coffee       : $ ${menu.drinks[0].price}`);
console.log(`The price of a Latte        : $ ${menu.drinks[1].price}`);
console.log(`The price of a Cold Brew    : $ ${menu.drinks[2].price}`);
console.log(`The price of a Matcha Latte : $ ${menu.drinks[3].price}`);
console.log(`_________________________________________________________`);
console.log(`Availabe Milk Options       : ${menu.milks} `);
console.log(`Availabe size Options       : ${menu.sizes} `);
console.log(`Availabe food Options       : ${menu.food} `);
console.log(`_________________________________________________________`);
console.log(`The price of a Latte and a coffee is : $ ${menu.drinks[0].price+menu.drinks[1].price} \n\n`);
console.log(`    ________ END ________                 `);

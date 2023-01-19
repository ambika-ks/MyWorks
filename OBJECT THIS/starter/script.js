// This refers to the window
console.log(this);

// This refers to the window object
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// This refers to the child object
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};


// This refers to the investment object
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};


// call the function helloThis to check reslts
helloThis();

// call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();
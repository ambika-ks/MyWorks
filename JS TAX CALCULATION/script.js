//Declare and read salaries of three players
var player1Salary=parseInt( prompt("Enter the salary of Player1"));
var player2salary=parseInt(prompt("Enter the salary of Player2"));
var player3Salary=parseInt(prompt("Enter the salary of Player3"));

//calculate total salary of all three players
var totalSalary=player1Salary+player2salary+player3Salary;

const g=console.log.bind(document)
g(`Salary of Player1 : $${player1Salary}`);
g(`Salary of Player2 : $${player2salary}`);
g(`Salary of Player3 : $${player3Salary}`);
g(`Total salary of all three Players : $${totalSalary}`);

if (totalSalary>40000000)
{
    overAmount= totalSalary-40000000;
    luxuryTax=overAmount*0.18;
    g(`Luxury Tax of the team : $${luxuryTax}`);
}
else
    g(`No Luxury Tax for the Team ✨`);

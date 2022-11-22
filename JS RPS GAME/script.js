var userName=prompt(`Enter User Name `)
var userWins=computerWins=badAttempts=tie=1;
for(var i=0;i<10;i++)
{
    //R for ROCK , P for PAPER, S for SCISSOR
    //Enter your Input
        var userChoice=prompt(`Enter your Choice (R, P, S) ${"\n"}R - ROCK ${"\n"}P - PAPER ${"\n"}S-SCISSOR`);
        userChoice= userChoice.toUpperCase();   
        console.log(`${userName} CHOICE : ${userChoice}`);
        //Math.floor(Math.random() * 3); Returns a random integer from 0 to 3
        var compChoice= parseInt(Math.floor(Math.random()*3));
        if (compChoice==0)
            compChoice="R";
            else if(compChoice==1)
                compChoice="P";
        else
             compChoice="S";

        console.log(`COMPUTER CHOICE : ${compChoice}`);


    if((userChoice == "R")||(userChoice=="P")||(userChoice=="S"))
    {
        if(userChoice==compChoice)
        {
            console.log("WE ARE IN TIE..TRY AGAIN !!!");
            tie++;
        }
        else
        {
        //Victory Conditions
        if((userChoice=="R"&&compChoice=="S" )|| (userChoice=="P" && compChoice=="R") || (userChoice=="S"&&compChoice=="P"))
             {;
            console.log(`This is my Victory ${userWins} ✨ ${userName}✨`);
            userWins++;
            }
        else
            {
            console.log(`This is My Victory ${computerWins} ✨ COMPUTER ✨`);
             computerWins++;
            }
   }    }
  
   else
    {
    console.log(`BAD INPUT..PLEASE TRY AGAIN`);
    badAttempts++;
    }
    console.log("----------------------------------------------------");

}
console.log(` ${userName} WINS ${userWins-1} TIMES`);
console.log(` COMPUTER WINS ${computerWins-1} TIMES`);
console.log(` BAD ATTEMPTS ${badAttempts-1} TIMES`);
console.log(` NUMBER OF TIES  ${tie-1} TIMES`);
if(userWins==computerWins)
    console.log(" WE ARE IN TIE ✨ BETTER LUCK NEXT TIME ✨✨✨")
    else if(userWins>computerWins)
        console.log(` SO THE ULTIMATE WINNER IS  ✨${userName} ✨`);
else
    console.log(` SO THE ULTIMATE WINNER IS ✨ COMPUTER ✨`);

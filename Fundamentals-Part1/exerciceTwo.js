////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

//SOLUTION

const marksMass = 78;
const marksHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const bodyMassIndexMark = marksMass / marksHeight **2;
const bodyMassIndexJohn = johnMass / johnHeight **2;

const markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;

if(markHigherBMI == true) {
    console.log(`Mark's BMI ${bodyMassIndexMark} is higher than John's ${bodyMassIndexJohn}!`)
} else {
    console.log(`John's BMI ${bodyMassIndexJohn} is higher than Mark's ${bodyMassIndexMark}!`)
}


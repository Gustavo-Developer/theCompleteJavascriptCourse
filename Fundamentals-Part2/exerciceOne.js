// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);



// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//RESULT

const calcAverage = (a, b, c ) => {

  const media  = (a + b + c ) / 3;
  return media
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(`Score Dolphins media: ${scoreDolphins}`);
console.log(`Score Koalas media: ${scoreKoalas}`);

const checkWinner = (avgDolhins , avgKoalas) => {

  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win the 🏆 `);
    console.log(`final : ${avgDolhins} vs ${avgKoalas}`);

  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win the 🏆 `);
    console.log(`final : ${avgKoalas} vs ${avgDolhins}`);

  } else {
    console.log('No team wins...')
  }
} 

checkWinner(scoreDolphins , scoreKoalas);
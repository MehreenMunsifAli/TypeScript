#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Guess a number between 1 to 15: ",
    type: "number",
    name: "userNumber",
  },
]);
const compNum = Math.floor(Math.random() * 15 + 1);

if (answer.userNumber === compNum) {
  console.log("Congratulations! You guessed correctly!");
} else if (answer.userNumber > compNum) {
  let diff = answer.userNumber - compNum;
  console.log(`Your number is too HIGH with ${diff}`);
} else {
  let diff = compNum - answer.userNumber;
  console.log(`Your number is too LOW with ${diff}`);
}

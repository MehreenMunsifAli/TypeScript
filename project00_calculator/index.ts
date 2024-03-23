#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },
  {
    message: "Choose one of the operators to perform",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(chalk.green("Your answer is: ", answer.FirstNumber + answer.SecondNumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.blue("Your answer is: ", answer.FirstNumber - answer.SecondNumber));

} else if (answer.operator === "Multiplication") {
  console.log(chalk.cyanBright("Your answer is: ", answer.FirstNumber * answer.SecondNumber));

} else if (answer.operator === "Division") {
  console.log(chalk.redBright("Your answer is: ", answer.FirstNumber / answer.SecondNumber));

} else {
  console.log(chalk.bgBlue("Select a valid operator"));
}

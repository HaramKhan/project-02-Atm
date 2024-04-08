#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000; // DOLLAR
let myPin = 2007;
console.log(chalk.white.bgBlue("\n\t\t\tWelcome to Atm Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: (chalk.green.bgYellow("Enter your pin")),
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.blue.bgWhite("Welcome to your account!"));
    let paymentMethod = await inquirer.prompt({
        name: "Options",
        message: (chalk.greenBright.bgBlack("Kindly select one of the operations")),
        type: "list",
        choices: ["Check Balance", "withdraw", "fast cash"]
    });
    if (paymentMethod.Options === "Check Balance") {
        console.log(chalk.whiteBright.bgGray(`Your myBalance is : ${myBalance}`));
    }
    else if (paymentMethod.Options === "withdraw") {
        let amount = await inquirer.prompt({
            name: "withdraw",
            message: (chalk.blue.bgCyan("Enter Amount you did like to withdraw : ")),
            type: "number"
        });
        if (amount.withdraw > myBalance) {
            console.log(chalk.greenBright.bgBlack(`Unable to procced transaction! Your total balance is : ${myBalance}`));
        }
        else if (amount.withdraw < myBalance) {
            amount.withdraw = myBalance -= amount.withdraw;
            console.log(chalk.red.bgGrey(`Your remaining Balance is : ${amount.withdraw}`));
        }
    }
    else if (paymentMethod.Options === "fast cash") {
        let fastCash = await inquirer.prompt({
            name: "fast",
            message: (chalk.green.bgCyan("PLease select your Amount")),
            type: "list",
            choices: ["10000", "20000", "30000", "40000", "50000"]
        });
        myBalance = myBalance - fastCash.fast;
        console.log(chalk.white.bgBlack("Your remaining balance is :" + myBalance));
    }
}
else {
    console.log(chalk.white.bgBlue("Incorrect Pin code!"));
}

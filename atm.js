import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Typescript ATM Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Please enter your ID:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your Password:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Saving Account"],
        message: "Please select your Type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["FastCash", "Withdraw", "Balance Inquiry"],
        message: "Please select an Option:",
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 2000, 5000, 10000],
        message: "Please select your Amount:",
        when(answer) {
            return answer.transactionType === "FastCash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount:",
        when(answer) {
            return answer.transactionType === "Withdraw";
        },
    },
]);
if (answer.userId && answer.userPin) {
    let Balance = Math.floor(Math.random() * 1000000);
    console.log(Balance);
    let Enteredamount = answer.amount;
    if (Balance >= Enteredamount) {
        let remaining = Balance - Enteredamount;
        console.log("Your remaining balance is: " + remaining);
    }
    else {
        console.log("insufficient balance");
    }
}
console.log(answer);

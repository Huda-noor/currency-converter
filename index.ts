import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bgGray("******Welcome To Currency Converter*******"))
const currency: any = {
    USD: 1, //BAse currency
    Eur: 0.92,
    GBP:0.79,
    JPY:151.79,
    AUD:1.51,
    CHF:0.91,
    CAD:1.36,
    HKD:7.83,
    SR: 3.75,
    QR:3.64,
    NZD:1.66,
    PKR: 278.0

}
do{
let user_input = await inquirer.prompt([{
    type: "list",
    name: "from_currency",
    message: "Select a currency from the list",
    choices: [ "USD", "EUR", "GBP", "JPY", "AUD", "CHF", "CAD", "HKD", "SR", "QR", "NZD", "PKR"]
},
{
    type: "list",
    name: "to_currency",
    message: "Select a currency from the list",
    choices: [ "USD", "EUR", "GBP", "JPY", "AUD", "CHF", "CAD", "HKD", "SR", "QR", "NZD", "PKR"]
},
{
    type: "number",
    name: "amount",
    message: "Enter the amount you want to convert"
}])
let fromCurrency = currency[user_input.from_currency]
let toCurrency = currency[user_input.to_currency]
let amount = user_input.amount
let baseAmount = amount/fromCurrency
let convertedCurrency = baseAmount * toCurrency
console.log(chalk.greenBright("************************************************************************************"))
console.log(chalk.yellowBright(convertedCurrency))
console.log(chalk.greenBright("**************************************************************************************"))}while(true)

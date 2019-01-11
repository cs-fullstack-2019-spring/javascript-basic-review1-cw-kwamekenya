// Write a JavaScript program that does the following:
// * Prompts the User to enter their outstanding loan amount as a number (```LOANAMT```)
// * Prompts the User to enter the number of months in which they want to pay off the loan (```NUMMONTHS```)
// * Calculates the monthly payment they need to make and logs it to the console as
// ```To pay of a loan of LOANAMT it will take NUMMONTHS months```


var LOANAMT = parseInt( prompt("Out standing amount"));
var NUMMNTHS = parseInt( prompt("How many months will you like to pay in?"));

var TOTAL = Math.round(LOANAMT/NUMMNTHS);

console.log("To pay off a loan of " + LOANAMT + " in " + NUMMNTHS + "Months" + " Your monthly payments should be " + TOTAL);
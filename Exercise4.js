// * Ask the user to input the temperature as a number (store in variable ```FTEMP```),
// and convert it to celcius (store in variable ```CTEMP```)
// * Log the message ```FTEMP Fahrenheit equals CTEMP in Celcius```

var FTEMP = parseInt (prompt("What is your temprature in Fahrenheit?"));

var CTEMP = Math.round((FTEMP - 32) * 5 / 9);

console.log (" FTEMP= "+ FTEMP +" Is " + CTEMP +" In Celcius ");

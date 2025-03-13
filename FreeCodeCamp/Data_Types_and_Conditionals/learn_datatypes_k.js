/* switch statement is used to perform different actions based on different conditions. It is similar to the if-else statement, but is more readable and easier to understand when there are multiple conditions to check. The switch statement is used to select one of many code blocks to be executed.*/

/* The switch statement evaluates an expression and compares it with the values of each case. If there is a match, the associated block of code is executed. If there is no match, the default block of code is executed. */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}
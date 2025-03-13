/* There are 2 limitations on variable names on JavaScript:
1. Name must contain only letters, digits, or symbols $ and _ 
2. First character must not be a digit. */

let userName;
let test123;

/* The dollar sign and underscore can also be used in names. 
They are regular symbols */
let $ = 1; // declared a variable with "$" as a name
let _ = 2; // declared a variable with "_" as a name
console.log($ + _); // 3
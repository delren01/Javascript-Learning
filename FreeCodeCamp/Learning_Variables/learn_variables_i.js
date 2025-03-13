/* Increasing or decreasing a number by one is among the most common numerical operations. */
let counter = 2;
// works the same as counter = counter + 1, but is shorter
counter++;
console.log(counter); // 3

/* Decrement -- decreases a variable by 1 */
let countr = 2;
countr--;
console.log(countr); //  1

/* Operators ++ and -- can be placed either before or after the variable:
- When the operator goes after the variable, it is in "postfix form": counter++
- The "prefix form" is when operator goes before the variable: ++counter
*/

/*  The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

let counter = 1;
let a = ++counter; (*)
console.log(a); // 2 */

/* If the result of increment/decrement is not used, there is no difference in which form to use:
let counter = 0;
counter++;
++counter;
console.log( counter ); // 2, the lines above did the same */

/* If you’d like to increase a value and immediately use the result of the operator, you need the prefix form: 
let counter = 0;
console.log( ++counter ); // 1*/

/* If you’d like to increment a value but use its previous value, you need the postfix form:
let counter = 0;
console.log( counter++ ); // 0*/

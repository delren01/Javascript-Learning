/*  functions can return a value using the return keyword. The return keyword is used to return a value from a function. When the return keyword is used, the function will stop executing and return the value specified after the return keyword. 

function add(a, b) {
  return a + b
}

console.log(add(2, 3)); // Output: 5 */

/* what happens if the return keyword is used before the end of the function? */
function add(a ,b) {
    if(a < 2) {
        return b;
    }
    return a + b;
}

console.log(add(3, 7)); // output: 7

/* variable declared inside a function is only visible inside a function. This is called the scope of the variable, this particular scope is called the local scope. Variables declared outside of a function are called global variables and are visible throughout the program */
function myFunction() {
    let x = 10;
  }
  
  console.log(x); // This will raise a ReferenceError because x is not global scope.

// this will work below:
/* let x = 10;

function myFunction() {
  console.log(x);
}

myFunction(); */
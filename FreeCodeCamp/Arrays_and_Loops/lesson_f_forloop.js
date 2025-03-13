// For loop: Used to execute a block of code multiple times
// Used when number of iteration is known
for (let i = 1; i <= 5; i++) { // for(variable, condition, counter)
    console.log(i);
}

/* To iterate over an array using a for loop, you can use the array's length property. For example, the following code snippet prints the elements of an array: */
const arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
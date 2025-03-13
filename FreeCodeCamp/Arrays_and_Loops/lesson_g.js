/* Arrays have a built-in method called map(), which is used to create a new array by applying a function to each element of the original array. The map() method does not change the original array.

Syntax is: 
const array = [1, 2, 3, 4, 5];

const newArray = array.map((arrayValue) => { // The map() method creates a new array by applying the function (arrayValue) => { return arrayValue * 2; } to each element of the original array. This is particularly useful when you want to transform the elements of an array without changing the original array.
  return arrayValue * 2;
});

console.log(newArray); // Output: [2, 4, 6, 8, 10] */

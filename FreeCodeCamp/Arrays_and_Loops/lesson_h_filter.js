// Filter() method: Creates a new array with all elements that pass the test implemented by the provided function. 
const numbers = [2, 5, 6, 1, 9, -1]

const newNumbers = numbers.filter((number) => {
  return number > 2;
});

console.log(newNumbers); // Output: [5, 6, 9]

// filter() method creates a new array with all elements that are greater than 2.
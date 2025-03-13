/* If function is called but an argument is not provided, then the parameter will be assigned the value of "undefined" like so:
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal()); // Output: undefined is my favorite animal!
*/

/* If a value is not provided you can make use of default parameters. Default parameters allow you to assign a default value to a parameter if no value is provided when the function is called.

function favoriteAnimal(animal = 'Giant Panda') {
  return animal + " is my favorite animal!"
} */
/* Splice() method: Changes the contents of an array by removing or replacing an element in the array.
Slice() method: Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). Original array will not be modified */

const character = ['Harry', 'Ron', 'Hermione'];
character.splice(1, 1); // The splice() method takes two arguments: the index of the element to remove and the number of elements to remove.
console.log(character); // Output: ['harry', 'hermione']

// To create a new array with the second element from the character array, you can use the following code:
const characters = ['Harry', 'Ron', 'Hermione'];
const newCharacters = characters.slice(1, 2); //The slice() method takes two arguments: the index of the element to start the slice and the index of the element to end the slice (not included).
console.log(newCharacters); // Output: ['Ron']
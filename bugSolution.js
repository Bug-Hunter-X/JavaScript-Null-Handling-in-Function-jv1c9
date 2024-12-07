function foo(a, b) {
  // Check if either a or b is null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    // Handle null or undefined values by providing a default or throwing an error
    return 0; // Or throw new Error('Parameters cannot be null or undefined');
  }
  //Check if either a or b is not a number
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0;//Or throw new Error("Parameters must be numbers");
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(0,5)); //Output:5
console.log(foo("a",5)); //Output: 0
console.log(foo(false,5)); //Output: 0
function linearSearch(arr, x) {
  // Iterate through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is equal to the target value
    if (arr[i] === x) {
      // If found, return the index of the element
      return i;
    }
  }
  // If the target value is not found in the array, return -1
  return -1;
}

let arr = [2, 3, 4, 10, 40]; // Define the array
let x = 10; // Define the target value to search for
console.log(linearSearch(arr, x)); // Output: 3 (index of the target value in the array)

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: if the array has 1 or 0 elements, it's already sorted

  let mid = Math.floor(arr.length / 2); // Find the middle index
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort the right half

  return merge(left, right); // Merge the two sorted halves
}

function merge(left, right) {
  let result = []; // Array to hold the merged result
  while (left.length && right.length) {
    // While both arrays have elements
    if (left[0] < right[0]) {
      result.push(left.shift()); // Take the smaller element from the front of the left array
    } else {
      result.push(right.shift()); // Take the smaller element from the front of the right array
    }
  }
  return result.concat(left, right); // Concatenate any remaining elements (one of the arrays will be empty)
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]

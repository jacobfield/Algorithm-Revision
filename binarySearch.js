function binarySearch(arr, x) {
  let left = 0; // Index of the leftmost element
  let right = arr.length - 1; // Index of the rightmost element

  // Continue searching while the left index is less than or equal to the right index
  while (left <= right) {
    // Calculate the middle index of the current search range
    let mid = Math.floor((left + right) / 2);

    // If the middle element is equal to the target value, return its index
    if (arr[mid] === x) return mid;
    // If the middle element is less than the target value, adjust the left index to search in the right half
    else if (arr[mid] < x) left = mid + 1;
    // If the middle element is greater than the target value, adjust the right index to search in the left half
    else right = mid - 1;
  }

  // If the target value is not found in the array, return -1
  return -1;
}

let arr = [2, 3, 4, 10, 40]; // Define the sorted array
let x = 10; // Define the target value to search for
console.log(binarySearch(arr, x)); // Output: 3 (index of the target value in the array)

function bubbleSort(arr) {
  let n = arr.length; // Get the length of the array

  // Outer loop for each pass through the array
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing adjacent elements
    // The last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // If the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // Return the sorted array
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]

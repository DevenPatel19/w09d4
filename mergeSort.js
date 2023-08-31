
// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
    // Hint: We'll want to track our left/right index positions. This does not need to be in place, so you can push them into a new array.
    // Due to not knowing the lengths of the submitted arrays, while loops are recommended.

    // If we have two arrays that are different lengths, we'd want to handle for that and be ready to push any remaining values too!

}

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * 
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */

function mergeSort(numbers) {
  // Base case: If the numbers has only one element, return it.
  if (numbers.length <= 1) {
    return numbers;
  }

  // Recursive case: Split the numbers into two halves, sort each half recursively, and then merge the two sorted halves.
  const middle = Math.floor(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, middle));
  const right = mergeSort(numbers.slice(middle));
  return merge(left, right);
}

function merge(left, right) {
  // Create a new numbers to store the merged elements.
  const merged = [];

  // Iterate over the left and right numbers, adding the smaller element to the merged numbers each time.
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left or right numbers to the merged numbers.
  merged.push(...left.slice(i));
  merged.push(...right.slice(j));

  return merged;
}

console.log(mergeSort(numbersRandomOrder));
console.log(mergeSort(numbersOrdered));
console.log(mergeSort(numbersReversed));
console.log(expectedSort)
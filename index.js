var numbers = [12, 10, 15, 11, 14, 13, 16];

const srtBtn = document.querySelector("button");
const unsortedEl = document.getElementById("unsorted");
const sortedEl = document.getElementById("sorted");

unsortedEl.innerHTML += JSON.stringify(numbers);
srtBtn.addEventListener("click", () => {
  const sortedArr = sortArr(numbers);
  sortedEl.innerHTML += JSON.stringify(sortedArr);
});

function sortArr(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - 2; j++) {
      if (arr[j - 1] > arr[j]) {
        const value = arr[j - 1];
        // console.table({ jSub1: arr[j - 1], jSimple: arr[j] });
        arr[j - 1] = arr[j];
        arr[j] = value;
      }
    }
  }
  return arr;
}
console.log("unsorted array is: ", numbers);

const sortedArr = sortArr(numbers);
console.log("sorted array is: ", sortedArr);

/*

Pseodocode:

Repeat n-1 times
  For i from 0 to n-2
    If i'th and i+1'th elements out of order
      Swap them



(n-1) x (n-2)
n^2 - 2n- 1n+ 2
n^2 - 1n + 2

Big O Notation and Omega notation same here
O(n^2)


<<  Bubble Sort  >>

Worst Case Scenario: O(n^2)

The array is in the reverse order; we have to bubble each of the n elements
all the way across the array,  since we can only fully bubble one element
into position per pass, we must do this n times.

Best Case Scenario: Omega(n)

The array is already perfectly sorted, and we make no swaps on the first pass.
*/

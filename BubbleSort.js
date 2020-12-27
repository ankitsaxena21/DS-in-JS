// Bubble Sorting Algorithm
// A sorting algorithm where the largest values bubble up to the top.(In each iteration more the largest element at the end of the array)
// Below is the example of one single iteration. 5 (largest element) is move to the end.
// [5, 3, 4, 1, 2]
// [3, 5, 4, 1, 2]
// [3, 4, 5, 1, 2]
// [3, 4, 1, 5, 2]
// [3, 4, 1, 2, 5]

// Algo
// 1. Start the looping from i (end of the Array) to the beginning.
// 2. Start an inner loop from j to i-1.
// 3. if arr[j] > arr[j+1], swap them.
// 4. Return the sorted array.

// Code

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // last i elements are sorted so - arr.lenght - i - 1
        for (let j = 0; j < arr.length - i -1 ; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const sortedArray = bubbleSort([15,22,4,6,11]);
console.log(sortedArray);
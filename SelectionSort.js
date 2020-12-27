// Selection Sort
// Similar to bubble sort, but instead of first placing larger values into sorted position, it places small values into sorted position.
// eg. of one interation
// [5, 3, 4, 1, 2]
// [5, 3, 4, 1, 2]
// [5, 3, 4, 1, 2]
// [5, 3, 4, 1, 2]
// [1, 3, 4, 5, 2](Swap 5 with 1)

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

const sortedArray = selectionSort([55, 1, 20, 11, 8]);
console.log(sortedArray);
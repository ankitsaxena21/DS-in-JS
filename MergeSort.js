/**
 * Merge Sort is an algorithm where the main list is divided down into two half
 * sized lists, which then have merge sort called on these two smaller lists
 * recursively until there is only a sorted list of one.
 *
 * On the way up the recursive calls, the lists will be merged together inserting
 * the smaller value first, creating a larger sorted list.
 */
/*
*  Doctests
* > merge([5, 4],[ 1, 2, 3])
*  [1, 2, 3, 5, 4]
* > merge([],[1, 2])
*  [1, 2]
* > merge([1, 2, 3], [1])
*  [1, 1, 2, 3]
* > merge([], [])
*  []
*
* > mergeSort([5, 4])
*  [4, 5]
* > mergeSort([8, 4, 10, 15, 9])
*  [4, 8, 9, 10, 15]
* > mergeSort([1, 2, 3])
*  [1, 2, 3]
* > mergeSort([ ])
*  [ ]
*/
// function to merge two arrays in sorted manner as show in above example
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }else {
            results.push(arr2[j]);
            j++;
        }
    }
    // if one array is larger than the other
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    // Break down the lists into smaller pieces to be merged
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  const sortedArray = mergeSort([44, 1, 10, 22, 9]);
  console.log(sortedArray);

//   Time complexity = O(nlogn) -> O(log n) for decompositions(how many times we split the array), O(n) comparisons per decomposition
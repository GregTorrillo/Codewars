// Get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {      //setup loop to go through array
        if(arr[i] > 0) sum += arr[i]           //if arr[i] is greater than zero, add arr[i] to sum
    }
    return sum                                 //return sum 
}

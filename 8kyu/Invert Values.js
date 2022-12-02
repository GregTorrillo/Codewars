/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
//step one: go through each number in the array using the map method
   return array.map(num =>   { 
    //step two: multiply each number by -1
    //step three: return new array
     return num * -1
   })
}


function invert(array) {
   return array.map(num => num * -1)
}

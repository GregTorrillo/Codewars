//Invert values
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


 /* 
step one: go through each number in the array using the map method
step two: multiply each number by -1
step three: return new array
*/

function invert(array) {
   return array.map(num =>   {
     return num * -1
   })
}


function invert(array) {
   return array.map(num => num * -1)
}

/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples:
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/

function alternate(n, firstValue, secondValue){
  let result = []
  for(let index = 0; index < n; index++){
    if(!(index % 2)){
      result.push(firstValue)
    }else{
      result.push(secondValue)
    }
  }
  return result 
}

const alternative = (n, firstValue, secondValue) => Array.from({length: n},(_,index) => !(index % 2) ? firstValue : secondValue 

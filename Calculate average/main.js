//Calculate average
//Write a function which calculates the average of the numbers in a given list.
function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
      sum += array[i];
  }
  return (sum / array.length) || 0; // returns 0 if the value in ( ) evaluates to a falsy value, (i.e. NaN)
}

/*
We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

let stringToNumber = function(str){
  
  return +str 
}

let stringToNumber = function(str){
  return Number(str);
}


let stringToNumber = function(str){
  return parseInt(str);
}

const stringToNumber = str => Number(str)

const stringToNumber = s => parseInt(s);

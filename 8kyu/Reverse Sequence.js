//Reversed sequence
//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let arr = [];                 //intialize an array
  for (let i=n; i>0; i--) {     //loop down from n to 1
    arr.push(i);                //push each i to the answer array
    } return arr;               //return arr
}

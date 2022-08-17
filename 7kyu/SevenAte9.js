/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
  let result = ''
  for(let index = 0; index < str.length; index++){
    result += str[index]
    if(str[index] == '7' && str[index + 1] == '9' && str[index + 2] == '7' ){
      index++
    }
  }
  return result 
}

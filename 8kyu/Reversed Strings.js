// Complete the solution so that it reverses the string passed into it

function solution(str){
  //convert the string to an array
       let array = str.split("");

    //reverse method
    array.reverse()

    //convert it back to a string and return
    return array.join("")
}

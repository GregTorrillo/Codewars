// Complete the solution so that it reverses the string passed into it.

function solution(str){
  //convert the string to an array
       let array = str.split("");

    //Use the reverse method
    array.reverse()

    //Convert it back to a string and return
    return array.join("")
}

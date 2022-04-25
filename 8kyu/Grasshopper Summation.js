//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//loop solution
var summation = function (num) {
  let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}


//Gauss Formula
var summation = function (num) {
    return num * (num + 1) / 2
}


//reduce() 
var summation = function (num) {
    return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
}


//recursion
var summation = function (num) {
    return num ? num + summation(num - 1) : num
}

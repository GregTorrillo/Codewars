/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed
The geese are any strings in the following array, which is pre-populated in your solution:*/


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter(bird => geese.indexOf(bird) < 0)
}

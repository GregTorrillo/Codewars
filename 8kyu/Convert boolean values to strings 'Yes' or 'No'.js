//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//FUNDAMENTALSBOOLEANSBEST PRACTICES


function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}


function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Example:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.*/

function remove (string) {
  if (string[string.length - 1] == '!') {
    return string.slice(0,-1)
  }else {
    return string
  }
}

function remove(string) {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
}

const quarterOf = (month) => {
  return Math.ceil(month / 3);
}


const quarterOf = (month) => {
    
  let firstQuarter = [1,2,3]
  let secondQuarter = [4,5,6]
  let thirdQuarter = [7,8,9]
  let fourthQuarter = [10,11,12]
  
  let i = 0
  for(i in firstQuarter){
    if (firstQuarter.includes(month)){
      return 1
    }else if (secondQuarter.includes(month)){
      return 2
    }else if (thirdQuarter.includes(month)){
      return 3
    }else if (fourthQuarter.includes(month)){
      return 4
    }
  }
  
}


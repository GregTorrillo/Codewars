//Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(str){
  let newStr = "";
  for(let i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}


function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}


'use strict';

const a = "([{}])";
const b = "([)]";
const c = "(";

let validateBracket = (str) => {
  if (str.length % 2 != 0) {
    false;
  } else {

    let newStr = str.slice(0, str.length / 2);
    if (newStr == str.slice(str.length / 2 + 1, str.length)) {
      return true;
        
    } else {

      return false;

    }
  }
}


console.log(validateBracket(a));
console.log(b);
console.log(c);

// 'use strict';

// const a = "([{}])";
// const b = "([)]";
// const c = "(";

// let validateBracket = (str) => {
//   if (str.length % 2 != 0) {
//     false;
//   } else {

//     let newStr = str.slice(0, str.length / 2);
//     if (newStr == str.slice(str.length / 2 + 1, str.length)) {
//       return true;
        
//     } else {

//       return false;

//     }
//   }
// }


// console.log(validateBracket(a));
// console.log(b);
// console.log(c);

function balancedBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let check;
    switch (character) {
      case ')':
        check = stack.pop();
        if (check === '{' || check === '[') {
          return false;
        }
        break;
      case '}':
        check = stack.pop();
        if (check === '(' || check === '[') {
          return false;
        }
        break;
      case ']':
        check = stack.pop();
        if (check === '(' || check === '{') {
          return false;
        }
    }
  }
  return (stack.length === 0);
}
module.exports = balancedBrackets;

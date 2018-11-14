// <--- 1: Reverse a string --->

// Native array methods approach
const reverse = (string) => {
  return string.split('').reverse().join('');
}
//Iterative for of approach
const _reverse = (string) => {
  let result = "";

  for (let char of string) {
    result = char + result;
  }

  return result;
}
//HOF reducer approach
const reverse = string => string.split("").reduce((result, character) => character + result);


// <--- 2:  --->

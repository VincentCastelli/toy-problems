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
const __reverse = string => string.split("").reduce((result, character) => character + result);


// <--- 2: Palindrome  --->

// HOF reduce with equality approach 
const isPalindrome = string => {
  const validChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringChars = string.toLowerCase().split("").reduce((chars, char) =>
              validChars.indexOf(char) > -1 ? chars.concat(char) : chars, []);
  return stringChars.join("") === stringChars.reverse().join("");
};

// Native every approach 
// const isPalindrome = (string) => {
//   string.toLowerCase().split("").every((char, idx) => {
//     char === string[string.length - 1 - idx];
//   });
// }


// <--- 3: Integer Reversal  --->

// Native methods; convert to string and reverse; multiple by the sign after conversion back to number
const reverseNum = (num) => {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}


// <--- 4: Fizz Buzz  --->

const fizzBuzz = (num) => {

}
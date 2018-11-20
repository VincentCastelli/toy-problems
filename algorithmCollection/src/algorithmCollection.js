// <--- 1: Reverse a string --->

// Native array methods approach
const reverse = (string) => {
  return string.split('').reverse().join('');
};
//Iterative for of approach
const _reverse = (string) => {
  let result = "";

  for (let char of string) {
    result = char + result;
  }

  return result;
};
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
// ** Add list of characters to ignore **

// const isPalindrome = (string) => {
//   return string.toLowerCase().split("").every((char, idx) => {
//     return char === string[string.length - 1 - idx];
//   });
// }


// <--- 3: Integer Reversal  --->

// Native methods; convert to string and reverse; multiple by the sign after conversion back to number
const reverseNum = (num) => {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
};


// <--- 4: Fizz Buzz  --->

// If, else if, else block approach
const fizzBuzz = (num) => {
  let output = [];

  for (let i = 1; i <= num; i++) {
    if (i % 6 === 0) {
      output.push('Fizz Buzz');
    } else if (i % 2 === 0) {
      output.push('Fizz');
    } else if (i % 3 === 0) {
      output.push('Buzz');
    } else {
      output.push(i);
    }
  }

  return output;
};


// <--- 5: Max Character  --->

// For of with for in approach using object literal as count table
const maxChar = (str) => {
  let charCount = {};
  let count = 0;
  let maxChar = null;

  for (let char of str) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char] = charCount[char] + 1;
    }
  }

  for (let char in charCount) {
    if (charCount[char] > count) {
      count = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
};


// <--- 6: Anagrams  --->

const anagrams = (str1, str2) => {

};
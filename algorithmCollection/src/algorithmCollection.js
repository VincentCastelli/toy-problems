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


// <--- 5: Max Character --->

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


// <--- 6: Anagrams --->

// Character map with helper function 

const charCount = str => {
  const table = {};
  // replace(regex, substitute)
  // regex: 
  // \W = char that is not a word char a-z; A-Z; 0-9
  // /g = global search; match all occurrences
  for (let char of str.replace(/\W/g, '').toLowerCase()) {
    !table.hasOwnProperty(char) ? table[char] = 1 : table[char] += 1;
  }

  return table;
}
const anagrams = (str1, str2) => {
  const charCount1 = charCount(str1);
  const charCount2 = charCount(str2);

  if (Object.keys(charCount1).length !== Object.keys(charCount2).length) {
    return false;
  }

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Split and sort approach
// Downside the fastest sort will do no better than O(n log n)
const _anagrams = (str1, str2) => {
  str1Count = str1.toLowerCase().split('').sort().join('').trim();
  str2Count = str2.toLowerCase().split('').sort().join('').trim();

  if (str1Count !== str2Count) {
    return false;
  } else {
    return true;
  }
};

// <--- 7: Vowels --->
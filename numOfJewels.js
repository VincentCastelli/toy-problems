/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Examples:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0

Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

const numJewelsInStones = (J, S) => {
  const jSplit = J.split('');
  const sSplit = S.split('');
  let length = 0;
  let numOfJewels = 0;
  
  for (let i = 0; i < sSplit.length; i++) {
      for (let j = 0; j < jSplit.length; j++) {
          if (sSplit[i] === jSplit[j]) {
              numOfJewels++;
          }
      }
  }
  
  return numOfJewels;
};
/*

We are given two sentences A and B. (A sentence is a string of space separated words.  
Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 
You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

*/

const uncommonFromSentences = (A, B) => {
  const arrayA = A.split(' ');
  const arrayB = B.split(' ');
  const countObj = {};
  const resultsArr = [];

  for (let i = 0; i < arrayA.length; i++) {
    if (!countObj.hasOwnProperty(arrayA[i])) {
      countObj[arrayA[i]] = 1;
    } else {
       countObj[arrayA[i]]++; 
    }
  }
  
  for (let j = 0; j < arrayB.length; j++) {
    if (!countObj.hasOwnProperty(arrayB[j])) {
      countObj[arrayB[j]] = 1;
    } else {
        countObj[arrayB[j]]++;
    }
  }
  
  for (let key in countObj) {
      if (countObj[key] === 1) {
          resultsArr.push(key);
      }
  }

  return resultsArr;
};
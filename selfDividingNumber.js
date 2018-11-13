/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

const selfDividingNumbers = (left, right) => {
  let numsArr = [];
  let output = [];
  
  
  for (let i = left; i <= right; i++) {
      numsArr.push(i.toString());
  }
  
  for (let i = 0; i < numsArr.length; i++) {
    let numJoin = numsArr[i];
    let numSplit = numsArr[i].split('');

    if (!numSplit.includes('0')) {
      let check = [];
      for (let j = 0; j <= numSplit.length; j++) {
      
        if (check.length === numSplit.length && !check.includes(false)) {
          output.push(numJoin);
        } else {
          if ((Number(numJoin) % Number(numSplit[j])) === 0 ) {
            check.push(true);
          } else {
            check.push(false);
          }
        }
      }
    }
  }

  return output;
};

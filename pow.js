/*
You are given 2 integers x and y, you need to implement 
a function power that takes them as an input and returns x ^ y

Implement pow(x,y)
pow(x, y) = x ^ y
pow(2, 3) = 8
pow(3, 2) = 9
*/

const pow = (x, y) => {
  if (y < 0) return 1 / pow(x, -y);

  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
}
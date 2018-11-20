var assert = chai.assert;

describe("String Reversal", () => {
  it("Should reverse string", () => {
   assert.equal(reverse("Hello World!"), "!dlroW olleH");
  });
 });

 describe("Palindrome", () => {
  it("Should return true", () => {
   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
  });
  it("Should return false", () => {
   assert.equal(isPalindrome("sit ad est love"), false);
  });
 });

 describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
   assert.equal(reverseNum(1234), 4321);
   assert.equal(reverseNum(-1200), -21);
  });
 });

 describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));
  it("Should output number", () => {
   assert.equal(output[0], 1);
  });
  it("Should output Fizz", () => {
   assert.equal(output[1], "Fizz");
  });
  it("Should output Buzz", () => {
   assert.equal(output[2], "Buzz");
  });
  it("Should output Fizz Buzz", () => {
   assert.equal(output[5], "Fizz Buzz");
  });
 });
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
   assert.equal(reverse(1234), 4321);
   assert.equal(reverse(-1200), -21);
  });
 });
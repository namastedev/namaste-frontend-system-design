// Palindrome Check
// isPalindrome()
const isPalindrome = require("./tdd");

test("// abc -> false", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});
test("// aba -> true", () => {
  const result = isPalindrome("aba");
  expect(result).toBe(true);
});
test("// no input -> null", () => {
  const result = isPalindrome();
  expect(result).toBe(null);
});
test("// null -> null", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});
test("// single letter", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});
test("// 123 -> false", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});
test("// 121 -> true", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});
test("// -121 -> ignore negaitve sign", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});
test("// Boolean , {}, [], ()=>{} -> null", () => {
  const result = isPalindrome({});
  expect(result).toBe(null);
});
test("// Aba -> true", () => {
  const result = isPalindrome("Aba");
  expect(result).toBe(true);
});

test("// white spaces -> ignore white spaces", () => {
  const result = isPalindrome("   aba  ");
  expect(result).toBe(true);
});
test("// length check", () => {
  const result = isPalindrome("abcdefghijklmnopqrstuvwxyz");
  expect(result).toBe(null);
});
// Home Work - multiple inputs -> ignore the rest

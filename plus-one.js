/*Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
  // Start from right side of the array
  // If the last number is less than 9 then add 1 and break. 
  // If the last number is not less than 9 then make the number at the index 0
  // If this is the first index then add 1 at the left side of the array and break.
  // Keep going until index >= 0
  
  let index = digits.length - 1;
  while(index >= 0) {
      let digit = digits[index];
      let sDigit = digit.toString();
      if(digit < 9) {
          digits[index] = digit + 1;
          break;
      } else {
          digits[index] = 0;
          if(index === 0) {
              digits.unshift(1);
              break;
          }
      }
      index--;
  }
  return digits;
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
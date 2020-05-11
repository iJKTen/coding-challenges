/*Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  // If the length of the string is odd then you need not worry about switching the letter in the center.
  // If the length is even then you remove 1 from the middle because index starts from 0.
  // Then you start from 0 till the middle of the string and at the same time find out the index of end of string
  // Then you simply switch one letter with the other with the help of a temporary variable.

  let endIndex = s.length - 1;
  let midOfArray = Math.floor(s.length / 2);
  if(s % 2 !== 1) {
      midOfArray--;
  }
  
  //Start from 0 till the middle of the string
  for(let index = 0; index <= midOfArray; index++) {
      
      //Switch two elements
      let temp = s[index];
      s[index] = s[endIndex];
      s[endIndex] = temp;

      endIndex--;
  }
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
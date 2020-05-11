/* Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
  // You will remove an item from the array and check if that element is present in the 
  // array or not. Keep doing this until the length of the array > 0
  
  while(nums.length > 0) {
      let num = nums.pop();
      if(nums.indexOf(num) > -1) {
          return true;
      }
  }
  return false;
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
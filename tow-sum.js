/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];
  let y = 0, index = 0;
  for(let i = 0; i < nums.length; i++) {        
      y = target - nums[i];
      index = nums.indexOf(y);
      if(index >= 0 && index != i) {
          result.push(i);
          result.push(index);
          break;
      }
  }
  return result;
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
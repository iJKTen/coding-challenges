// Given an array, rotate the array to the right by k steps, where k is non-negative.
/*Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
  // while k is > 0
  // remove the last element from the array and add it to the top
  
  while(k > 0) {
      let temp = nums.pop();
      nums.unshift(temp)
      k--;
  }
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const unique = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i++) {
      let index = unique.indexOf(nums[i])
      if(index >= 0) {
         unique.splice(index, 1)
      } else {
          unique.push(nums[i])
      }
  }
  return unique[0]
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
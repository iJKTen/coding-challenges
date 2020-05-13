/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) {

  //For the sum to be 0 you need a negative number so sort the array to start with negative numbers first.
    
  // You will start from the left of the array, pick a number and find two other
  // numbers which will give you 0 after adding all the numbers. 
  // Remember, you are starting from the left of the array. 
  
  // Let's decide the first number in our 3sum to be the number at index 0.
  // Now you need two pointers, which keeps track of the other two numbers. 
  // One of the pointer can be index + 1 and the other pointer will start from the
  // end of the array because end of the array will contain at least one positive integer.
  
  // If the length of the array is less than 3 then return because the sum cannot be 0
  if(nums.length < 3) {
      return [];
  }
  
  // Sort the array
  // You do this because you are starting from the left of the array and you need a first
  // number which will give you a 0 after two numbers are added to it. 
  // So this first number is going to be a negative number because adding positive numbers 
  // will not give us 0.
  nums.sort((a, b) => a - b);
  
  // Instead of hardcoding this 0 save it in a variable.
  let target = 0;
  
  // Keep track of your results
  let results = [];
  
  //keep track of elements which result in a 0 sum and refer to this so you do not have any duplicates
  let visitedElements = {};
  
  // You start from the 0 index but stop at two places before the array because
  // you are adding three numbers and teh first number is at index and the other two numbers you will track them with two pointers and that is why you subtract 2 from the length
  for(let index = 0; index < nums.length - 2; index++) {
      
      // If the first value is greator then 0 then break because we have sorted the array
      // and from now on you will only get positive numbers which will not result in a
      // sum of 0
      if(nums[index] > 0) {
          break;
      }
      
      // If you have seen this number before then skip because this is a duplicate number
      // and you will find the same sum and you have already processed this sum. 
      if(index > 0 && nums[index] === nums[index - 1]) {
          continue;
      }
      
      // These two variables will keep track of your other two numbers.
      let secondIndex = index + 1;
      let thirdIndex = nums.length - 1;
      
      // Keeping the value at index, secondIndex and thirdIndex will help you find
      // the other two numbers. 
      // Increment secondIndex and decrement thirdIndex if the sum with index is not 0
      while(secondIndex < thirdIndex) {
          let sum = nums[index] + nums[secondIndex] + nums[thirdIndex];
          
          if(sum === target) {
              let result = [nums[index], nums[secondIndex], nums[thirdIndex]];
              let resultStr = `${nums[index]}${nums[secondIndex]}${nums[thirdIndex]}`;
              
              //If the answer is not present in visitedElements then add it
              if(!visitedElements.hasOwnProperty(resultStr)) {
                  results.push(result);
                  visitedElements[resultStr] = true;
              }
              
              // now you have to increment secondIndex and decrement thirdIndex
              secondIndex++;
              thirdIndex--;
          } else if (sum < target) {
              // If the sum is smaller than 0 then move the second index
              secondIndex++;
          } else if(sum > target) {
              // If the sum is greater than 0 then move the thirdIndex
              thirdIndex--;
          }
      }
  }
  
  return results;
};



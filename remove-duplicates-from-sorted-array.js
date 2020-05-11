var removeDuplicates = function(nums) {
    
  // Remove duplicates in place
  // Have two pointers starting at 0 and 1
  // If the next number is the same as the previous number then increment the duplicate pointer
  // If the next number is different then remove the duplicate items from the array and you add -1
  // because you have to leave one item in the array. Donot remove all duplicates
  // increment the original pointer to next element
  // increment the duplicate pointer to original + 1
  
  let originalIndex = 0;
  let duplicateIndex = 1;
  while(duplicateIndex < nums.length) {
      if(nums[originalIndex] === nums[duplicateIndex]) {
          duplicateIndex++;
          if(duplicateIndex === nums.length) {
              nums.splice(originalIndex, duplicateIndex - originalIndex - 1);
          }
      } else {
          nums.splice(originalIndex, duplicateIndex - originalIndex - 1);
          originalIndex++;
          duplicateIndex = originalIndex + 1;
      }
  }
  return nums.length;
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727


/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  
  let result = new ListNode();
  let sum1 = '', sum2 = '';
  let temp = l1;
  
  while(temp) {
      sum1 += temp.val.toString();
      temp = temp.next;
  }
  
  temp = l2;
  while(temp) {
      sum2 += temp.val.toString();
      temp = temp.next;
  }
  
  let sum = parseInt(sum1) + parseInt(sum2)
  let sumArr = sum.toString().split('');

  for(let index = sumArr.length - 1; index >= 0; index--) {
      console.log(sumArr[index])
      let node = new ListNode(sumArr[index])
      if(index === sumArr.length - 1) {
          result = node;
      } else {
          if (result.next === null && index != 0) {
              result.next = new ListNode();
          }
          let temp = result.next;
          do {
              if(temp.next === null) {
                  
              }
          }while (temp.next)
      }
  }
  console.log(result);
};
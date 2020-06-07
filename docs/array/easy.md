## [189 旋转数组](https://leetcode-cn.com/problems/rotate-array/)
20200607
### 思路
k为分界线，左右呼唤数组元素
### code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    let left = nums.splice(len - k)
    // 不知为何这句得不到正确答案，但是调试是可行的
    // nums = [...nums, ...left] 
    nums.splice(0, 0 , ...left)
};
```

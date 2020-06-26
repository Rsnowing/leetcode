## [189 旋转数组](https://leetcode-cn.com/problems/rotate-array/)
20200607
### 思路
k为分界线，左右互换数组元素
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
## [674. 最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)
2020-06-26
### 思路
使用一个数组记录每次遍历得到的连续递增长度，最后获取数组的最大值
### code
```js
function findLengthOfLCIS(nums: number[]): number {
    if (!nums.length) return 0
    let arr = [1], index = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            arr[index]++
        } else {
            index++
            arr[index] = 1
        }
    }
    return Math.max(...arr)
};
```

## [645. 错误的集合](https://leetcode-cn.com/problems/set-mismatch/)
2020-06-26
### 思路
如何找重复的数: arr.indexOf(num) !== arr.lastIndexOf(num)   
不存在的数 arr.indexOf(num) === -1
```js
function findErrorNums(nums: number[]): number[] {
    let res = []
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) !== -1 && nums.indexOf(i) !== nums.lastIndexOf(i)) {
            res[0] = i
        } else if (nums.indexOf(i) === -1) {
            res[1] = i
        }
    }
    return res
};
```
> 注意： indexOf不存在 返回-1！！！ 不要老是想着写非操作
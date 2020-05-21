## 680 [验证回文字符串](https://leetcode-cn.com/problems/valid-palindrome-ii/)
### 思路
左右指针遍历，当左右指向不相等时，删除左或删除右
### code
```
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0 , r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
        }
        l++
        r--
    }
    return true
};
/** 判断是否为回文数 */
function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++
        r--
    }
}

```
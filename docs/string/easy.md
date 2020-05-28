# 与字符串相关的简单题
## 680 [验证回文字符串](https://leetcode-cn.com/problems/valid-palindrome-ii/)
2020-05-21
### 思路
左右指针遍历，当左右指向不相等时，删除左或删除右
### code
```js
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

## [125验证回文字符串](https://leetcode-cn.com/problems/valid-palindrome/)
### 思路
一开始陷入到昨天晚上学会的ascii码转换中，提议中的数字和字母有效想通过ascii码来做，有点蠢哪
### code
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s .replace(/[^\d^\w]/g, '')
                .toLowerCase()
                .split('')
    return arr.join('') === arr.reverse().join('')
};
```

### code 2
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '')
                .toLowerCase()
    let len = s.length,
        low = 0,
        high = len - 1
    while (low < high) {
        if (s[low] === s[high]) {
            low++
            high--
        } else {
            return false
        }
    }
    return true
};
```
2种解法都是打败19%的用户， 108ms执行完成，但是解法2在别人的提交记录中是50ms执行完成。。可能是受限于网速、机器性能吧
> str.replace(/[^\d^\w]/g, ''), str.replace(/[^0-9a-zA-Z]/g, '') 替换除了字母数字之外的字符为空。  
str.toLowerCase() 字符串转成小写  
arr.join('') 将数组转成字符串 【不传参数则以逗号分隔】
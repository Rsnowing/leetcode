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

## [205 同构字符串](https://leetcode-cn.com/problems/isomorphic-strings/)
20200611
### 思路
* 使用map
* 使用indexOf【我居然没有想到】
### code
```js
// map做法
var isIsomorphic = function(s, t) {
    // s = s.split('');
    // t = t.split('');
    let sMap = {}, tMap = {};
    for (let i = 0; i < s.length; i++) {
        if ((!sMap[s[i]] && !tMap[t[i]]) || (sMap[s[i]] === tMap[t[i]])) {
            sMap[s[i]] = i + 1;
            tMap[t[i]] = i + 1;
        } else {
            return false;
        }
    }
    return true;
};
// indexOf
var isIsomorphic2 = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) != t.indexOf(t[i])){
            return false;
        }
    }
    return true;
}
```
> !a  当a = 0 , undefined 时都会被转为true  
字符串在js中可以直接遍历 str[i],不用转成数组

## [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
2020-06-18
### 思路
对2个字符串一顿操作，将他们按照转成数组 =》 字母排序 =》转成字符串 =》 比较字符串相等性。
提交完成之后发现打败了25%的ts提交答案....好像是因为split操作会用到大量的临时内存【看英文版有一个伙伴说的】
### code
```js
function isAnagram(s: string, t: string): boolean {
    s = s.split('').sort().join('')
    t= t.split('').sort().join('')
    return s === t
};
```
### 他山之玉
思路就是新建一个map，遍历s，填充map, 结构如map: {a: 2, b:3},  
对t，如果t中有s没有的 或者t中某元素比s中多 false
```js
// 别人写的 js 我练习转一下
function isAnagram(s: string, t: string): boolean {
    const sLen = s.length,
        tLen = t.length
    if (sLen !== tLen) {
        return false
    }

    interface MapInterface {
        [propName: string]: number;
    }
    let map:MapInterface = {}

    for (let i = 0; i < sLen; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }
    for (let j = 0; j < sLen; j++) {
        if (map[t[j]]) {
            map[t[j]]--
        } else {
            return false
        }
    }
    return true
};
```
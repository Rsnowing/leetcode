
var CheckPermutation = function(s1, s2) {
  if (s1.length !== s2.length) return false
  const map = getLetterMap(s1)
  for (let i = 0; i < s1.length; i++) {
    if (map[s2[i]] === undefined || map[s2[i]] <= 0) {
      return false
    }
    map[s2[i]]--
  }
  return true
};

function getLetterMap(s) {
  const len = s.length
  const map = {}
  for (let i = 0; i < len; i++) {
    if (map[s[i]]) {
      map[s[i]]++
    }
    map[s[i]] = map[s[i]] ? map[s[i]]++ : 1
  }
  return map
}
console.log(CheckPermutation('abb', 'aab'));
// bottleneck useless duplicated
// n 1-1000, a^3 + b^3 = d^3 + c^3
/**
 * {
 *    value: []
 * }
 */
const NUM = 1000
const map = {}
const result = []
for (let i = 1; i <= NUM; i++) {
  for (let j = i + 1; j < NUM; j++) {
    const sum =  Math.pow(i, 3) + Math.pow(j, 3)
    // map[sum].push(`${i},${j}`)
    if (map[sum]) {
      map[sum].push(`${i},${j}`)
    } else {
      map[sum] = [`${i},${j}`]
    }
  }
}

for (const key in map) {
  if (map[key].length > 1) {
    console.log(map[key], key)
  }
}
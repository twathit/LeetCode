// 3. 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 示例 4:
// 输入: s = ""
// 输出: 0

const lengthOfLongestString = (str) => {
  const length = str.length;
  let left = -1, res = 0;
  const reStr = new Map();
  for(let right=0; right<length; right++) {
    if(reStr.has(str[right])){
      left = Math.max(left, reStr.get(str[right]))
    }
    res = Math.max(res, right - left)
    reStr.set(str[right], right)
  }
  return res
}

console.log(lengthOfLongestString(" "))

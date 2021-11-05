// 151. 翻转字符串里的单词
// https://leetcode-cn.com/problems/reverse-words-in-a-string/

const reverseWords = (str) => {
  return str.trim().split(/\s+/).reverse().join(' ');
}

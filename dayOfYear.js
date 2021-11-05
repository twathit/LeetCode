// 1154. 一年中的第几天
// https://leetcode-cn.com/problems/day-of-the-year/

var dayOfYear = function(date) {
  return (Date.parse(date) - Date.parse(date.substring(0, 4) + '-01-01'))/86400000 + 1
};

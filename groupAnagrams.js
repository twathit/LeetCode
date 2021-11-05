// 49. 字母异位词分组
// https://leetcode-cn.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
  const strMap = {};
  const result = [];
  for(let str of strs){
    const tempStr = str.split('').sort().join('');
    if(strMap[tempStr]){
      strMap[tempStr].push(str)
    }else{
      strMap[tempStr] = [str];
    }
  }
  for(let str in strMap){
    result.push(strMap[str])
  }
  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

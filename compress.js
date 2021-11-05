// 443. 压缩字符串
// https://leetcode-cn.com/problems/string-compression/

const compress = (chars) => {
  const len = chars.length;
  let left = 0;
  let write = 0;
  for(let read = 0;read<len;read ++){
    if(read === len-1 || chars[read] !== chars[read+1]){
      chars[write ++] = chars[read];
      const num = read - left + 1;
      console.log(read, left, num);
      if(num > 1){
        const str = num + '';
        for(let i=0;i<str.length;i++){
          chars[write ++] = str[i];
        }
      }
      left = read + 1;
    }
  }
  return write;
}

console.log(compress(["a","a","b","b","c","c","c"]))

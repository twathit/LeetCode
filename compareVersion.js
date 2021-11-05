// 165. 比较版本号
// https://leetcode-cn.com/problems/compare-version-numbers/

const compareVersion = (version1, version2) => {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const n = Math.max(v1.length, v2.length);
  for(let i=0;i<n;i++){
    const x = v1[i] ? parseInt(v1[i]) : 0;
    const y = v2[i] ? parseInt(v2[i]) : 0;
    if(x !== y){
      return x > y ? 1 : -1;
    }
  }
  return 0;
}

const myAtoi = (s) => {
  const reg = /^(\-|\+)?\d+/g;
  const res = s.trim().match(reg);
  return res ? Math.max(Math.min(Number(res[0]), Math.pow(2, 31)-1), -Math.pow(2, 31)) : 0;
}

console.log(myAtoi("   -42"))

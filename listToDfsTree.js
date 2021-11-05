const listToDfsTree = (list) => {
  let res = [];
  if(!list.length) return res;
  if(list.length == 1) return list[0];
  const path = listToDfsTree(list.slice(1));
  list[0].forEach(item => {
    path.forEach(secItem => {
      res.push(`${item}${secItem}`)
    })
  })
  return res
}

function f(matrix) {
  const result = [];
  const len = matrix.length;
  function dfs(res, curr) {
      if (res.length === len) {
          result.push(res.join(''));
          return;
      }
      for (let i = 0; i < matrix[curr].length; i++) {
        res.push(matrix[curr][i]);
        dfs(res, curr + 1);
        res.pop();
      }
  }
  dfs([], 0);
  return result;
}

console.log(listToDfsTree([['a', 'b'], ['n', 'm'], ['0', '1']]))
console.log(f([['a', 'b'], ['n', 'm'], ['0', '1']]))

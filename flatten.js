const flatten = (arr, hash = new Map()) => {
  let result = [];
  if(hash.get(arr)) return hash.get(arr);
  hash.set(arr, result);
  for(let item of arr){
    if(Object.prototype.toString.call(item) == '[object Set]'){
      result = result.concat([...item])
    }else if(Array.isArray(item)){
      result = result.concat(flatten(item));
    }else{
      result.push(item);
    }
  }
  return result;
}
var a = [[1,2],3,new Set([4,5]),[[[[6]]]],a]
console.log(flatten(a))

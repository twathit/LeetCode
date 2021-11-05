const multiRequest = (urls, maxNum) => {
  let count = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    for(let i=0;i<maxNum;i++){
      next();
    }
    function next() {
      let cur = count++;
      fetch(urls[cur]).then((res) => {
        result[cur] = res;
      }).catch((err) => {
        result[cur] = err;
      }).finally(() => {
        if(count < urls.length){
          next()
        }else{
          resolve(result);
        }
      })
    }
  })
}

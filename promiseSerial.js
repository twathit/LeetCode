// promise 串行

const promiseSerial = (tasks) => {
  return tasks.reduce((prevPromise, curPromise) => {
    return prevPromise.then((resList) => {
      return new Promise(resolve => {
        curPromise().then((res) => {
          resolve(resList.concat(res))
        }).catch(() => {
          resolve(resList.concat(null))
        })
      })
      
    })
  }, Promise.resolve([]))
}

const Task = (result, isSuccess = true) => {
  return () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        console.log(`success: ${result}`);
        resolve(result);
      } else {
        console.log(`error: ${result}`);
        reject(result);
      }
    }, 1000);
  });
}

const promiseSerial2 = (tasks) => {
  let prevPromise = Promise.resolve([]);
  while(!!tasks.length){
    const curPromise = tasks.shift();
    prevPromise = prevPromise.then((resList) => {
      return new Promise(resolve => {
        curPromise().then((res) => {
          resolve(resList.concat(res))
        }).catch(() => {
          resolve(resList.concat(null))
        })
      })
    })
  }
  return prevPromise;
}

promiseSerial2([
  Task('A'),
  Task('B'),
  Task('X', false),
  Task('C'),
]).then(resultList => {
  // 这里期望打印 ["A", "B", null, "C"]
  console.log(resultList)
})


console.log('start');
setTimeout(() => {
  console.log('child2');
  Promise.resolve().then(() => {
    console.log('child3');
  })
}, 0);
new Promise(function (resolve, reject) {
  console.log('child4');
  setTimeout(function(){
    console.log('child5');
    resolve('child6');
  })
}).then((res) => {
  console.log('child7');
  setTimeout(() => {
    console.log(res);
  }, 0);
})

['start', 'child4', 'child2', 'child3', 'child5', 'child7', 'child6']

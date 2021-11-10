const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

function myPromise(executor) {
  this.status = STATUS.PENDING;
  this.value = null;
  this.resolveQueue = [];
  this.rejectQueue = [];

  const resolve = (value) => {
    if(this.status == STATUS.PENDING) {
      this.value = value;
      this.status = STATUS.FULFILLED;
      this.resolveQueue.forEach(fn => fn());
    }
  }

  const reject = (reason) => {
    if(this.status == STATUS.PENDING) {
      this.value = reason;
      this.status = STATUS.REJECTED;
      this.rejectQueue.forEach(fn => fn());
    }
  }

  try{
    executor(resolve, reject);
  } catch(err) {
    reject(err)
  }
}

myPromise.prototype.then = function(onResolve, onReject) {
  console.log(onResolve, onReject)
  onResolve = !!onResolve && typeof onResolve == 'function' ? onResolve : value => value;
  onReject = !!onReject && typeof onReject == 'function' ? onReject : reason => { throw reason };
  const promise = new myPromise((resolve, reject) => {
    let self = this;
    if(self.status == STATUS.FULFILLED){
      setTimeout(() => {
        try{
          const value = onResolve(self.value);
          resolvePromise(promise, value, resolve, reject);
        }catch(err) {
          onReject(err)
        }
      })
    }
    if(self.status == STATUS.REJECTED){
      setTimeout(() => {
        try{
          const value = onReject(self.value);
          resolvePromise(promise, value, resolve, reject);
        }catch(err) {
          onReject(err)
        }
      })
    }
    if(self.status == STATUS.PENDING){
      self.resolveQueue.push(() => {
        setTimeout(() => {
          try{
            const value = onResolve(self.value);
            resolvePromise(promise, value, resolve, reject);
          }catch(err) {
            onReject(err)
          }
        })
      })
      self.rejectQueue.push(() => {
        setTimeout(() => {
          try{
            const value = onReject(self.value);
            resolvePromise(promise, value, resolve, reject);
          }catch(err) {
            onReject(err)
          }
        })
      })
    }
  })
  return promise
}

function resolvePromise(promise, value, onResolve, onReject) {
  if(value instanceof promise) {
    value.then(() => {
      resolvePromise(promise, value, onResolve, onReject)
    },
    () => {
      onReject()
    })
  } else {
    onResolve(value)
  }
}

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for(let i=0;i<promises.length;i++){
      Promise.resolve(promises[i]).then((val) => {
        result[i] = val;
        count ++;
        if(count == promises.length){
          resolve(result)
        }
      },
      (err) => {
        return reject(err)
      })
    }
  }) 
}

Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    for(let i=0;i<promises.length;i++){
      Promise.resolve(promises[i]).then((val) => {
        return resolve(val);
      },
      (err) => {
        return reject(err)
      })
    }
  })
}

new myPromise((resolve, reject) => {
  resolve(2)
}).then((val) => {
  console.log('hhhhhhhhhhhh', val)
})

async function async1() {
  console.log('async1 start');
  await async2();  
  console.log('async1 end');  
}    
async function async2() {   
  console.log('async2 start');   
  return new Promise((resolve, reject) => {      
    resolve();      
    console.log('async2 promise');   
  })  
}    
console.log('script start');    
setTimeout(function() {   
  console.log('setTimeout');  
}, 0);    
async1();    
new Promise(function(resolve) {   
  console.log('promise1');   
  resolve();  
}).then(function() {  
  console.log('promise2');  
}).then(function() {   
  console.log('promise3');  
});    
console.log('script end');


function job(fn, wait, n){      
  let count = 0;
  let timer = null;
  return function(...args){
    const that = this;
    setInterval(() => {
      fn.call(that, args)
      count ++
      if(count > n){
        clearInterval(timer);
      }
    }, wait)          
  }  
}

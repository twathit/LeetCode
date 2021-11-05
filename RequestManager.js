class RequestManager {

  constructor(limit) {
      this.limit = limit;
      this.tasks = [];
      this.count = 0;
  }

  

  addRequest(req) {
      this.tasks.push(req);
      const next = () => {    
          if(this.count < this.limit && this.tasks.length){
              const task = this.tasks.shift();
              this.count ++;
              task().then((res) => {
                  console.log(res);
              }).catch((err) => {
                  console.log(err);
              }).finally(() => {
                  this.count --;
                  next();                    
              })
          }                       
      }
      next();                         
  }
}



const task1 = () => Promise.resolve(1);

const task2 = () => Promise.resolve(2);

const task3 = () => Promise.resolve(3);

const task4 = () => Promise.resolve(4);

const task5 = () => Promise.resolve(5);



const req = new RequestManager(3);

req.addRequest(task1);

req.addRequest(task2);

req.addRequest(task3);

req.addRequest(task4);

req.addRequest(task5);

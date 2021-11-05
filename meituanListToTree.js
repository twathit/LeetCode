let list = [
  {
    id: 'A',
    children: ['B', 'C', 'E'], // 根节点
  },
  {
    id: 'B',
    children: ['D'],
  },
  {
    id: 'D',
    children: ['F'],
  },
]

let result = {
  id: 'A',
  children: [
    {
      id: 'B',
      children: [
              {
                  id: 'D',
                  children: []
              }
      ]
    },
    {
      id: 'C',
      children: []
    },
    {
      id: 'E',
      children: []
    }
  ]
}

const listToTree = (list) => {
  let childToParent = {};
  let res = {};
  for(let item of list) {
    item.children.forEach(i => {
      childToParent[i] = item.id;
    })
    item.children = item.children.map(i => {
      return {
        id: i,
        children: []
      }
    })
  }
  for(let item of list){
    let parent = childToParent[item.id]
    if(parent){
      let child = list.find(i => i.id==parent).children.find(j => j.id==item.id);
      child.children = item.children;
    }else{
      res = item;
    }
  }
  console.log(JSON.stringify(res));
}

listToTree(list)

// 原始 list 如下
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];

// 转换后的结果如下
let result = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3
          }
        ]
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4
          }
        ]
      }
    ]
  },
  {
    id:2,
    name:"部门B",
    parentId:0,
    children:[
      {
        id:5,
        name:"部门E",
        parentId:2
      },
      {
        id:7,
        name:"部门G",
        parentId:2
      }
    ]
  }
];

const listToTree = (list) => {
  const convert = (parentId) => {
    let res = [];
    for(let item of list){
      if(item.parentId === parentId){
        const children = convert(item.id);
        if(children.length){
          item.children = children;
        }
        res.push(item);
      }
    }
    return res;
  }
  return convert(0)
}

const listToTree2 = (list) => {
  let res = [];
  for(let item of list){
    if(item.parentId === 0){
      res.push(item);
    }else{
      const parent = list.find(i => i.id === item.parentId);
      parent.children ? parent.children.push(item) : parent.children = [item];
    }
  }
  return res;
}

console.log(JSON.stringify(listToTree2(list)));

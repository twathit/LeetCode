const insertionSort = (arr) => {
  for(let i=1;i<arr.length;i++){
    let preIndex = i-1;
    const cur = arr[i];
    while(preIndex>=0 && arr[preIndex] > cur){
      arr[preIndex + 1] = arr[preIndex];
      preIndex --;
    }
    arr[preIndex + 1] = cur
  }
  return arr;
}

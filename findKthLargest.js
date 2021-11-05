// 215. 数组中的第K个最大元素

const findKthLargest = (nums, k) => {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for(let i=nums.length-1;i>nums.length-k;i--){
    swap(nums, i, 0);
    heapSize--
    maxHeapify(nums, 0, heapSize)
  }

  return nums[0]
}

const buildMaxHeap = (nums, heapSize) => {
  for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
    maxHeapify(nums, i, heapSize)
  }
}

const maxHeapify = (nums, i, heapSize) => {
  let left = 2*i+1;
  let right = 2*i+2;
  let largest = i;
  if(left<heapSize && nums[left] > nums[largest]){
    largest = left;
  }
  if(right<heapSize && nums[right] > nums[largest]){
    largest = right;
  }
  if(largest !== i){
    swap(nums, i, largest);
    maxHeapify(nums, largest, heapSize);
  }  
}

const swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const findKthLargest2 = (nums, k) => {
  return quickSort(nums, 0, nums.length-1, nums.length - k)
}

const quickSort = (arr, left, right, k) => {
  let partitonIndex;
  if(left<right){
    partitonIndex = partition(arr, left, right);
    console.log('==============', arr, partitonIndex)
    if(partitonIndex==k){
      return arr[k]
    }else if(k<partitonIndex){
      return quickSort(arr, left, partitonIndex-1, k)
    }else{
      return quickSort(arr, partitonIndex+1, right, k)
    }
  }
  return arr[left]
}

const partition = (arr, left, right) => {
  let pivot = left;
  let index = left+1;
  for(let i=index;i<=right;i++){
    if(arr[i] < arr[pivot]){
      swap(arr, index, i);
      index ++;
    }
  }
  swap(arr, pivot, index-1);
  return index -1;
}

console.log(findKthLargest2([3,2,1,5,6,4], 2))

const findKthLargest = (nums, k) => {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for(let i=nums.length-1;i>nums.length-k;i--){
    swap(nums, 0, i);
    heapSize--;
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0]
}

const buildMaxHeap = (nums, heapSize) => {
  for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
    maxHeapify(nums, i, heapSize)
  }
}

const maxHeapify = (nums, i, heapSize) => {
  const left = i*2+1;
  const right = i*2+2;
  let max = i;
  if(left < heapSize && nums[left] > nums[max]){
    max = left;
  }
  if(right < heapSize && nums[right] > nums[max]){
    max = right;
  }
  if(max !== i) {
    swap(max, i)
    maxHeapify(nums, max, heapSize);
  }
}

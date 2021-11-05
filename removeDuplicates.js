var removeDuplicates = function(nums){
  if (nums == []) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
      console.log(nums, i)
  }
  console.log(nums.slice(0, i+1));
  return i + 1;
}

console.log(removeDuplicates([1,3,4,4,4,6,7]))

const twoSum = (nums, target) => {
  const sumMap = {};
  for(let i=0; i<nums.length; i++) {
    if(typeof sumMap[nums[i]] == 'undefined'){
      sumMap[target-nums[i]] = i
    } else {
      return [sumMap[nums[i]], i]
    }
  }
  
}

console.log(twoSum([2,7,3,4], 9))

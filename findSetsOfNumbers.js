class Solution {
    findNumOFSets(nums, target){
        return this.findNumOFSetsHelper(nums, target, nums.length -1 );
    }

    findNumOFSets2(nums, target){
        return this.findNumOFSetsHelper2(nums, target, 0);
    }

    findNumOFSetsHelper(nums, target, i){
        if(target === 0)
            return 1;
        else if(target < 0)
            return 0;
        else if(i < 0)
            return 0;
        else if(target < nums[i])
            return this.findNumOFSetsHelper(nums, target, i - 1)
        else return this.findNumOFSetsHelper(nums, target - nums[i], i - 1) + this.findNumOFSetsHelper(nums, target, i - 1)

    }


    findNumOFSetsHelper2(nums, target, sum){
        if(nums.length < 1)
            return 0;
        else if(sum === target)
            return 1;
        else return this.findNumOFSetsHelper(nums.slice(0, -1), target, sum + nums.slice(-1)[0]) + this.findNumOFSetsHelper(nums, target, sum)

    }
}

console.log(new Solution().findNumOFSets([2, 4, 6, 10], 6))
console.log(new Solution().findNumOFSets2([2, 4, 6, 10], 6))
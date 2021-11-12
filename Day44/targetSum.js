class Solution {
    sum(numbers, target){
        return this.sum_helper(numbers, target);
    }

    sum_helper(numbers, target){

        return (function sum_sum_helper(index, total){
            if(index === numbers.length){
                return total === target ? 1: 0;
            }
            
                return sum_sum_helper(index + 1, total + numbers[index])
                + sum_sum_helper(index + 1, total - numbers[index])
        }(0, 0));
        
    }
}


console.log(new Solution().sum([1,1,1,1,1], 3))
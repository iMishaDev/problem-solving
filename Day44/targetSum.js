class Solution {
    sum(numbers, target){
        return this.sum_helper(numbers, target);
    }

    sum_helper(numbers, target){
        let cache = {}
        return (function sum_sum_helper(index, total){
            if(index === numbers.length){
                cache[[index, total]] = total === target ? 1: 0;
                return cache[[index, total]];
            }
            
            cache[[index, total]] = sum_sum_helper(index + 1, total + numbers[index])
                + sum_sum_helper(index + 1, total - numbers[index]);
            return cache[[index, total]];
        }(0, 0));
    }
}


console.log(new Solution().sum([1,1,1,1,1], 3))
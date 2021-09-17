class Solution {
    longestSubsequent(numbers){
        let cache = new Array(numbers.length).fill(1);
        for(let i = 1; i < numbers.length; i++){
            for(let j = 0; j < i; j++){
                if(numbers[j] < numbers[i])
                    cache[i] = Math.max(cache[j] + 1, cache[i]);
            }
        }
        return Math.max(...cache);
    }
}


console.log(new Solution().longestSubsequent([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3]))
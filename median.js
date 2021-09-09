class Solution {
    median(numbers){
        let medians = [];
        for(let i = 0; i < numbers.length; i++){
            let sub = numbers.slice(0, i + 1);
            let sum = sub.reduce((val, newval) => val+newval)
            medians[i] = sum/2;
        }

        return medians;
    }
}

console.log(new Solution().median([2, 1, 4, 7, 2, 0, 5]))
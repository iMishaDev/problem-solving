class Solution {
    median(numbers){
        let medians = [];
        for(let i = 0; i < numbers.length; i++){
            let sub = numbers.slice(0, i + 1);
            sub.sort((a, b) => a - b);

            let index = Math.floor(sub.length/ 2);
            
            if(!sub.length % 2)
                medians[i] = sub[index];
            else medians[i] = (sub[index - 1] + sub[index]) / 2.0 || sub[0]
        }

        return medians;
    }
}

console.log(new Solution().median([2, 1, 4, 7, 2, 0, 5]))
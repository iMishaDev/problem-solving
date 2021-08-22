class Solution {
    static findFirstMissingPositiveInteger_1(numbers){

        let leastPositive = 1;
        let visited = {};

        for (const [index, number] of numbers.entries()){
            visited[index] = number;
            if(number > 0 && number === leastPositive){
                let num = number;
                while(visited[num]){
                    num += 1;
                    visited[num]
                }
                
                leastPositive = num;
            }
        }

        return leastPositive;
    }
}

console.log('find the first missing positive integer', Solution.findFirstMissingPositiveInteger([5,2,6,3,4,-1,1]))
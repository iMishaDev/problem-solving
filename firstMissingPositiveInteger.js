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


    static findFirstMissingPositiveInteger_2(numbers){
        let visited = {};
        let leastPositive = 1;

        for (const number of numbers){
            visited[number] = 1;
        }

        for(const number of numbers){
            if(!visited[leastPositive])
                return leastPositive;
            else leastPositive += 1;
        }

        return leastPositive;
    }
}

console.log('find the first missing positive integer', Solution.findFirstMissingPositiveInteger_2([5,2,6,3,4,-1,1]))
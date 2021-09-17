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

        while(visited[leastPositive]){
            leastPositive += 1;
        }

        return leastPositive;
    }
}

console.log('find the first missing positive integer', Solution.findFirstMissingPositiveInteger_2([5,2,6,3,4,-1,1]))
console.log('find the first missing positive integer', Solution.findFirstMissingPositiveInteger_1([5,2,6,3,4,-1,1]))
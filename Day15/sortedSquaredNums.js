class Solution {

    static sortSquared(numbers){
        let negativeIndex = -1; 
        let iterator = 0;
        let results = []
        while(iterator < numbers.length){
            if(numbers[iterator] >= 0){
                if(negativeIndex == -1)
                    negativeIndex = iterator - 1;
            
                while(negativeIndex >= 0 && numbers[iterator] > ( - 1 * numbers[negativeIndex])){
                    results.push(Math.pow(numbers[negativeIndex], 2))
                    negativeIndex -= 1;
                }
                results.push(Math.pow(numbers[iterator], 2))
            }
            iterator += 1;
        }

        return results;

    }
}

console.log('Sort ', Solution.sortSquared([-5, -3, -1, 0, 1, 4, 5]))
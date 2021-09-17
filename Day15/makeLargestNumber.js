class Solution {
    static makeLargestNumber(numbers){

        numbers = numbers.sort((a, b) => {
            if( ("" + a + b) <  ("" + b + a))
                return 1;
            else return -1;
        });

        return numbers.join('')
    }
}

console.log(Solution.makeLargestNumber([17, 7, 2, 45, 72]))
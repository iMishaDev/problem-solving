class Solution {
    static findLongestBitOnes(number){
        let i = 0;
        let calculatedNumber = number;
        let binaryNumber = '';
        let lengths = [];
        let length = 0;

        while(calculatedNumber > 0){
            if(calculatedNumber&1)
                binaryNumber += '1'
            else binaryNumber += '0'
            calculatedNumber = calculatedNumber >> 1;
            i += 1
        }

        for (const num of [...binaryNumber]){
            if (num === '1')
                length += 1;
            else {
                lengths.push(length);
                length = 0;
            }
        }
        lengths.push(length);

        return Math.max(...lengths);
    }
}

console.log('findLongestBitOnes of 242 ', Solution.findLongestBitOnes(242))
class Solution {
    static convert(number){
        const romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        let result = 0;
        let i = 0;
        let digits = number.split('');
        while(i < digits.length){
            if(romanNumerals[digits[i]] < romanNumerals[digits[i + 1]])
                result += romanNumerals[digits[i]]
            else result -= romanNumerals[digits[i]]
            i++;
        }
        return Math.abs(result);
    }
}


console.log('convert roman to decimal ', Solution.convert('MCMIV'))
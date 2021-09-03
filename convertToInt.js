class Solution {
    static convert(number){
        let digits = number.split('');
        let result = 0;
        let decimal = 1;
        for(let i = digits.length - 1; i > -1; i--){
            if(digits[i] === '-')
                result *= -1;
            else result += Number(digits[i]) * decimal;

            decimal *= 10;
        }

        return result;
    }
}

console.log('Convert -105 to integer', Solution.convert('-105'))
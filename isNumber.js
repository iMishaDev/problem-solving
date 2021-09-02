class Solution {
    static isNumber(number){
        let digits = number.split('');
        let isNum = true;
        for (const digit of digits){
            if(!Number(digit) && digit !== '.' && digit !== 'e')
                isNum = false;
        }

        return isNum
    }
}

console.log('is number', Solution.isNumber('12.3'))
console.log('is number', Solution.isNumber('12a'))
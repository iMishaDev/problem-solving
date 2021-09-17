class Solution {
    static isNumber(number){
        let isNum = true;
        for (const digit of [...number]){
            if(!Number(digit) && digit !== '.' && digit !== 'e' && digit !== '-')
                isNum = false;
        }

        return isNum
    }
}

console.log('is number', Solution.isNumber('12.3'))
console.log('is number', Solution.isNumber('12a'))
class Solution {
    static findPalindrome(text){
        let sheet = {};
        let letters = [...text];
        let result = '';
        let odd = '';

        for (const letter of letters){
            if(sheet[letter])
                sheet[letter] += 1;
            else sheet[letter] = 1;
        }

        for (const key in sheet){
            if(sheet[key] % 2 == 0)
                result += key
            else if (odd === '')
                odd = key;
            else return false;
        } 
        return `${result}${odd}${result}`;
    }
}

console.log('find palindrome', Solution.findPalindrome('foxfo'))
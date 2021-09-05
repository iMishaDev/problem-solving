class Solution {
    static isPalindrome(text){
        text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return this.#isPalindromeHelper(text, 0, text.length - 1);
    }


    static #isPalindromeHelper(text, start, end){

        if(start >= end)
            return true;
        
        return text[start] === text[end] && this.#isPalindromeHelper(text, start + 1, end - 1);
    }
}

console.log('isPalindrome', Solution.isPalindrome('Bob'))
console.log('isPalindrome', Solution.isPalindrome('A man, a plan, a canal – Panama'))

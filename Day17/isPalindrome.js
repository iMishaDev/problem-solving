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

    static isPalindromeIterative(text){
        let isPalindrome = true;
        text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        
        for(let i = 0, j = text.length -1 ; i <= text.length/2, j >= text.length/2; i++, j--){
            if(text[i] !== text[j])
                isPalindrome = false;
        }

        return isPalindrome;
    }
}

console.log('isPalindrome', Solution.isPalindrome('Boab'))
console.log('isPalindrome', Solution.isPalindrome('A man, a plan, a canal – Panama'))



console.log('isPalindrome', Solution.isPalindromeIterative('Boab'))
console.log('isPalindrome', Solution.isPalindromeIterative('A man, a plan, a canal – Panama'))
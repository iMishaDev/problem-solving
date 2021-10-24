class Solution {

    reverse(text){
        return  text.split('').reverse().join('');
    }

    is_palindrome(){

    }

    check_palindrome(text){
        if(this.reverse(text) == text){
            return text;
        }
        else if (text[0] == text[text.length - 1]){
            return text[0] + this.check_palindrome(text.slice(1, -1)) + text[text.length - 1];
        } else {
            let first = text[0] + this.check_palindrome(text.slice(1)) + text[0];
            let second = text[text.length-1] + this.check_palindrome(text.slice(0, -1)) + text[text.length-1]

            if(first.length < second.length)
                return first;
            else if(first.length > second.length)
                return second;
            else if(first > second)
                return second;
            else return first;
        }
        
    }
}

console.log(new Solution().check_palindrome('race'))
console.log(new Solution().check_palindrome('google'))
class Solution {

    reverse(text){
        return text.split('').reverse().join('');
    }


    check_palindrome(text){
        return this.check_palindrome_helper(text, {});
    }


    check_palindrome_helper(text, cache){
        if(this.reverse(text) == text){
            cache[text] = text;
            return text;
        }
        else if (text[0] == text[text.length - 1]){
            let t = text[0] + this.check_palindrome_helper(text.slice(1, -1), cache) + text[text.length - 1];
            cache[text] = t;
            return t;
        } else {
            let first = text[0] + this.check_palindrome_helper(text.slice(1), cache) + text[0];
            let second = text[text.length-1] + this.check_palindrome_helper(text.slice(0, -1), cache) + text[text.length-1]

            if(first.length < second.length){
                cache[text] = first;
                return first;
            }
            else if(first.length > second.length){
                cache[text] = second
                return second;
            }
            else if(first > second){
                cache[text] = second;
                return second;

            }
            cache[text] = first;
            return first;
        }
        
    }
}

console.log(new Solution().check_palindrome('race'))
console.log(new Solution().check_palindrome('google'))
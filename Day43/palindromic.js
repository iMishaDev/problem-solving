/**
 * Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 */


class Solution {
    palindromes(text){
        let end = 0;
        let palindromes = [];
        while(end < text.length){
            let left = end;
            let right = end;
            while(left >= 0 && right <= text.length && text[left] === text[right]){
                let t = text.slice(left, right + 1);
                palindromes.push(t)
                left -=1;
                right +=1;
            }

            left = end;
            right = end + 1;
            while(left >= 0 && right <= text.length && text[left] === text[right]){
                let t = text.slice(left, right + 1);
                palindromes.push(t)
                left -=1;
                right +=1;
            }

            end += 1
        }

        return palindromes;
    }
}

console.log(new Solution().palindromes('abc'))
console.log(new Solution().palindromes('aaa'))
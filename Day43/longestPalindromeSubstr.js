/**
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 
 */

class Solution {
    get_longest(text){
        let end = 0;
        let substring_Length = 0
        let longest_substring = text[0];

        while(end < text.length){
            let left = end;
            let right = end;
            while(left > 0 && right < text.length && text[left] === text[right]){
                if(right - left + 1 > substring_Length){
                    substring_Length = right - left + 1
                    longest_substring = text.slice(left, right + 1);
                }
                left -=1;
                right +=1;

            }


            left = end;
            right = end + 1;
            while(left > 0 && right < text.length && text[left] === text[right]){
                if(right - left + 1 > substring_Length){
                    substring_Length = right - left + 1
                    longest_substring = text.slice(left, right + 1);
                }
                left -=1;
                right +=1;

            }
            end += 1;
        }

        return longest_substring;
    }

    valid_palindrome(text, start, end){
        if(start >= end) return true
        return text[start] === text[end] && this.valid_palindrome(text, start + 1, end - 1)
    }
}

console.log(new Solution().get_longest('babad'))
console.log(new Solution().get_longest('cbbd'))
console.log(new Solution().get_longest('a'))
console.log(new Solution().get_longest('ac'))
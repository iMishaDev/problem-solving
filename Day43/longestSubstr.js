/**
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 
 */

class Solution {
    get_longest(text){
        let sheet = new Map();
        let end = 0;
        let start = 0;
        let min_sub = 0;

        while(end < text.length){
            while(sheet.has(text[end])){
                sheet.delete(text[start])
                start += 1;
            }

            sheet.set(text[end], 1);
            min_sub = Math.max(min_sub, (end - start) + 1)

            end += 1;
        }

        return min_sub;
    }
}

console.log(new Solution().get_longest('abcabcbb'))
console.log(new Solution().get_longest('bbbbb'))
console.log(new Solution().get_longest('pwwkew'))
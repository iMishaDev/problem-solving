/**
 * Given two strings s and t of lengths m and n respectively, 
 * return the minimum window substring of s such that every character in t 
 * (including duplicates) is included in the window. If there is no such substring, 
 * return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

 */

class Solution {
    find(s, t){
        let sheet = {};
        let start = 0;
        let end = 0;
        let substring = '';
        let minSubstring = s;

        for(const letter of t){
            if(sheet[letter]) 
                sheet[letter] += 1;
            else sheet[letter] = 1;
        }

        while(end < s.length){
            if(!sheet[s[end]] && Object.keys(sheet).length === t.length){
                end += 1
                start += 1
                continue;
            }

            substring += s[end];
            if(sheet[s[end]]> 1)
                sheet[s[end]] -= 1
            else delete sheet[s[end]]

            
            if(Object.keys(sheet).length === 0){
                if(substring.length < minSubstring.length)
                    minSubstring = substring
                substring = '';
                start = end + 1;
                for(const letter of t){
                    if(sheet[letter]) 
                        sheet[letter] += 1;
                    else sheet[letter] = 1;
                }
            }
            end += 1;
        }

        return minSubstring;
    }
}

console.log(new Solution().find('ADOBECODEBANC','ABC'))
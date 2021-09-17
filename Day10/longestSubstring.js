class Solution {
    static getLongestSubstring(strings){
        let start = 0;
        let end = 0;
        let str = '';
        let longest = 0;

        while(end < strings.length){
            while(str[str.length - 1] === strings[end]){
                longest = Math.max(longest, str.length);
                str = '';
                start = end;
            }
            str += strings[end];
            end += 1;
            
        }
    return longest;
    }
}

console.log('Longest Substring ', Solution.getLongestSubstring('aabcbbeacc'))
/**
 * Given an integer k and a string s, 
 * find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, 
the longest substring with k distinct characters is "bcb".
 */

class Solution {
    getDistinct(text, k){
        let end = 0;
        let tempString = '';
        let longest = '';
        let sheet = {};

        while(end < text.length){
            tempString += text[end];
            if(sheet[text[end]])
                sheet[text[end]] += 1;
            else sheet[text[end]] = 1;


            if(tempString.length >= k){
                if(Object.keys(sheet).length === k){
                    if(tempString.length > longest.length)
                        longest = tempString;
                } else if(Object.keys(sheet).length > k){
                    let letter = tempString.slice(0,1);
                    tempString = tempString.slice(1);

                    delete sheet[letter];
                }
            }

            end += 1;
        }

        return longest;
    }
}


console.log(new Solution().getDistinct('abcba', 2))
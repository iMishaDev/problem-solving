/**
 * The edit distance between two strings refers to 
 * the minimum number of character insertions, deletions, and substitutions 
 * required to change one string to the other. For example, 
 * the edit distance between “kitten” and “sitting” is three:
 *  substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
 */

class Solution {
    edit_distance(word1, word2){
        return this.edit_distance_helper(word1, word2);
    }

    edit_distance_helper(word1, word2){
        if(word1.length === 0)
            return [word2, word2.length];

        let [word, length] = this.edit_distance_helper(word1.slice(1), word2.slice(1));

        return [word2[0]+word, word1[0] !== word2[0] ? length + 1: length]
    }
}

console.log(new Solution().edit_distance('kitten', 'sitting'))
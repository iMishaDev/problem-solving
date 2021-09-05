class Solution {
    static isIsogram(word){

        if (!word) {
            return false;
        }
        
        let set = new Set([...word]);

        return set.size === word.length;
    }
}

console.log('Isogram', Solution.isIsogram('dermatoglyphics'))
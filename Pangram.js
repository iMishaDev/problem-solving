class Solution {
    static isPangram(word){

        if(!word || word.length < 26) 
            return false;
        
        let sheet = new Map();
        word = word.replace(/[.,\s]/g, '')

        for(const letter of [...word]){
            sheet.set(letter.toLowerCase(), 1);
        }

        return sheet.size <= 33;
    }
}

console.log('Pangram', Solution.isPangram('Waltz, bad nymph, for quick jigs vex.'))
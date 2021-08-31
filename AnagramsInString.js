class Solution {
    static findAnagrams(text, anagram){
        function hashFun(word){
            let letters = word.split('');
            let wordValue = 0;
            for (const letter of letters){
                wordValue += letter.charCodeAt(0);
            }
            return wordValue;
        }

        let anagramValue = hashFun(anagram);
        let start = 0 ;
        let end = 0; 
        let letters = text.split('');
        let windowText = '';
        let results = [];
        
        while(end < letters.length){
            windowText = letters.slice(start, end+1).join('')
            if(hashFun(windowText) === anagramValue) {
                results.push(start);
            }
            end += 1;
            if(end - start >= 3){
                start += 1;
            }
        }
        return results;
    }
}

console.log(Solution.findAnagrams('acdbacdacb', 'abc'))
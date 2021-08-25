class Solution {
    static canChainWords(words){
        let firstLetterSheet = {}

        for (const word of words){
            firstLetterSheet[word[0]] = word;
        }

        for (const word of words){
            if (!firstLetterSheet[word[word.length - 1]])
                return false;
        }
        return true;
    }


}

console.log('Circle Of Chained Words', Solution.canChainWords(['apple','eggs', 'snack', 'karat', 'tuna']))
console.log('Circle Of Chained Words', Solution.canChainWords(['apple','eggs', 'snack', 'karat', 'tuna', 'jar']))
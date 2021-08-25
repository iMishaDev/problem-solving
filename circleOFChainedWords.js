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

    static canChainWords_1(words){
        let firstLetterSheet = {};
        for (const word of words){
            if(firstLetterSheet[word[0]])
                firstLetterSheet[word[0]].push(word);
            else firstLetterSheet[word[0]] = [word];
        }
        console.log(firstLetterSheet)
        return this.#canChainHelper(firstLetterSheet, words[0], words[0], words.length, new Set());
    }

    static #canChainHelper(sheet, current, start, length, visited){
        if(length === 1)
            return start[0] === current[current.length - 1];
        
        visited.add(current);
        for (const neighbor of sheet[current[current.length - 1]]){
            if(!visited.has(neighbor))
                return this.#canChainHelper(sheet, neighbor, start, length - 1, visited);
            return true;
        }
        visited.delete(current);
        return false;
    }
}

console.log('Circle Of Chained Words', Solution.canChainWords_1(['apple','eggs', 'snack', 'karat', 'tuna']))
console.log('Circle Of Chained Words', Solution.canChainWords_1(['apple','eggs', 'snack', 'karat', 'tuna', 'jar']))
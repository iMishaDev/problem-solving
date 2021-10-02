/**
 * Write an algorithm to justify text. 
 * Given a sequence of words and an integer line length k, 
 * return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. 
There should be at least one space between each word. 
Pad extra spaces when necessary so that each line has exactly length k. 
Spaces should be distributed as equally as possible, with the extra spaces, 
if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] 
and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
 */

class Solution {
    justify(words, length){
        let sentences = this.groupSentences(words, length);
        let final = [];

        for(const sentence of sentences){
            let left = length - sentence.join('').length;
            let numOfSpaces = sentence.length - 1;
            let smallestSpace = Math.floor(left / numOfSpaces)
            let leftoverSpaces = left - (numOfSpaces * smallestSpace)
            let newSentence = '';
            let i = 0;
            
            while(i < sentence.length - 1){
                newSentence += sentence[i];
                newSentence = this.addLeft(newSentence, smallestSpace)
                if(leftoverSpaces){
                    newSentence += ' '
                    leftoverSpaces -= 1
                }
                i += 1;
            }
            
            newSentence += sentence[i];
            final.push(newSentence)
        }

        return final;
    }

    addLeft(word, k){
        while(k){
            word += ' ';
            k -= 1
        }
        return word;
    }
    groupSentences(words, length){
        let line = [];
        let currentLength = 0;
        let sentences = [];
        for(const word of words){
            if(currentLength + word.length + 1  <= length){
                currentLength += word.length + 1
                line.push(word)
            }
            else {
                sentences.push(line);
                currentLength = word.length + 1;
                line= [word];
            }
        }
        sentences.push(line)
        return sentences

    }
}


console.log(new Solution().justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16))
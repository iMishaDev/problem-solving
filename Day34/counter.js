/**
 * Run-length encoding is a fast and simple method of encoding strings. 
 * The basic idea is to represent repeated successive characters as a 
 * single count and character. For example, the string "AAAABBBCCDAA"
 *  would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to 
be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.


 */

class Solution {
    encode(text){
        let encoded = text[0];
        let prevCounter = 0;
    
        for(const letter of text){
            if(letter == encoded[encoded.length - 1]){
                prevCounter += 1
            } 
            else {
                encoded += prevCounter;
                encoded += letter;
                prevCounter = 1
            }
        }

        return encoded;
    }


    decode(text){

    }
}

console.log(new Solution().encode('AAAABBBCCDAA'))
import { createSheet } from '../helpers.js'

class Solution {
    static canWriteNoteFromMagazine(note, magazine){
        let magazineSheet = createSheet();
        let canWriteNote = true;
        let noteLetters = [...note]

        magazine.forEach((letter) => {
            magazineSheet[letter] +=1;
        });
        

        noteLetters.forEach((letter) => {
            if(magazineSheet[letter])
                magazineSheet[letter]--;
            else canWriteNote = false;
        });
        return canWriteNote;
    }

}

console.log('canWriteNoteFromMagazine ' ,Solution.canWriteNoteFromMagazine('Hello', ['H', 'e', 'l', 'o']));
console.log('canWriteNoteFromMagazine ' ,Solution.canWriteNoteFromMagazine('Hello', ['H', 'e', 'l','l', 'o']));
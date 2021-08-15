class Solution {
    static canWriteNoteFromMagazine(note, magazine){
        let magazineSheet = this.#createMagazineSheet();
        let canWriteNote = true;
        let noteLetters = note.split('');

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

    static #createMagazineSheet(array){
        const handler = {
            get: function(obj, prop) {
                return prop in obj ?
                obj[prop] :
                0;
            }
            };
        return new Proxy({}, handler);
    }
}

console.log('canWriteNoteFromMagazine ' ,Solution.canWriteNoteFromMagazine('Hello', ['H', 'e', 'l', 'o']));
console.log('canWriteNoteFromMagazine ' ,Solution.canWriteNoteFromMagazine('Hello', ['H', 'e', 'l','l', 'o']));
class Solution {
    static search(matrix, word){
        for(let i = 0; i < matrix.length; i++){
            if(this.#searchRight(matrix, word, i))
                return true;
            if(this.#searchDown(matrix, word, i))
                return true;
        }
        return false;
    }

    static #searchRight(matrix, word, index){
        for (let i = 0; i < matrix.length; i++){
            if (word[i] !== matrix[index][i])
                return false;
        }
        return true;
    }

    static #searchDown(matrix, word, index){
        for (let i = 0; i < matrix.length; i++){
            if (word[i] !== matrix[i][index])
                return false;
        }
        return true;
    }
}


const matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']]

console.log('Search for FOAM', Solution.search(matrix, 'FOAM'))
console.log('Search for FOAS', Solution.search(matrix, 'FOAS'))
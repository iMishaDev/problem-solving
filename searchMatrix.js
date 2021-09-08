class Solution {
    search(matrix, target){
        return this.#searchHelper(matrix,0, 0, target);
    }

/**
 * Assuming the matrix is not sorted
 * @param {Array} matrix 
 * @param {Integer} col 
 * @param {Integer} row 
 * @param {Boolean} target 
 * @returns 
 */
    #searchHelper(matrix, col, row, target){
        if(col > matrix.length - 1 || row > matrix[0].length - 1)
            return false;
        
        if(matrix[col][row] === target)
            return true;
        
        return this.#searchHelper(matrix, col, row + 1, target) || this.#searchHelper(matrix, col + 1, row, target);
    }
}

const matrix = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
];

console.log(new Solution().search(matrix, 10))
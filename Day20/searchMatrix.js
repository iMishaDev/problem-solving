class Solution {
    search(matrix, target){
        return this.#searchHelper(matrix,0, 0, target);
    }

    search2(matrix, target){
        return this.#searchHelper2(matrix, target);
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


/**
 * Assuming the matrix is  sorted
 * @param {Array} matrix 
 * @param {Boolean} target 
 * @returns 
 */
    #searchHelper2(matrix, target){
        let low = 0;
        let high = matrix.length * matrix[0].length;
        while(low < high){
            let mid = Math.floor((low + high ) / 2);
            
            let mid_val = matrix[Math.floor(mid / matrix.length)][mid % matrix.length];
            if( mid_val == target)
                return true;
            else if(mid_val < target){
                low = mid + 1;
            }else {
                high = mid;
            }
        }

        return false;
    }
}

const matrix = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
];

console.log(new Solution().search(matrix, 10))
console.log(new Solution().search2(matrix, 10))
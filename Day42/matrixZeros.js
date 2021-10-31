/**
 * Given an m x n integer matrix matrix, if an element is 0,
 * set its entire row and column to 0's, and return the matrix.

You must do it in place.
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
 */

class Solution {
    search_zero(matrix){

        let rwoZero = 1;

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] === 0){
                    if (i > 0)
                        matrix[i][0] = 0;
                    else rwoZero = 0;

                    matrix[0][j] = 0;
                }
            }
        }

        for(let i = 1; i < matrix.length; i++){
            for(let j = 1; j < matrix[i].length; j++){
                if(matrix[0][j] === 0 || matrix[i][0] === 0){
                    matrix[i][j] = 0;
                }
            }
        }

        if(matrix[0][0] == 0){
            this.apply_zeros_col(matrix, 0)
        }
        if(rwoZero === 0){
            this.apply_zeros_row(matrix, 0)
        }

        return matrix;
    }


    apply_zeros_col(matrix, j){
        for(let row = 0; row < matrix.length; row++){
            matrix[row][j] = 0;
        } 
    }

    apply_zeros_row(matrix, i){
        for(let col = 0; col < matrix[0].length; col++){
            matrix[i][col] = 0;
        } 
    }
}

console.log(new Solution().search_zero([[1,1,1],[1,0,1],[1,1,1]]))
console.log(new Solution().search_zero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
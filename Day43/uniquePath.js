/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 
 */

class Solution {
    get_paths(m, n){
        let mat = new Array(m + 2).fill(0).map((el) => new Array(n + 2).fill(0))
        mat[m - 1][n] = 1
        mat[m ][n] = 1

        for(let i = m - 1; i >= 0; i--){
            for(let j = n - 1; j >= 0; j--){
                mat[i][j] = mat[i + 1][j] + mat[i][j + 1]
            }
        }
        return mat[0][0]
    }
}

console.log(new Solution().get_paths(3, 7))
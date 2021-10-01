/**
 * You are given an M by N matrix consisting of booleans that represents a board.
 * Each True boolean represents a wall. 
 * Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate,
return the minimum number of steps required to reach the end coordinate from the start.
If there is no possible path, then return null. You can move up, left, down, and right.
You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left),
the minimum number of steps required to reach the end is 7, 
since we would need to go through (1, 2) because there is a wall 
everywhere else on the second row.
 */

class Solution {

    isValid(matrix, row, col, visited){
        return row >= 0 
        && row < matrix.length 
        && col >= 0 
        && col < matrix[0].length 
        && matrix[row][col] !== 1;
    }



    shortestPath(matrix, start, end){
        let stack = [[...start, 0]];
        let [xEnd, yEnd] = end;
        let visited = {};

        while(stack.length){
            let [xPoint, yPoint, steps] = stack.shift();
            
            if(xPoint === xEnd && yPoint === yEnd)
                return steps;
            
            for(const [x, y] of [[0, 1], [1 , 0], [-1, 0], [0, -1]]){
                if(this.isValid(matrix, xPoint + x, yPoint + y, visited)){
                    stack.push([xPoint + x, yPoint + y, steps + 1])
                }
            }
        }
        return -1;
    }
}

let matrix = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

console.log(new Solution().shortestPath(matrix, [3, 0], [0, 0]))
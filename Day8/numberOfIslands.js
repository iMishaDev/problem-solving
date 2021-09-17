class Solution {
    static getNumOfIslands(grid){
        let count = 0;
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(this.#isLand(grid, i, j)){
                    count += 1;
                    this.#explore(grid, i, j)
                }
            }
        }
        return count;
    }

    static #isLand(grid, i, j){
        if(i < 0 || i >= grid.length || j >= grid[0].length || j < 0)
            return false;
        return grid[i][j] === 1;
    }

    static #explore(grid, i, j){
        if(!this.#isLand(grid, i, j))
            return;
        
        grid[i][j] = 0;

        for (const direction of [[0,1], [1,0], [0, -1], [-1, 0]])
            this.#explore(grid, i + direction[0], j + direction[1]);
    }
}
let grid = [[1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0]];


console.log('the number of islands ', Solution.getNumOfIslands(grid))
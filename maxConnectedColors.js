class Solution {
    static maxConnectedColors(grid){
        let max = 0;
        for (let i = 0; i  <  grid.length; i++){
            for (let j = 0; j < grid[0].length; j++){
                if(this.isColored(grid, i, j)){
                    max = Math.max(this.explore(grid,i, j, 0), max)
                }
            }
        }
        return max;
    }

    static isColored(grid, i, j){
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 )
            return false;
        
        return grid[i][j] === 1;
    }

    static explore(grid, i, j, counter){

        if(!this.isColored(grid, i, j))
            return 0;

        counter += 1;
        grid[i][j] = 0;

        for( const neighbor of [[0, 1], [1, 0], [0, -1], [-1, 0]]){
            counter = Math.max(this.explore(grid, i + neighbor[0], j + neighbor[1], counter), counter);
        }
        return counter;
    }

}

const grid = [
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [0, 1, 0, 0]];


console.log('Max connected colors in grid ', Solution.maxConnectedColors(grid))
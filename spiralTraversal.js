class Grid {
    constructor(grid){
        this.grid = grid;
    }

    #nextDirection(i, j, prev, visited){
        let direction = 'right';

        if(prev[0] === i && prev[1] < j)
            direction = 'right'
        else if (prev[0] < i && prev[1] === j)
            direction = 'down';
        else if (prev[0] === this.grid.length - 1 && prev[1] > j)
            direction = 'left';
        else direction = 'top';

        switch(direction){
            case 'right':
                    if(j < this.grid[i].length - 1  && !visited.has(this.grid[i][j+1]))
                        j++;
                    else i++;
                break;
            case 'left':
                    if(j > 0 && !visited.has(this.grid[i][j-1]))
                        j--;
                    else i--;
                    
                break;
            case 'top':
                    if(i > 0 && !visited.has(this.grid[i-1][j]))
                        i--;
                    else j++;
                break;
            case 'down':
                    if(i < this.grid.length - 1  && !visited.has(this.grid[i+1][j]))
                        i++;
                    else j--;
                break;
        }

        return [i, j];
    }


    spiralPrint(){
        let visited = new Set();
        let counter = 0;
        let i = 0, j = 0;
        let prev = [i, j];
        let size =  this.grid.length * this.grid[0].length;
        let current = [];
        let result = [];
        
        while(counter < size){
            visited.add(this.grid[i][j])
            result.push(this.grid[i][j])
            current = [i, j];
            [i, j] = this.#nextDirection(i, j, prev, visited);
            
            prev = current
            counter ++;
        }

        console.log(result.join(''))
    }
}

let grid = [[1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]

console.log(`Spiral Traversal:  

        [1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]
`, new Grid(grid).spiralPrint())
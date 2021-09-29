class Solution {
    checkBoundries(matrix, row, col, visited){
        return row >= 0 
        && row < matrix.length 
        && col >= 0 
        && col < matrix[0].length 
        && !visited[[row, col]] ;
    }

    iterate(matrix){
        let visited = {};
        let count = 0;
        for(let i =0; i < matrix.length; i++){
            for(let j =0; j < matrix[i].length; j++){
                if(this.checkPath(matrix, i, j, visited)){
                    count += 1;
                }
            }
        }

        return count;
    }

    checkPath(matrix, i, j, visited){
        if(!this.checkBoundries(matrix, i, j, visited))
            return 0;
        let sum = 0;
        
        visited[[i,j]] = 1;
        
        if(matrix[i][j] == '0'){
            return 0;
        }
        if(matrix[i][j] == 'a'){
            matrix[i][j] = '0';
            sum += 1
        }
        
        for(const neighbor of [[1,0], [0,1],[0,-1],[-1,0]]){
            sum += this.checkPath(matrix, i + neighbor[0], j + neighbor[1], visited)
        }
        return sum;
    }
}

let matrix = [
            ['a', '0', 'a'],
            ['a', '0', 'a'],
            ['a', '0', 'a'],
            ['a', '0', 'a']]
console.log(new Solution().iterate(matrix))
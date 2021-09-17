class Solution {
    static paths(matrix){
        return this.#pathsHelper2(matrix, 0, 0, {});
    }

    static #insideBoundries(matrix, p1, p2){
        return p1 >= 0 && p2 >= 0 &&  p1 < matrix.length && p2 < matrix[0].length && matrix[p1][p2] !== 1;
    }


    static #pathsHelper2(matrix, p1, p2, cache){
        if(!this.#insideBoundries(matrix, p1, p2))
            return 0;
        
        if(p1 === matrix.length -1 && p2 === matrix[0].length - 1){
            return 1;
        }
        if(!cache[[p1, p2]]){
            cache[[p1, p2]] = this.#pathsHelper2(matrix, p1, p2 +  1, cache) + this.#pathsHelper2(matrix, p1 + 1, p2, cache) ;
        }
        return cache[[p1, p2]];
    }


    static #pathsHelper(matrix, p1, p2){
        let count = 0;

        if(p1 === matrix.length -1 && p2 === matrix[0].length - 1){
            return 1;
        }

        for(const neighbor of [[0, 1],[1, 0]]){
            if(this.#insideBoundries(matrix, p1 + neighbor[0], p2 + neighbor[1])){
                count += this.#pathsHelper(matrix, p1 + neighbor[0], p2 +  neighbor[1]);
            }
        }

        return count;
    }
}

console.log('maze paths', Solution.paths(
                        [[0, 0, 0],
                        [0, 0, 1],
                        [0, 0, 0]]))